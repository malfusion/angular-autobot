# Angular-Autobot
- An angular bot managing service that assists users in managing multiple different chatbots with the single page application and also provide a template UI for every one of them.
- A modification of https://github.com/botui/botui, originally written in VueJs, to Angular 6 with the magic of Observables.

## Demo
https://malfusion.github.io/angular-autobot/

## What is it

- Manages multiple bots within your application with ease
- State of each bot is stored in the background and is ready the moment you introduce it into the UI.
- Makes building chat bots a breeze and highly configurable.
- It's almost as simple as:
  let botSvc : AutobotService
  let bot = botSvc.bot(id)
  bot.addMessage(Message or 'message')
  bot.addAction('actionName', {}, {})

For demo usage build the application using ng serve.
