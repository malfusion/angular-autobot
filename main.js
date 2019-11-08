(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/angular-autobot/src/lib/angular-autobot-animations.ts":
/*!************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/angular-autobot-animations.ts ***!
  \************************************************************************/
/*! exports provided: getSlideFadeAnim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideFadeAnim", function() { return getSlideFadeAnim; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function getSlideFadeAnim() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideFadeAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', opacity: 0 }))
        ])
    ]);
}


/***/ }),

/***/ "./projects/angular-autobot/src/lib/angular-autobot-initializer.ts":
/*!*************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/angular-autobot-initializer.ts ***!
  \*************************************************************************/
/*! exports provided: onAppInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppInit", function() { return onAppInit; });
/* harmony import */ var _core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/autobot-message-factory.service */ "./projects/angular-autobot/src/lib/core/autobot-message-factory.service.ts");
/* harmony import */ var _components_message_text_message_text_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/message/text-message/text-message.component */ "./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.ts");


function onAppInit(autobotMessageFactory) {
    return function () {
        autobotMessageFactory.registerComponent(_core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_0__["InbuiltMessageTypes"].TEXT, _components_message_text_message_text_message_component__WEBPACK_IMPORTED_MODULE_1__["TextMessageComponent"]);
        autobotMessageFactory.registerComponent(_core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_0__["InbuiltMessageTypes"].EMBED, _components_message_text_message_text_message_component__WEBPACK_IMPORTED_MODULE_1__["TextMessageComponent"]);
    };
}


/***/ }),

/***/ "./projects/angular-autobot/src/lib/angular-autobot.module.ts":
/*!********************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/angular-autobot.module.ts ***!
  \********************************************************************/
/*! exports provided: AngularAutobotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularAutobotModule", function() { return AngularAutobotModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _components_chatbot_autobot_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chatbot/autobot-chat.component */ "./projects/angular-autobot/src/lib/components/chatbot/autobot-chat.component.ts");
/* harmony import */ var _angular_autobot_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-autobot.service */ "./projects/angular-autobot/src/lib/angular-autobot.service.ts");
/* harmony import */ var _directives_autobot_scroll_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/autobot-scroll.directive */ "./projects/angular-autobot/src/lib/directives/autobot-scroll.directive.ts");
/* harmony import */ var _directives_autobot_markdown_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/autobot-markdown.directive */ "./projects/angular-autobot/src/lib/directives/autobot-markdown.directive.ts");
/* harmony import */ var _directives_autobot_focus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/autobot-focus.directive */ "./projects/angular-autobot/src/lib/directives/autobot-focus.directive.ts");
/* harmony import */ var _components_message_text_message_text_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/message/text-message/text-message.component */ "./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.ts");
/* harmony import */ var _components_message_embed_message_embed_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/message/embed-message/embed-message.component */ "./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/message/message.component */ "./projects/angular-autobot/src/lib/components/message/message.component.ts");
/* harmony import */ var _components_action_action_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/action/action.component */ "./projects/angular-autobot/src/lib/components/action/action.component.ts");
/* harmony import */ var _components_action_select_action_select_action_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/action/select-action/select-action.component */ "./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.ts");
/* harmony import */ var _components_action_button_action_button_action_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/action/button-action/button-action.component */ "./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.ts");
/* harmony import */ var _components_action_input_button_action_input_button_action_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/action/input-button-action/input-button-action.component */ "./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.ts");
/* harmony import */ var _components_action_input_action_input_action_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/action/input-action/input-action.component */ "./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/reducers */ "./projects/angular-autobot/src/lib/store/reducers.ts");
/* harmony import */ var _core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/autobot-message-factory.service */ "./projects/angular-autobot/src/lib/core/autobot-message-factory.service.ts");
/* harmony import */ var _angular_autobot_initializer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./angular-autobot-initializer */ "./projects/angular-autobot/src/lib/angular-autobot-initializer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AngularAutobotModule = /** @class */ (function () {
    function AngularAutobotModule() {
    }
    AngularAutobotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({ autobot: _store_reducers__WEBPACK_IMPORTED_MODULE_19__["autobotStateReducer"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                    maxAge: 1000 // Retains last 25 states
                })
            ],
            declarations: [
                _components_chatbot_autobot_chat_component__WEBPACK_IMPORTED_MODULE_6__["AutobotChatComponent"],
                _directives_autobot_scroll_directive__WEBPACK_IMPORTED_MODULE_8__["AutobotScrollDirective"],
                _directives_autobot_markdown_directive__WEBPACK_IMPORTED_MODULE_9__["AutobotMarkdownDirective"],
                _directives_autobot_focus_directive__WEBPACK_IMPORTED_MODULE_10__["AutobotFocusDirective"],
                _components_message_text_message_text_message_component__WEBPACK_IMPORTED_MODULE_11__["TextMessageComponent"],
                _components_message_embed_message_embed_message_component__WEBPACK_IMPORTED_MODULE_12__["EmbedMessageComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
                _components_action_action_component__WEBPACK_IMPORTED_MODULE_14__["ActionComponent"],
                _components_action_select_action_select_action_component__WEBPACK_IMPORTED_MODULE_15__["SelectActionComponent"],
                _components_action_button_action_button_action_component__WEBPACK_IMPORTED_MODULE_16__["ButtonActionComponent"],
                _components_action_input_button_action_input_button_action_component__WEBPACK_IMPORTED_MODULE_17__["InputButtonActionComponent"],
                _components_action_input_action_input_action_component__WEBPACK_IMPORTED_MODULE_18__["InputActionComponent"]
            ],
            entryComponents: [_components_message_text_message_text_message_component__WEBPACK_IMPORTED_MODULE_11__["TextMessageComponent"], _components_message_embed_message_embed_message_component__WEBPACK_IMPORTED_MODULE_12__["EmbedMessageComponent"]],
            exports: [_components_chatbot_autobot_chat_component__WEBPACK_IMPORTED_MODULE_6__["AutobotChatComponent"]],
            providers: [
                _angular_autobot_service__WEBPACK_IMPORTED_MODULE_7__["AngularAutobotService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: _angular_autobot_initializer__WEBPACK_IMPORTED_MODULE_21__["onAppInit"],
                    multi: true,
                    deps: [_core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_20__["AutobotMessageFactory"]]
                }
            ]
        })
    ], AngularAutobotModule);
    return AngularAutobotModule;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/angular-autobot.service.ts":
