webpackJsonp([9],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordPageModule", function() { return NewPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_password__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewPasswordPageModule = /** @class */ (function () {
    function NewPasswordPageModule() {
    }
    NewPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_password__["a" /* NewPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_password__["a" /* NewPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], NewPasswordPageModule);
    return NewPasswordPageModule;
}());

//# sourceMappingURL=new-password.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPasswordPage; });
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





var NewPasswordPage = /** @class */ (function () {
    function NewPasswordPage(navCtrl, navParams, platform, translate, modalCtrl, loadingCtrl, formBuilder, api, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.validationCode = this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        }, {
            validator: this.matchingPasswords('password', 'confirmPassword')
        });
    }
    NewPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPasswordPage');
    };
    NewPasswordPage.prototype.goHome = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        loading.dismissAll();
        this.api.newPassword(this.validationCode.value).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.massage,
                duration: 3000
            });
            toast.present();
            if (response.key == "1") {
                // localStorage.setItem('hdaaeq_user_Data', JSON.stringify(response.password));
                _this.navCtrl.push("LoginPage");
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
    NewPasswordPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    NewPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-password',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/new-password/new-password.html"*/'\n<ion-content padding>\n\n  <form class="form-control" [formGroup]="validationCode">\n\n    <img src="assets/imgs/logo.png">\n\n    <h3 class="green">{{ \'NewPassword\' | translate }}</h3>\n\n    <div class="inner-input">\n        <input type="tel" formControlName="code" placeholder="{{ \'ValidationCode\' | translate }}">\n        <ion-label class="label-error"\n            *ngIf="!validationCode.controls.code.valid && (validationCode.controls.code.dirty || validationCode.controls.code.touched)">\n            {{ \'Entercode\' | translate }}\n        </ion-label>\n    </div>\n\n    <div class="inner-input">\n      <input formControlName="password" name="password" type="password" placeholder="{{ \'NewPassword\' | translate }}" >\n        <ion-label class="label-error"\n          *ngIf="!validationCode.controls.password.valid &&( validationCode.controls.password.dirty || validationCode.controls.password.touched)" stacked>\n          {{ \'Enterpassword\' | translate }}\n      </ion-label> \n    </div>\n\n    <div class="inner-input">\n      <input formControlName="confirmPassword" type="password" placeholder="{{ \'ConfirmNewPassword\' | translate }}" >\n        <ion-label class="label-error"\n      *ngIf="validationCode.controls.confirmPassword.touched && validationCode.hasError(\'mismatchedPasswords\') && validationCode.controls.password.valid" stacked>\n          {{ \'Enteroldpass\' | translate }}\n      </ion-label> \n    </div>\n\n    <button [disabled]="!validationCode.valid" class="btn-button bg-green" (click)="goHome()">{{ \'confirm\' | translate }}</button>\n    \n  </form>\n\n</ion-content>\n  \n  '/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/new-password/new-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewPasswordPage);
    return NewPasswordPage;
}());

//# sourceMappingURL=new-password.js.map

/***/ })

});
//# sourceMappingURL=9.js.map