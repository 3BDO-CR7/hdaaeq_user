webpackJsonp([30],{

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLangPageModule", function() { return ChangeLangPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_lang__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangeLangPageModule = /** @class */ (function () {
    function ChangeLangPageModule() {
    }
    ChangeLangPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_lang__["a" /* ChangeLangPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_lang__["a" /* ChangeLangPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ChangeLangPageModule);
    return ChangeLangPageModule;
}());

//# sourceMappingURL=change-lang.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeLangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeLangPage = /** @class */ (function () {
    function ChangeLangPage(navCtrl, navParams, platform, translate, event, menu, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.event = event;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    ChangeLangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeLangPage');
    };
    ChangeLangPage.prototype.onChange = function () {
        if (this.lang == "ar") {
            this.platform.setDir('rtl', true);
            localStorage.setItem('hdaaeq_user_lang', this.lang);
            this.translate.setDefaultLang(this.lang);
            this.menu.enable(true, 'right');
            this.menu.swipeEnable(true, 'right');
            this.menu.enable(false, 'left');
            this.menu.swipeEnable(false, "left");
            this.translate.use(this.lang);
            this.event.publish('change_lang');
            this.translate.setDefaultLang("ar");
            this.translate.use("ar");
            localStorage.setItem('hdaaeq_user_lang', this.lang);
        }
        else {
            this.platform.setDir('ltr', true);
            localStorage.setItem('hdaaeq_user_lang', this.lang);
            this.menu.enable(true, 'left');
            this.menu.swipeEnable(true, "left");
            this.menu.enable(false, 'right');
            this.menu.swipeEnable(false, 'right');
            this.translate.setDefaultLang(this.lang);
            this.translate.use(this.lang);
            this.event.publish('change_lang');
            this.translate.setDefaultLang("en");
            this.translate.use("en");
            localStorage.setItem('hdaaeq_user_lang', this.lang);
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        setTimeout(function () {
            loading.present();
            location.reload();
        }, 200);
        loading.dismissAll();
        this.navCtrl.setRoot('HomePage');
    };
    ChangeLangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-lang',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/change-lang/change-lang.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'changeLang\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n\n            <div class="lang">\n                <label class="radios">\n                  <input type="radio" name="radio" value="ar" [(ngModel)]="lang">\n                  <span class="checkmark"></span>\n                </label>\n                <label class="radios">\n                  <input type="radio" name="radio" value="en" [(ngModel)]="lang">\n                  <span class="checkmark"></span>\n                </label>\n            </div>\n\n            <button class="btn-button bg-green" (click)="onChange()">{{ \'confirm\' | translate }}</button>\n\n        </div>\n    </div>\n    \n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/change-lang/change-lang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChangeLangPage);
    return ChangeLangPage;
}());

//# sourceMappingURL=change-lang.js.map

/***/ })

});
//# sourceMappingURL=30.js.map