/*!*********************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/angular-autobot.service.ts ***!
  \*********************************************************************/
/*! exports provided: AngularAutobotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularAutobotService", function() { return AngularAutobotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_autobot_manager_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/autobot-manager.factory.service */ "./projects/angular-autobot/src/lib/core/autobot-manager.factory.service.ts");
/* harmony import */ var _core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/autobot-message-factory.service */ "./projects/angular-autobot/src/lib/core/autobot-message-factory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularAutobotService = /** @class */ (function () {
    function AngularAutobotService(botManagerFactory, autobotMessageFactory) {
        this.botManagerFactory = botManagerFactory;
        this.autobotMessageFactory = autobotMessageFactory;
    }
    AngularAutobotService.prototype.bot = function (botId) {
        return this.botManagerFactory.getManager(botId);
    };
    AngularAutobotService.prototype.registerComponent = function (compName, component) {
        this.autobotMessageFactory.registerComponent(compName, component);
    };
    AngularAutobotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_autobot_manager_factory_service__WEBPACK_IMPORTED_MODULE_1__["AutobotManagerFactory"],
            _core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_2__["AutobotMessageFactory"]])
    ], AngularAutobotService);
    return AngularAutobotService;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/abstract-action.component.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/abstract-action.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AbstractActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractActionComponent", function() { return AbstractActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AbstractActionComponent = /** @class */ (function () {
    function AbstractActionComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AbstractActionComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], AbstractActionComponent.prototype, "resolver", void 0);
    return AbstractActionComponent;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/action.component.css":
