webpackJsonp([1],{

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, platform, translate, alertCtrl, api, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.Open = this.user.notification;
    }
    SettingPage.prototype.ionViewDidEnter = function () {
        var last = this.navCtrl.getPrevious().name;
        if (last == 'ProfilePage') {
            this.navBar.backButtonClick = this.previousProfile;
        }
        if (last == 'ChangeLangPage') {
            this.navBar.backButtonClick = this.previousLang;
        }
        if (last == 'ChangePasswordPage') {
            this.navBar.backButtonClick = this.previousLang;
        }
    };
    SettingPage.prototype.previousProfile = function () {
        this.navCtrl.push('HomePage');
    };
    SettingPage.prototype.previousLang = function () {
        this.navCtrl.push('HomePage');
    };
    SettingPage.prototype.ionViewDidLoad = function () { };
    SettingPage.prototype.change = function () {
        var _this = this;
        this.Open = (this.Open == 1) ? 0 : this.Open = 1;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.notifiaction_status({
            user_id: this.user.id,
            lang: this.translate.currentLang,
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == "3") {
                var confirm_1 = _this.alertCtrl.create({
                    message: message,
                    buttons: [
                        {
                            text: Done,
                            cssClass: 'BtnCss',
                            handler: function () {
                                _this.navCtrl.push("LoginPage");
                            }
                        },
                    ]
                });
                confirm_1.present();
            }
            _this.user = response.data;
            localStorage.setItem('hdaaeq_user_Data', JSON.stringify(_this.user));
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    SettingPage.prototype.goLang = function () {
        this.navCtrl.push("ChangeLangPage");
    };
    SettingPage.prototype.goProfile = function () {
        var _this = this;
        var message = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
        var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        if (localStorage.getItem('hdaaeq_user_Data')) {
            this.navCtrl.push("ProfilePage");
        }
        else {
            var confirm_2 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.navCtrl.push("LoginPage");
                        }
                    },
                    {
                        text: cansel,
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_2.present();
        }
    };
    SettingPage.prototype.goPassword = function () {
        var _this = this;
        var message = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
        var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        if (localStorage.getItem('hdaaeq_user_Data')) {
            this.navCtrl.push("ChangePasswordPage");
        }
        else {
            var confirm_3 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.navCtrl.push("LoginPage");
                        }
                    },
                    {
                        text: cansel,
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_3.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Navbar */])
    ], SettingPage.prototype, "navBar", void 0);
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/setting/setting.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'setting\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n\n            <div class="setting">\n                <ion-grid no-padding>\n                  <div class="border-div">\n                    <ion-row (click)="goLang()" no-padding>\n                      <ion-col col-11 no-padding>\n                          <h3>{{ \'Language\' | translate }}</h3>\n                      </ion-col>\n                      <ion-col col-1 no-padding>\n                          <ion-icon name="settings" [(ngClass)]=\'iconDir\'></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                  <div class="border-div">\n                    <ion-row (click)="goProfile()" no-padding>\n                      <ion-col col-11 no-padding>\n                          <h3>{{ \'profile\' | translate }}</h3>\n                      </ion-col>\n                      <ion-col col-1 no-padding>\n                          <ion-icon name="settings" [(ngClass)]=\'iconDir\'></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                  <div class="border-div">\n                    <ion-row (click)="goPassword()" no-padding>\n                      <ion-col col-11 no-padding>\n                          <h3>{{ \'changepassword\' | translate }}</h3>\n                      </ion-col>\n                      <ion-col col-1 no-padding>\n                          <ion-icon name="settings" [(ngClass)]=\'iconDir\'></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-grid>\n\n                <ion-grid>\n                  <ion-row>\n                    <ion-col col-9>\n                        <h4>{{ \'notification\' | translate }}</h4>\n                    </ion-col>\n                    <ion-col col-3>\n                          <ion-toggle [checked]="Open == 1" color="secondary" (ionChange)="change()"></ion-toggle>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            </div>\n\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=1.js.map