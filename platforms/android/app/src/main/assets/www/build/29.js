webpackJsonp([29],{

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, loadingCtrl, formBuilder, api, toastCtrl, alertCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.updatePassword = this.formBuilder.group({
            old_password: [''],
            new_password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            confirm_Password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            user_id: [],
            lang: [],
        }, {
            validator: this.matchingPasswords('new_password', 'confirm_Password')
        });
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.user_id = this.user.id;
        this.updatePassword.controls['user_id'].setValue(this.user.id);
        this.updatePassword.controls['lang'].setValue(this.translate.currentLang);
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.goSetting = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.editPassword(this.updatePassword.value).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            if (response.key == "1") {
                _this.navCtrl.push("SettingPage");
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
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    ChangePasswordPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var new_password = group.controls[passwordKey];
            var confirm_Password = group.controls[confirmPasswordKey];
            if (new_password.value !== confirm_Password.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/change-password/change-password.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'changepassword\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n            <form [formGroup]="updatePassword">\n                <div class="body-app shadow">\n\n                <div class="changepassword">\n\n                    <div class="inner-input">\n                    <input formControlName="old_password" name="old_password" type="text" placeholder="{{ \'OldPassword\' | translate }}" >\n                    <ion-label class="label-error"\n                        *ngIf="!updatePassword.controls.old_password.valid &&( updatePassword.controls.old_password.dirty || updatePassword.controls.old_password.touched)" stacked>\n                        {{ \'Enterpassword\' | translate }}\n                    </ion-label> \n                    </div>\n                \n                    <div class="inner-input">\n                    <input formControlName="new_password" minlength="4" name="new_password" type="password" placeholder="{{ \'NewPassword\' | translate }}" >\n                        <ion-label class="label-error"\n                        *ngIf="!updatePassword.controls.new_password.valid &&( updatePassword.controls.new_password.dirty || updatePassword.controls.new_password.touched)" stacked>\n                        {{ \'Enterpassword\' | translate }}\n                    </ion-label> \n                    </div>\n\n                    <div class="inner-input">\n                    <input formControlName="confirm_Password" minlength="4" name="confirm_Password" type="password" placeholder="{{ \'ConfirmNewPassword\' | translate }}" >\n                        <ion-label class="label-error"\n                    *ngIf="updatePassword.controls.confirm_Password.touched && updatePassword.hasError(\'mismatchedPasswords\') && updatePassword.controls.confirm_Password.valid" stacked>\n                        {{ \'Enteroldpass\' | translate }}\n                    </ion-label> \n                    </div>\n                    \n                </div>\n\n                <button [disabled]="!updatePassword.valid" class="btn-button bg-green" (click)="goSetting()">{{ \'save\' | translate }}</button>\n\n                </div>\n            </form>\n        </div>\n    </div>\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=29.js.map