/*!*********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/action.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/action.component.html":
/*!**********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/action.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@slideFadeAnimation] libAutobotScroll>\n  <ng-container [ngSwitch]=\"(action | async).type\">\n    <lib-input-action *ngSwitchCase=\"'text'\" [action]=\"(action | async)\" [resolver]=\"resolver\"></lib-input-action>\n    <!-- <lib-select-action *ngSwitchCase=\"'select'\" [action]=\"(action | async)\" [resolver]=\"resolver\"></lib-select-action> -->\n    <lib-button-action *ngSwitchCase=\"'button'\" [action]=\"(action | async)\" [resolver]=\"resolver\"></lib-button-action>\n    <!-- <lib-input-button-action *ngSwitchCase=\"'buttontext'\" [action]=\"(action | async)\" [resolver]=\"resolver\"></lib-input-button-action> -->\n    <span *ngSwitchDefault>Unknown Message Type</span>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/action.component.ts":
/*!********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/action.component.ts ***!
  \********************************************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionComponent = /** @class */ (function () {
    function ActionComponent() {
    }
    ActionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ActionComponent.prototype, "resolver", void 0);
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lib-action',
            template: __webpack_require__(/*! ./action.component.html */ "./projects/angular-autobot/src/lib/components/action/action.component.html"),
            styles: [__webpack_require__(/*! ./action.component.css */ "./projects/angular-autobot/src/lib/components/action/action.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideFadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', opacity: 0 }))
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.css":
/*!******************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.html":
/*!*******************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"botui-actions-buttons\">\n  <button type=\"button\" *ngFor=\"let item of action.actionData.items\" class=\"botui-actions-buttons-button {{item.cssClass}}\"\n    (click)=\"itemClicked(item)\" autofocus>\n    <i *ngIf=\"item.icon\" class=\"botui-icon botui-action-button-icon fa {{'fa-' + item.icon}}\"></i>\n    {{item.text}}\n  </button>\n</div>"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ButtonActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonActionComponent", function() { return ButtonActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-action.component */ "./projects/angular-autobot/src/lib/components/action/abstract-action.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonActionComponent = /** @class */ (function (_super) {
    __extends(ButtonActionComponent, _super);
    function ButtonActionComponent() {
        return _super.call(this) || this;
    }
    ButtonActionComponent.prototype.ngOnInit = function () { };
    ButtonActionComponent.prototype.itemClicked = function (item) {
        this.resolver(item);
    };
    ButtonActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lib-button-action',
            template: __webpack_require__(/*! ./button-action.component.html */ "./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.html"),
            styles: [__webpack_require__(/*! ./button-action.component.css */ "./projects/angular-autobot/src/lib/components/action/button-action/button-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonActionComponent);
    return ButtonActionComponent;
}(_abstract_action_component__WEBPACK_IMPORTED_MODULE_1__["AbstractActionComponent"]));



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.css":
/*!****************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.html":
/*!*****************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"botui-actions-text\" (ngSubmit)=\"onSubmit()\">\n  <!-- <i *ngIf=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa {{'fa-' + action.text.icon}}\"></i>\n  <input type=\"text\" ref=\"input\" name=\"text-action-input\" [type]=\"action.text.sub_type\" [(ngModel)]=\"action.text.value\" class=\"botui-actions-text-input {{action.text.cssClass}}\"\n    [placeholder]=\"action.text.placeholder\" [size]=\"action.text.size\" required libAutobotFocus/>\n\n  <button type=\"submit\" [ngClass]=\"{'botui-actions-buttons-button': !!action.text.button, 'botui-actions-text-submit': !action.text.button}\">\n    <i *ngIf=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa {{'fa-' + action.text.button.icon}}\"></i>\n    <span>{{(action.text.button && action.text.button.label) || 'Go'}}</span>\n  </button> -->\n\n  <input type=\"text\" ref=\"input\" name=\"text-action-input\" [(ngModel)]=\"textValue\" class=\"botui-actions-text-input\" placeholder=\"Enter answer here...\"\n    libAutobotFocus/>\n  <button type=\"submit\">\n    <span>'Go'</span>\n  </button>\n</form>"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.ts":
/*!***************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InputActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputActionComponent", function() { return InputActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-action.component */ "./projects/angular-autobot/src/lib/components/action/abstract-action.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputActionComponent = /** @class */ (function (_super) {
    __extends(InputActionComponent, _super);
    function InputActionComponent() {
        var _this = _super.call(this) || this;
        _this.textValue = '';
        return _this;
    }
    InputActionComponent.prototype.ngOnInit = function () { };
    InputActionComponent.prototype.onSubmit = function () {
        this.resolver(this.textValue);
    };
    InputActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lib-input-action',
            template: __webpack_require__(/*! ./input-action.component.html */ "./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.html"),
            styles: [__webpack_require__(/*! ./input-action.component.css */ "./projects/angular-autobot/src/lib/components/action/input-action/input-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputActionComponent);
    return InputActionComponent;
}(_abstract_action_component__WEBPACK_IMPORTED_MODULE_1__["AbstractActionComponent"]));



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.css":
/*!******************************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"botui-actions-text {{action.cssClass}}\" (ngSubmit)=\"handle_action_text()\">\n    <i *ngIf=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa {{'fa-' + action.text.icon}}\"></i>\n    <input type=\"text\" ref=\"input\" name=\"button-text-action-input\"\n    [type]=\"action.text.sub_type\"\n    [(ngModel)]=\"action.text.value\"\n    class=\"botui-actions-text-input {{action.text.cssClass}}\"\n    [placeholder]=\"action.text.placeholder\"\n    [size]=\"action.text.size\"\n    required libAutobotFocus />\n    <button type=\"submit\"\n      [ngClass]=\"{'botui-actions-buttons-button': !!action.text.button, 'botui-actions-text-submit': !action.text.button}\">\n      <i *ngIf=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa {{'fa-' + action.text.button.icon}}\"></i>\n      <span>{{(action.text.button && action.text.button.label) || 'Go'}}</span>\n    </button>\n    <div class=\"botui-actions-buttons {{action.cssClass}}\">\n      <button type=\"button\" *ngFor=\"let button of action.button.buttons\" class=\"botui-actions-buttons-button {{button.cssClass}}\"\n        (click)=\"handle_action_button(button)\"\n        autofocus>\n        <i *ngIf=\"button.icon\" class=\"botui-icon botui-action-button-icon fa {{'fa-' + button.icon}}\"></i>\n         {{button.text}}\n      </button>\n    </div>\n  </form>   -->"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: InputButtonActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputButtonActionComponent", function() { return InputButtonActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-action.component */ "./projects/angular-autobot/src/lib/components/action/abstract-action.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputButtonActionComponent = /** @class */ (function (_super) {
    __extends(InputButtonActionComponent, _super);
    function InputButtonActionComponent() {
        return _super.call(this) || this;
    }
    InputButtonActionComponent.prototype.ngOnInit = function () { };
    InputButtonActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lib-input-button-action',
            template: __webpack_require__(/*! ./input-button-action.component.html */ "./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.html"),
            styles: [__webpack_require__(/*! ./input-button-action.component.css */ "./projects/angular-autobot/src/lib/components/action/input-button-action/input-button-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputButtonActionComponent);
    return InputButtonActionComponent;
}(_abstract_action_component__WEBPACK_IMPORTED_MODULE_1__["AbstractActionComponent"]));



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.css":
/*!******************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.html":
/*!*******************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"botui-actions-select {{action.cssClass}}\" (ngSubmit)=\"handle_action_select()\">\n  <i *ngIf=\"action.select.icon\" class=\"botui-icon botui-action-select-icon fa {{'fa-' + action.select.icon}}\"></i>\n   <v-select *ngIf=\"action.select.searchselect && !action.select.multipleselect\"  v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select>\n    <v-select v-else-if=\"action.select.searchselect && action.select.multipleselect\" multiple  v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select>\n  <select [(ngModel)]=\"action.select.value\" name=\"select-action-input\" class=\"botui-actions-text-select {{action.select.cssClass}}\"\n    [size]=\"action.select.size\" required libAutobotFocus>\n    <option *ngFor=\"let option of action.select.options\" [ngClass]=\"action.select.optionClass\" [value]=\"option.value\" [disabled]=\"(option.value == '')?true:false\"\n      [selected]=\"(action.select.value == option.value) ? 'selected' : ''\">\n      {{ option.text }}\n    </option>\n  </select>\n  <button type=\"submit\" [ngClass]=\"{'botui-actions-buttons-button': !!action.select.button, 'botui-actions-select-submit': !action.select.button}\">\n    <i *ngIf=\"action.select.button && action.select.button.icon\" class=\"botui-icon botui-action-button-icon fa {{'fa-' + action.select.button.icon}}\"></i>\n    <span>{{(action.select.button && action.select.button.label) || 'Ok'}}</span>\n  </button>\n</form> -->"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SelectActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectActionComponent", function() { return SelectActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-action.component */ "./projects/angular-autobot/src/lib/components/action/abstract-action.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectActionComponent = /** @class */ (function (_super) {
    __extends(SelectActionComponent, _super);
    function SelectActionComponent() {
        return _super.call(this) || this;
    }
    SelectActionComponent.prototype.ngOnInit = function () { };
    SelectActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autobot-select-action',
            template: __webpack_require__(/*! ./select-action.component.html */ "./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.html"),
            styles: [__webpack_require__(/*! ./select-action.component.css */ "./projects/angular-autobot/src/lib/components/action/select-action/select-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectActionComponent);
    return SelectActionComponent;
}(_abstract_action_component__WEBPACK_IMPORTED_MODULE_1__["AbstractActionComponent"]));



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/chatbot/autobot-chat.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/chatbot/autobot-chat.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"botui botui-container\">\n\n  <!-- {{ isFrozen$ | async | json}} {{ latestMessage$ | async | json}} -->\n  <div class=\"botui-messages-container\">\n    <autobot-message *ngFor=\"let msg of messages$ | async\" [msg]=\"msg\"></autobot-message>\n  </div>\n  <div class=\"botui-actions-container\">\n    <lib-action *ngIf=\"(action$ | async) && (action$ | async).autobotOpts.show\" [action]=\"action$\" [resolver]=\"getCurrentActionResolver()\"></lib-action>\n  </div>\n</div>"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/chatbot/autobot-chat.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/chatbot/autobot-chat.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AutobotChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobotChatComponent", function() { return AutobotChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_autobot_manager_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/autobot-manager.factory.service */ "./projects/angular-autobot/src/lib/core/autobot-manager.factory.service.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/reducers */ "./projects/angular-autobot/src/lib/store/reducers.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutobotChatComponent = /** @class */ (function () {
    function AutobotChatComponent(botManagerFactory, store) {
        this.botManagerFactory = botManagerFactory;
        this.store = store;
        this.messages = [];
        this.messages$ = undefined;
        this.action$ = undefined;
    }
    AutobotChatComponent.prototype.ngOnChanges = function () {
        if (this.botId !== '' && this.botId !== undefined) {
            this.botManager = this.botManagerFactory.getManager(this.botId);
            this.messages$ = this.store.select(Object(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["selectBotById_messagesSortedByDate"])(this.botId));
            this.action$ = this.store.select(Object(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["selectBotById_action"])(this.botId));
            this.isFrozen$ = this.store.select(Object(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["isBotFrozen"])(this.botId));
            this.latestMessage$ = this.store.select(Object(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["selectBotById_messagesLatest"])(this.botId));
        }
    };
    AutobotChatComponent.prototype.ngOnInit = function () { };
    AutobotChatComponent.prototype.getCurrentActionResolver = function () {
        return this.botManager._getCurrentActionResolver();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('botId'),
        __metadata("design:type", String)
    ], AutobotChatComponent.prototype, "botId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AutobotChatComponent.prototype, "opts", void 0);
    AutobotChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autobot-chat',
            template: __webpack_require__(/*! ./autobot-chat.component.html */ "./projects/angular-autobot/src/lib/components/chatbot/autobot-chat.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_core_autobot_manager_factory_service__WEBPACK_IMPORTED_MODULE_1__["AutobotManagerFactory"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AutobotChatComponent);
    return AutobotChatComponent;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.css":
/*!*******************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.html":
/*!********************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe [src]=\"msg.content\" frameborder=\"0\"></iframe>"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EmbedMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedMessageComponent", function() { return EmbedMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmbedMessageComponent = /** @class */ (function () {
    function EmbedMessageComponent() {
    }
    EmbedMessageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmbedMessageComponent.prototype, "msg", void 0);
    EmbedMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lib-embed-message',
            template: __webpack_require__(/*! ./embed-message.component.html */ "./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.html"),
            styles: [__webpack_require__(/*! ./embed-message.component.css */ "./projects/angular-autobot/src/lib/components/message/embed-message/embed-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmbedMessageComponent);
    return EmbedMessageComponent;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/message.component.css":
/*!***********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/message.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/message.component.html":
/*!************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/message.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"botui-message {{msg.cssClass}}\" libAutobotScroll>\n  <div *ngIf=\"msg.loading\" class=\"botui-message-content loading\" [class.human]=\"msg.human\" [@slideFadeAnimation]>\n    <i class=\"dot\"></i>\n    <i class=\"dot\"></i>\n    <i class=\"dot\"></i>\n  </div>\n  <ng-container *ngIf=\"!msg.loading\">\n    <div *ngIf=\"msg.visible\" class=\"botui-message-content {{msg.type}}\" [class.human]=\"msg.human\" [@slideFadeAnimation]>\n      <ng-container [ngSwitch]=\"msg.type\">\n        <lib-text-message *ngSwitchCase=\"'text'\" [msg]=\"msg\"></lib-text-message>\n        <lib-embed-message *ngSwitchCase=\"'embed'\" [msg]=\"msg\"></lib-embed-message>\n        <span *ngSwitchDefault>Unknown Message Type</span>\n      </ng-container>\n\n    </div>\n  </ng-container>\n</div> -->\n\n\n<div class=\"botui-message\" libAutobotScroll>\n  <div class=\"botui-message-content {{msg.type}}\" [class.human]=\"msg.human\" [@slideFadeAnimation]>\n    <ng-container #container>\n    </ng-container>\n  </div>\n</div>\n\n<ng-template #messageLoading>\n  <div class=\"botui-message-content loading\" [class.human]=\"msg.human\" [@slideFadeAnimation]>\n    <i class=\"dot\"></i>\n    <i class=\"dot\"></i>\n    <i class=\"dot\"></i>\n  </div>\n</ng-template>\n\n<ng-template #unknownMessage>\n  <span>Unknown Message Type</span>\n</ng-template>"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/message.component.ts":
/*!**********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/message.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/autobot-message-factory.service */ "./projects/angular-autobot/src/lib/core/autobot-message-factory.service.ts");
/* harmony import */ var _angular_autobot_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-autobot-animations */ "./projects/angular-autobot/src/lib/angular-autobot-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(mesgFactory) {
        this.mesgFactory = mesgFactory;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.loadMessageComponent();
    };
    MessageComponent.prototype.loadMessageComponent = function () {
        if (this.msg.loading) {
            // If message is in loading state, display the loading template
            this.container.createEmbeddedView(this.messageLoadingTpl);
        }
        else {
            // If message is done loading, prepare new message component for projection.
            var resolvedComponentFactory = this.mesgFactory.getComponentFactoryForMessageType(this.msg.type);
            if (resolvedComponentFactory !== undefined) {
                // If message factory is found, create an instance and add input properties
                var compRef = this.container.createComponent(resolvedComponentFactory);
                compRef.instance.msg = this.msg;
            }
            else {
                // If message factory is not found, display 'Unknown Message'
                this.container.createEmbeddedView(this.unknownMessageTpl);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messageLoading'),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "messageLoadingTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('unknownMessage'),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "unknownMessageTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], MessageComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "msg", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autobot-message',
            template: __webpack_require__(/*! ./message.component.html */ "./projects/angular-autobot/src/lib/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./projects/angular-autobot/src/lib/components/message/message.component.css")],
            animations: [Object(_angular_autobot_animations__WEBPACK_IMPORTED_MODULE_2__["getSlideFadeAnim"])()]
        }),
        __metadata("design:paramtypes", [_core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_1__["AutobotMessageFactory"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.css":
/*!*****************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.html":
/*!******************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [autobotMarkdown]=\"msg.content\"></span>"

/***/ }),

/***/ "./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.ts":
/*!****************************************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TextMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageComponent", function() { return TextMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextMessageComponent = /** @class */ (function () {
    function TextMessageComponent() {
    }
    TextMessageComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextMessageComponent.prototype, "msg", void 0);
    TextMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autobot-text-message',
            template: __webpack_require__(/*! ./text-message.component.html */ "./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.html"),
            styles: [__webpack_require__(/*! ./text-message.component.css */ "./projects/angular-autobot/src/lib/components/message/text-message/text-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextMessageComponent);
    return TextMessageComponent;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/core/autobot-manager.factory.service.ts":
/*!**********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/core/autobot-manager.factory.service.ts ***!
  \**********************************************************************************/
/*! exports provided: AutobotManagerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobotManagerFactory", function() { return AutobotManagerFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_autobot_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/autobot-manager */ "./projects/angular-autobot/src/lib/core/autobot-manager.ts");
/* harmony import */ var _core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/autobot-message-factory.service */ "./projects/angular-autobot/src/lib/core/autobot-message-factory.service.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers */ "./projects/angular-autobot/src/lib/store/reducers.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutobotManagerFactory = /** @class */ (function () {
    function AutobotManagerFactory(autobotMessageFactory, store) {
        this.autobotMessageFactory = autobotMessageFactory;
        this.store = store;
        this.managers = {};
    }
    AutobotManagerFactory.prototype.getManager = function (botId) {
        if (!this.managers.hasOwnProperty(botId) || this.managers[botId] === undefined) {
            this.store.dispatch({ type: _store_reducers__WEBPACK_IMPORTED_MODULE_3__["CREATE_BOT"], payload: { botId: botId } });
            this.managers[botId] = this.createManager(botId);
        }
        return this.managers[botId];
    };
    AutobotManagerFactory.prototype.createManager = function (botId) {
        return new _core_autobot_manager__WEBPACK_IMPORTED_MODULE_1__["AutobotManager"](botId, this.autobotMessageFactory, this.store);
    };
    AutobotManagerFactory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_autobot_message_factory_service__WEBPACK_IMPORTED_MODULE_2__["AutobotMessageFactory"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AutobotManagerFactory);
    return AutobotManagerFactory;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/core/autobot-manager.ts":
/*!******************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/core/autobot-manager.ts ***!
  \******************************************************************/
/*! exports provided: AutobotManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobotManager", function() { return AutobotManager; });
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/reducers */ "./projects/angular-autobot/src/lib/store/reducers.ts");

var AutobotManager = /** @class */ (function () {
    function AutobotManager(botId, autobotMessageFactory, store) {
        var _this = this;
        this.botId = botId;
        this.autobotMessageFactory = autobotMessageFactory;
        this.store = store;
        this.store.select(Object(_store_reducers__WEBPACK_IMPORTED_MODULE_0__["isBotFrozen"])(this.botId)).subscribe(function (frozen) {
            _this.botFrozen = frozen;
        });
    }
    AutobotManager.prototype.getId = function () {
        return this.botId;
    };
    /**
     * State Selectors
     */
    AutobotManager.prototype.getMessages = function () {
        return this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_0__["selectBotById_messagesList"]);
    };
    AutobotManager.prototype.getAction = function () {
        return this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_0__["selectBotById_action"]);
    };
    AutobotManager.prototype.getState = function () {
        return this.store;
    };
    /**
     * Store Action Helpers
     */
    AutobotManager.prototype._addMessage = function (message) {
        if (this.autobotMessageFactory.verifyMessageObj(message) && !this.botFrozen) {
            this.store.dispatch({
                type: _store_reducers__WEBPACK_IMPORTED_MODULE_0__["ADD_MESSAGE"],
                payload: { botId: this.botId, message: message }
            });
            return message.id;
        }
    };
    AutobotManager.prototype._getCurrentActionResolver = function () {
        return this._actionPromiseResolver;
    };
    AutobotManager.prototype._setAction = function (action) {
        var _this = this;
        this.store.dispatch({
            type: _store_reducers__WEBPACK_IMPORTED_MODULE_0__["SET_ACTION"],
            payload: { botId: this.botId, action: action }
        });
        var actionP = new Promise(function (res, rej) {
            _this._actionPromiseResolver = res;
        });
        actionP.then(this._unsetAction.bind(this));
        return actionP;
    };
    AutobotManager.prototype._unsetAction = function () {
        this.store.dispatch({
            type: _store_reducers__WEBPACK_IMPORTED_MODULE_0__["SET_ACTION"],
            payload: { botId: this.botId, action: undefined }
        });
        this._actionPromiseResolver = undefined;
    };
    AutobotManager.prototype.addHumanMessage = function (message) {
        if (typeof message === 'string') {
            message = this.autobotMessageFactory.createTextMessage(message);
        }
        message.human = true;
        return this._addMessage(message);
    };
    AutobotManager.prototype.addBotMessage = function (message) {
        if (typeof message === 'string') {
            message = this.autobotMessageFactory.createTextMessage(message);
        }
        message.human = false;
        return this._addMessage(message);
    };
    AutobotManager.prototype.addAction = function (actionName, opts, autobotOpts) {
        if (opts === void 0) { opts = {}; }
        if (autobotOpts === void 0) { autobotOpts = {}; }
        var action = {
            type: actionName,
            actionData: opts,
            autobotOpts: autobotOpts,
            created_date: new Date()
        };
        var actionResolvePromise = this._setAction(action);
        this.processActionAutobotOptions(action);
        return actionResolvePromise;
    };
    AutobotManager.prototype.processActionAutobotOptions = function (action) {
        if (action.autobotOpts.delay !== undefined) {
            setTimeout(function () {
                action.autobotOpts.show = true;
            }, action.autobotOpts.delay);
        }
    };
    AutobotManager.prototype.updateMessageLoaded = function (botId, messageId) {
        this.store.dispatch({
            type: _store_reducers__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MESSAGE_LOADED"],
            payload: { botId: botId, messageId: messageId }
        });
    };
    AutobotManager.prototype.updateMessageContent = function (botId, messageId, content) {
        this.store.dispatch({
            type: _store_reducers__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MESSAGE_CONTENT"],
            payload: { botId: botId, messageId: messageId, content: content }
        });
    };
    return AutobotManager;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/core/autobot-message-factory.service.ts":
/*!**********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/core/autobot-message-factory.service.ts ***!
  \**********************************************************************************/
/*! exports provided: InbuiltMessageTypes, AutobotMessageFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InbuiltMessageTypes", function() { return InbuiltMessageTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobotMessageFactory", function() { return AutobotMessageFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InbuiltMessageTypes = {
    TEXT: 'text',
    EMBED: 'embed'
};
/**
 * Singleton Service to cater to all message creation and validation needs of the library.
 */
var AutobotMessageFactory = /** @class */ (function () {
    function AutobotMessageFactory(resolver) {
        this.resolver = resolver;
        this.customMessageTypes = [];
        this.messageComponentRegistry = {};
    }
    AutobotMessageFactory.prototype.getRegisteredMessageTypes = function () {
        return Object.values(InbuiltMessageTypes).concat(this.customMessageTypes);
    };
    AutobotMessageFactory.prototype.verifyMessageObj = function (message) {
        if (message.id === undefined ||
            typeof message.loading !== 'boolean' ||
            typeof message.visible !== 'boolean' ||
            (message.content === undefined || message.content === null) ||
            typeof message.visible !== 'boolean') {
            console.error('Message Verification Failed.', message);
            return false;
        }
        return true;
    };
    AutobotMessageFactory.prototype.createTextMessage = function (messageStr) {
        return {
            id: uuid_v1__WEBPACK_IMPORTED_MODULE_1__(),
            type: InbuiltMessageTypes.TEXT,
            content: messageStr,
            loading: false,
            visible: true,
            human: false,
            created_date: new Date()
        };
    };
    AutobotMessageFactory.prototype.registerComponent = function (messageType, component) {
        if (messageType) {
            var found = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.customMessageTypes, messageType);
            if (found) {
                throw Error('Component name already registered.');
            }
            this.customMessageTypes.push(messageType);
            this.messageComponentRegistry[messageType] = component;
        }
    };
    AutobotMessageFactory.prototype.getComponentClassForMessageType = function (messageType) {
        return this.messageComponentRegistry[messageType];
    };
    AutobotMessageFactory.prototype.getComponentFactoryForMessageType = function (messageType) {
        var component = this.messageComponentRegistry[messageType];
        if (component) {
            return this.resolver.resolveComponentFactory(component);
        }
    };
    AutobotMessageFactory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AutobotMessageFactory);
    return AutobotMessageFactory;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/directives/autobot-focus.directive.ts":
/*!********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/directives/autobot-focus.directive.ts ***!
  \********************************************************************************/
/*! exports provided: AutobotFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobotFocusDirective", function() { return AutobotFocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutobotFocusDirective = /** @class */ (function () {
    function AutobotFocusDirective(el) {
        el.nativeElement.focus();
    }
    AutobotFocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[libAutobotFocus]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutobotFocusDirective);
    return AutobotFocusDirective;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/directives/autobot-markdown.directive.ts":
/*!***********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/directives/autobot-markdown.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: AutobotMarkdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobotMarkdownDirective", function() { return AutobotMarkdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutobotMarkdownDirective = /** @class */ (function () {
    function AutobotMarkdownDirective(el) {
        this.el = el;
        this._markDownRegex = {
            icon: /!\(([^\)]+)\)/gim,
            image: /!\[(.*?)\]\((.*?)\)/gim,
            link: /\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim // [text](link) ^ can be added at end to set the target as 'blank'
        };
    }
    AutobotMarkdownDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.innerHTML = this._parseMarkDown(this.autobotMarkdown);
    };
    AutobotMarkdownDirective.prototype._parseMarkDown = function (text) {
        return text
            .replace(this._markDownRegex.image, "<img class='botui-message-content-image' src='$2' alt='$1' />")
            .replace(this._markDownRegex.icon, "<i class='botui-icon botui-message-content-icon fa fa-$1'></i>")
            .replace(this._markDownRegex.link, this._linkReplacer);
    };
    AutobotMarkdownDirective.prototype._linkReplacer = function (match, $1, $2, $3) {
        var _target = $3 ? 'blank' : ''; // check if '^' sign is present with link syntax
        return "<a class='botui-message-content-link' target='" + _target + "' href='" + $2 + "'>" + $1 + "</a>";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('autobotMarkdown'),
        __metadata("design:type", String)
    ], AutobotMarkdownDirective.prototype, "autobotMarkdown", void 0);
    AutobotMarkdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[autobotMarkdown]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutobotMarkdownDirective);
    return AutobotMarkdownDirective;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/directives/autobot-scroll.directive.ts":
/*!*********************************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/directives/autobot-scroll.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: AutobotScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobotScrollDirective", function() { return AutobotScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutobotScrollDirective = /** @class */ (function () {
    function AutobotScrollDirective(el) {
        // _container.scrollTop = _container.scrollHeight;
    }
    AutobotScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[libAutobotScroll]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutobotScrollDirective);
    return AutobotScrollDirective;
}());



/***/ }),

/***/ "./projects/angular-autobot/src/lib/store/reducers.ts":
/*!************************************************************!*\
  !*** ./projects/angular-autobot/src/lib/store/reducers.ts ***!
  \************************************************************/
/*! exports provided: CREATE_BOT, ADD_MESSAGE, SET_ACTION, UPDATE_MESSAGE_LOADED, UPDATE_MESSAGE_CONTENT, autobotInitialState, autobotStateReducer, selectAutobotState, selectBotById, selectBotById_messages, selectBotById_messagesList, selectBotById_action, selectBotById_messagesSortedByDate, selectBotById_messagesLatest, selectGlobalSettings, isBotFrozen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BOT", function() { return CREATE_BOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MESSAGE", function() { return ADD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTION", function() { return SET_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MESSAGE_LOADED", function() { return UPDATE_MESSAGE_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MESSAGE_CONTENT", function() { return UPDATE_MESSAGE_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autobotInitialState", function() { return autobotInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autobotStateReducer", function() { return autobotStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAutobotState", function() { return selectAutobotState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBotById", function() { return selectBotById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBotById_messages", function() { return selectBotById_messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBotById_messagesList", function() { return selectBotById_messagesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBotById_action", function() { return selectBotById_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBotById_messagesSortedByDate", function() { return selectBotById_messagesSortedByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBotById_messagesLatest", function() { return selectBotById_messagesLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGlobalSettings", function() { return selectGlobalSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBotFrozen", function() { return isBotFrozen; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

/*******************************
 * Action Constants
 ********************************/
var CREATE_BOT = 'CREATE_BOT';
var ADD_MESSAGE = 'ADD_MESSAGE';
var SET_ACTION = 'SET_ACTION';
var UPDATE_MESSAGE_LOADED = 'UPDATE_MESSAGE_LOADED';
var UPDATE_MESSAGE_CONTENT = 'UPDATE_MESSAGE_CONTENT';
var autobotInitialState = {
    bots: {},
    globalSettings: {
        icansee: true
    }
};
/*******************************
 * Reducer
 ********************************/
function autobotStateReducer(state, action) {
    if (state === void 0) { state = autobotInitialState; }
    switch (action.type) {
        case CREATE_BOT:
            return __assign({}, state, { bots: __assign({}, state.bots, (_a = {}, _a[action.payload.botId] = { action: undefined, messages: {} }, _a)) });
        case ADD_MESSAGE:
            if (state.bots[action.payload.botId] === undefined) {
                return state;
            }
            return __assign({}, state, { bots: __assign({}, state.bots, (_b = {}, _b[action.payload.botId] = __assign({}, state.bots[action.payload.botId], { messages: __assign({}, state.bots[action.payload.botId].messages, (_c = {}, _c[action.payload.message.id] = action.payload.message, _c)) }), _b)) });
        case UPDATE_MESSAGE_LOADED:
            if (state.bots[action.payload.botId] &&
                state.bots[action.payload.botId].messages[action.payload.messageId]) {
                var currentFreeze = state.bots[action.payload.botId].messages[action.payload.messageId].freeze;
                var currentFreezeUntilLoad = state.bots[action.payload.botId].messages[action.payload.messageId].freezeUntilLoad;
                return __assign({}, state, { bots: __assign({}, state.bots, (_d = {}, _d[action.payload.botId] = __assign({}, state.bots[action.payload.botId], { messages: __assign({}, state.bots[action.payload.botId].messages, (_e = {}, _e[action.payload.messageId] = __assign({}, state.bots[action.payload.botId].messages[action.payload.messageId], { freeze: currentFreezeUntilLoad ? false : currentFreeze, loading: false }), _e)) }), _d)) });
            }
            else {
                return state;
            }
        case UPDATE_MESSAGE_CONTENT:
            if (state.bots[action.payload.botId] &&
                state.bots[action.payload.botId].messages[action.payload.messageId]) {
                return __assign({}, state, { bots: __assign({}, state.bots, (_f = {}, _f[action.payload.botId] = __assign({}, state.bots[action.payload.botId], { messages: __assign({}, state.bots[action.payload.botId].messages, (_g = {}, _g[action.payload.messageId] = __assign({}, state.bots[action.payload.botId].messages[action.payload.messageId], { content: action.payload.content }), _g)) }), _f)) });
            }
            else {
                return state;
            }
        case SET_ACTION:
            if (state.bots[action.payload.botId] === undefined) {
                return state;
            }
            return __assign({}, state, { bots: __assign({}, state.bots, (_h = {}, _h[action.payload.botId] = __assign({}, state.bots[action.payload.botId], { action: action.payload.action }), _h)) });
        default:
            return state;
    }
    var _a, _b, _c, _d, _e, _f, _g, _h;
}
/*******************************
 * Selectors
 ********************************/
var selectAutobotState = function (state) { return state.autobot; };
var selectBotById = function (botId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAutobotState, function (state) { return state.bots[botId]; });
};
var selectBotById_messages = function (botId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBotById(botId), function (botState) { return botState.messages; });
};
var selectBotById_messagesList = function (botId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBotById_messages(botId), function (messages) {
        return Object.keys(messages).map(function (key) { return messages[key]; });
    });
};
var selectBotById_action = function (botId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBotById(botId), function (botState) { return botState.action; });
};
var selectBotById_messagesSortedByDate = function (botId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBotById_messagesList(botId), function (messages) {
        return messages.sort(function (a, b) { return a.created_date - b.created_date; });
    });
};
var selectBotById_messagesLatest = function (botId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBotById_messagesList(botId), function (sortedMessages) { return sortedMessages.slice(-1)[0]; });
};
var selectGlobalSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAutobotState, function (state) {
    console.log('in selectglobalsettings', state);
    return state.globalSettings;
});
var isBotFrozen = function (botId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGlobalSettings, selectBotById_action(botId), selectBotById_messagesLatest(botId), function (settings, action, latestMessage) {
        // console.log(botId, settings, action, latestMessage);
        console.log(botId, settings, (action || {}).autobotOpts, (latestMessage || {}).freeze);
        return ((settings || {}).freeze ||
            ((action || {}).autobotOpts || {}).freeze ||
            (latestMessage || {}).freeze ||
            false);
    });
};


