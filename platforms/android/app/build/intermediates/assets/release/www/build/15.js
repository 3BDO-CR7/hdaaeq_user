webpackJsonp([15],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgetPasswordPageModule = /** @class */ (function () {
    function ForgetPasswordPageModule() {
    }
    ForgetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ForgetPasswordPageModule);
    return ForgetPasswordPageModule;
}());

//# sourceMappingURL=forget-password.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_api__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(navCtrl, navParams, translate, loadingCtrl, formBuilder, api, toastCtrl, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.iconLtr = "left";
        this.codes = [];
        this.forgetpassword = this.formBuilder.group({
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            lang: [],
            country_code: [],
        });
    }
    ForgetPasswordPage.prototype.ionViewWillEnter = function () {
        this.forgetpassword.controls['lang'].setValue(this.translate.currentLang);
    };
    ForgetPasswordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ForgetPasswordPage');
        if (this.platform.isRTL) {
            this.iconLtr = "left";
        }
        else {
            this.iconLtr = "right";
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.codes({ lang: this.translate.currentLang }).subscribe(function (response) {
            _this.codes = response.data;
            _this.countryCode = _this.codes[0].code;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    ForgetPasswordPage.prototype.goNewpassword = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.sentCode(this.forgetpassword.value).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            if (response.key == "1") {
                _this.navCtrl.push("NewPasswordPage");
            }
            else if (response.key == "3") {
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
        }, function (error) {
            loading.dismissAll();
        }, function () {
            loading.dismissAll();
        });
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/forget-password/forget-password.html"*/'\n<ion-content padding>\n    \n      <form class="form-control" [formGroup]="forgetpassword">\n    \n        <img src="assets/imgs/logo.png">\n        \n        <h3 class="green">{{ \'forgetPassword\' | translate }}</h3>\n    \n        <div class="inner-input">\n          <input type="tel" formControlName="phone" name="phone" placeholder="{{ \'phone\' | translate }}">\n          <ion-label class="label-error"\n          *ngIf="!forgetpassword.controls.phone.valid && (forgetpassword.controls.phone.dirty || forgetpassword.controls.phone.touched)">\n              {{ \'Enterphone\' | translate }}\n          </ion-label> \n          <ion-list class="list-code" [(ngClass)]="iconLtr">\n            <ion-item>\n              <!--<ion-label class="label-list">{{ \'code\' | translate }}</ion-label>-->\n              <ion-select  [(ngModel)]="countryCode" formControlName="country_code" okText="{{ \'okay\' | translate }}" cancelText="{{ \'dismiss\' | translate }}">\n                <ion-option *ngFor="let code of codes" value="{{ code?.code }}">{{ code?.code }}</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </div>\n    \n        <button class="btn-button bg-green" [disabled]="!forgetpassword.valid" (click)="goNewpassword()">{{ \'login\' | translate }}</button>\n    \n      </form>\n    \n</ion-content>\n      \n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/forget-password/forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ })

});
//# sourceMappingURL=15.js.map