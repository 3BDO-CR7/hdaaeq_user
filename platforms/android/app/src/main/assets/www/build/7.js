webpackJsonp([7],{

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, platform, modalCtrl, loadingCtrl, api, translate, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.iconLtr = "icon-right";
        if (this.platform.isRTL) {
            this.iconLtr = "icon-left";
        }
        else {
            this.iconLtr = "icon-right";
        }
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log(this.user.image);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.profile({
            user_id: this.user.id,
            lang: this.translate.currentLang
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
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
        var last = this.navCtrl.getPrevious().name;
        if (last == 'EditProfilePage') {
            this.navBar.backButtonClick = this.backButtonClick;
        }
    };
    ProfilePage.prototype.backButtonClick = function () {
        this.navCtrl.push('SettingPage');
    };
    ProfilePage.prototype.goEdite = function () {
        this.navCtrl.push("EditProfilePage");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Navbar */])
    ], ProfilePage.prototype, "navBar", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'profile\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n\n            <div class="profile">\n                <img src="assets/imgs/edit.png" class="edit" [(ngClass)]=\'iconLtr\' (click)="goEdite()">\n                <div class="user">\n                    <img src="{{user?.image}}">\n                    <h3>{{ user?.name }}</h3>\n                </div>\n                <h4>{{ \'phone\' | translate }}</h4>\n                <p>{{ user?.phone }}</p>\n                <h4>{{ \'email\' | translate }}</h4>\n                <p>{{ user?.email }}</p>\n                <h4>{{ \'country\' | translate }}</h4>\n                <p>{{ user?.country }}</p>\n                <h4>{{ \'city\' | translate }}</h4>\n                <p>{{ user?.city }}</p>\n            </div>\n\n            <!-- <button class="btn-button green" (click)="goLocation()">{{ \'Locationmap\' | translate }}</button> -->\n\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map