/***/ }),

/***/ "./projects/angular-autobot/src/public_api.ts":
/*!****************************************************!*\
  !*** ./projects/angular-autobot/src/public_api.ts ***!
  \****************************************************/
/*! exports provided: AngularAutobotService, AutobotChatComponent, AngularAutobotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_angular_autobot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/angular-autobot.service */ "./projects/angular-autobot/src/lib/angular-autobot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularAutobotService", function() { return _lib_angular_autobot_service__WEBPACK_IMPORTED_MODULE_0__["AngularAutobotService"]; });

/* harmony import */ var _lib_components_chatbot_autobot_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/chatbot/autobot-chat.component */ "./projects/angular-autobot/src/lib/components/chatbot/autobot-chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutobotChatComponent", function() { return _lib_components_chatbot_autobot_chat_component__WEBPACK_IMPORTED_MODULE_1__["AutobotChatComponent"]; });

/* harmony import */ var _lib_angular_autobot_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/angular-autobot.module */ "./projects/angular-autobot/src/lib/angular-autobot.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularAutobotModule", function() { return _lib_angular_autobot_module__WEBPACK_IMPORTED_MODULE_2__["AngularAutobotModule"]; });

/*
 * Public API Surface of angular-autobot
 */





/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatbox {\n  width: 30%;\n  float: left;\n  min-height: 200px;\n  margin-left: 20px;\n  border: thin solid #eee;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>Welcome to Autobot!</h1>\n</div>\n<div class=\"chatbox\">\n  <autobot-chat botId='bot1'></autobot-chat>\n</div>\n<div class=\"chatbox\">\n  <autobot-chat botId='bot2'></autobot-chat>\n</div>\n<div class=\"chatbox\">\n  <autobot-chat botId='bot3'></autobot-chat>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_autobot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-autobot */ "./projects/angular-autobot/src/public_api.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(botService) {
        this.botService = botService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bots = ['bot1', 'bot2', 'bot3'];
        var messages = [
            'Hello there',
            'Im just a bot',
            'I passed the turing test obv!',
            'Am i a bot or a human?',
            "You'll never know"
        ];
        setInterval(function () {
            var randomBot = lodash__WEBPACK_IMPORTED_MODULE_2__["sample"](bots);
            var randomMessage = lodash__WEBPACK_IMPORTED_MODULE_2__["sample"](messages);
            var isHuman = Math.random() > 0.5;
            isHuman
                ? _this.botService.bot(randomBot).addHumanMessage({
                    id: uuid_v1__WEBPACK_IMPORTED_MODULE_3__(),
                    type: 'text',
                    visible: true,
                    loading: false,
                    content: randomMessage,
                    human: false,
                    created_date: new Date()
                })
                : _this.botService.bot(randomBot).addBotMessage({
                    id: uuid_v1__WEBPACK_IMPORTED_MODULE_3__(),
                    type: 'text',
                    visible: true,
                    loading: false,
                    content: randomMessage,
                    human: false,
                    created_date: new Date()
                });
        }, 500);
        this.askAnyQuestion('bot1', 10000);
        this.askAnyQuestion('bot2', 10000);
        this.askAnyQuestion('bot3', 10000);
    };
    AppComponent.prototype.askAnyQuestion = function (botId, timeout) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["sample"]([this.askButtonQuestion.bind(this), this.askTextInputQuestion.bind(this)])(botId, timeout);
    };
    AppComponent.prototype.askTextInputQuestion = function (botId, timeout) {
        var _this = this;
        setTimeout(function () {
            _this.botService
                .bot(botId)
                .addAction('text', {}, { show: true, freeze: true })
                .then(function (res) {
                var asyncMesgId = _this.botService.bot(botId).addHumanMessage({
                    id: uuid_v1__WEBPACK_IMPORTED_MODULE_3__(),
                    type: 'text',
                    visible: true,
                    loading: true,
                    content: res,
                    human: false,
                    created_date: new Date(),
                    freeze: true,
                    freezeUntilLoad: true
                });
                console.log(asyncMesgId);
                _this.doneLoading(botId, asyncMesgId, 1000);
                _this.updateContent(botId, asyncMesgId, "Hahahaha! I'm gone!", 2500);
            });
        }, timeout);
    };
    AppComponent.prototype.askButtonQuestion = function (botId, timeout) {
        var _this = this;
        var buttonItems = [
            {
                text: 'Good',
                value: 'good'
            },
            {
                text: 'Really Good',
                value: 'really_good'
            }
        ];
        setTimeout(function () {
            _this.botService
                .bot(botId)
                .addAction('button', { items: buttonItems }, { delay: 100, freeze: true })
                .then(function (res) {
                _this.botService.bot(botId).addHumanMessage(res.value);
            });
        }, timeout);
    };
    AppComponent.prototype.doneLoading = function (botId, asyncMesgId, timeout) {
        var _this = this;
        setTimeout(function () {
            _this.botService.bot(botId).updateMessageLoaded(botId, asyncMesgId);
        }, timeout);
    };
    AppComponent.prototype.updateContent = function (botId, asyncMesgId, content, timeout) {
        var _this = this;
        setTimeout(function () {
            _this.botService.bot(botId).updateMessageContent(botId, asyncMesgId, content);
        }, timeout);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angular_autobot__WEBPACK_IMPORTED_MODULE_1__["AngularAutobotService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_autobot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-autobot */ "./projects/angular-autobot/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_autobot__WEBPACK_IMPORTED_MODULE_3__["AngularAutobotModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coderpc/Projects/angular-autobot-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map