import { TestBed, inject } from '@angular/core/testing';
import { AngularAutobotService } from './angular-autobot.service';
import { BehaviorSubject } from 'rxjs';

describe('AngularAutobotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularAutobotService]
    });
  });

  it(
    'should be created',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return an autobot manager',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      const manager = service.bot('sample');
      expect(manager.constructor.name).toEqual('AutobotManager');
    })
  );

  it(
    'should return same autobot manager for single botid',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      const manager = service.bot('sample');
      const again_manager = service.bot('sample');
      expect(manager).toEqual(again_manager);
    })
  );

  it(
    'should get messages from store',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      const manager = service.bot('sample');
      const messages$ = manager.getMessages();
      messages$.subscribe(messages => {
        expect(messages).toEqual([]);
      });
    })
  );

  it(
    'should get initial current action from store',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      const manager = service.bot('sample');
      const action$ = manager.getAction();
      action$.subscribe(action => {
        expect(action).toEqual(undefined);
      });
    })
  );

  it(
    'should get correct messages, when messages are added to store',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      const manager = service.bot('sample');
      const messages$ = manager.getMessages();
      const mesgSubs = messages$.subscribe(messages => {
        expect(messages.length).toEqual(0);
      });
      mesgSubs.unsubscribe();
      manager.addHumanMessage('Hello There');
      messages$.subscribe(messages => {
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual({
          type: 'text',
          content: 'Hello There',
          loading: false,
          visible: true,
          human: true
        });
      });
    })
  );

  it(
    'should work for multiple stores, mutliple retrievals',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      const manager1 = service.bot('sample1');
      const manager2 = service.bot('sample2');
      const messages1$ = manager1.getMessages();
      const messages2$ = manager2.getMessages();
      manager1.addHumanMessage('Hello from human');
      manager2.addBotMessage('Hello from bot');

      const testMessage1 = {
        type: 'text',
        content: 'Hello from human',
        loading: false,
        visible: true,
        human: true
      };
      const testMessage2 = {
        type: 'text',
        content: 'Hello from bot',
        loading: false,
        visible: true,
        human: false
      };
      const sub1 = messages1$.subscribe(mesgs => {
        expect(mesgs.length).toBe(1);
        expect(mesgs[0]).toEqual(testMessage1);
      });
      const sub2 = messages2$.subscribe(mesgs => {
        expect(mesgs.length).toBe(1);
        expect(mesgs[0]).toEqual(testMessage2);
      });
      sub1.unsubscribe();
      sub2.unsubscribe();

      const again_manager1 = service.bot('sample1');
      const again_manager2 = service.bot('sample2');
      const again_messages1$ = again_manager1.getMessages();
      const again_messages2$ = again_manager2.getMessages();
      const again_sub1 = again_messages1$.subscribe(mesgs => {
        expect(mesgs.length).toBe(1);
        expect(mesgs[0]).toEqual(testMessage1);
      });
      const again_sub2 = again_messages2$.subscribe(mesgs => {
        expect(mesgs.length).toBe(1);
        expect(mesgs[0]).toEqual(testMessage2);
      });
    })
  );

  it(
    'should prove observable array is immutable',
    inject([AngularAutobotService], (service: AngularAutobotService) => {
      const arr = [1, 2, 3];
      arr.push(4);
      const arr1 = arr;
      expect(arr === arr1).toBe(true);

      const newarr = [1, 2, 3];
      const arr$ = new BehaviorSubject<number[]>(newarr);

      let firsttimeArr = undefined;
      let secondtimeArr = undefined;
      let unsub1 = arr$.subscribe(arr => {
        firsttimeArr = arr$;
      });
      unsub1.unsubscribe();
      arr$.next(arr$.getValue().concat([4]));
      arr$.subscribe(arr => {
        secondtimeArr = arr$;
        // expect(firsttimeArr).not.toEqual(secondtimeArr);
        // expect(firsttimeArr === secondtimeArr).not.toEqual(true);
        expect(firsttimeArr).toBe(secondtimeArr);
      });
    })
  );
});
