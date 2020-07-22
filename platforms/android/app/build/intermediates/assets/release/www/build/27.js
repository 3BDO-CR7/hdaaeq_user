webpackJsonp([27],{

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLangPageModule", function() { return ChooseLangPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_lang__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChooseLangPageModule = /** @class */ (function () {
    function ChooseLangPageModule() {
    }
    ChooseLangPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_lang__["a" /* ChooseLangPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_lang__["a" /* ChooseLangPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ChooseLangPageModule);
    return ChooseLangPageModule;
}());

//# sourceMappingURL=choose-lang.module.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseLangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChooseLangPage = /** @class */ (function () {
    function ChooseLangPage(navCtrl, navParams, translate, platform, event, menu, loadingCtrl, oneSignal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.platform = platform;
        this.event = event;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.oneSignal = oneSignal;
        this.oneSignal.startInit('55c1b945-034e-4997-9160-1bade40d0aa4', '356792094039');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
            // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(function () {
            // do something when a notification is opened
        });
        this.oneSignal.endInit();
    }
    ChooseLangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseLangPage');
    };
    ChooseLangPage.prototype.goLogin = function (lang) {
        if (lang == 'en') {
            this.platform.setDir('ltr', true);
            this.menu.enable(true, 'left');
            this.menu.swipeEnable(true, "left");
            this.menu.enable(false, 'right');
            this.menu.swipeEnable(false, 'right');
            localStorage.setItem('hdaaeq_user_lang', lang);
            this.translate.setDefaultLang(lang);
            this.translate.use(lang);
            this.event.publish('change_lang');
        }
        else {
            this.platform.setDir('rtl', true);
            this.menu.enable(true, 'right');
            this.menu.swipeEnable(true, 'right');
            this.menu.enable(false, 'left');
            this.menu.swipeEnable(false, "left");
            localStorage.setItem('hdaaeq_user_lang', lang);
            this.translate.setDefaultLang(lang);
            this.translate.use(lang);
            this.event.publish('change_lang');
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 500);
        this.navCtrl.setRoot('LoginPage');
        loading.dismissAll();
    };
    ChooseLangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose-lang',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/choose-lang/choose-lang.html"*/'\n<ion-content padding>\n\n  <div class="lang">\n      \n      <img src="assets/imgs/logo.png">\n\n      <!-- <h3>{{ \'chooselang\' | translate }}</h3> -->\n      <h3 class="green">أختر اللغة</h3>\n\n      <button class="btn-button bg-drow" (click)="goLogin(\'ar\')">العربية</button>\n      <button class="btn-button bg-drow" (click)="goLogin(\'en\')">الإنجليزية</button>\n    \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/choose-lang/choose-lang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */]])
    ], ChooseLangPage);
    return ChooseLangPage;
}());

//# sourceMappingURL=choose-lang.js.map

/***/ })

});
//# sourceMappingURL=27.js.map