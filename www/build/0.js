webpackJsonp([0],{

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountPageModule", function() { return VerifyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_account__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VerifyAccountPageModule = /** @class */ (function () {
    function VerifyAccountPageModule() {
    }
    VerifyAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify_account__["a" /* VerifyAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify_account__["a" /* VerifyAccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], VerifyAccountPageModule);
    return VerifyAccountPageModule;
}());

//# sourceMappingURL=verify-account.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyAccountPage; });
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





var VerifyAccountPage = /** @class */ (function () {
    function VerifyAccountPage(navCtrl, navParams, translate, loadingCtrl, formBuilder, api, toastCtrl, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.verify = this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            user_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            lang: [],
        });
    }
    VerifyAccountPage.prototype.ionViewWillEnter = function () {
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data_register'));
        this.verify.controls['lang'].setValue(this.translate.currentLang);
        this.verify.controls['user_id'].setValue(this.user.id);
    };
    VerifyAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyAccountPage');
    };
    VerifyAccountPage.prototype.goHome = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.verifyCode(this.verify.value).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            if (response.key == "1") {
                _this.navCtrl.push("LoginPage");
            }
        }, function (error) {
            loading.dismissAll();
        }, function () {
            loading.dismissAll();
        });
    };
    VerifyAccountPage.prototype.resend_code = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.resendCode({
            user_id: this.user.id,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.massage,
                duration: 3000
            });
            toast.present();
        }, function (error) {
            loading.dismissAll();
        }, function () {
            loading.dismissAll();
        });
    };
    VerifyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify-account',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/verify-account/verify-account.html"*/'<ion-content padding>\n\n  <form class="form-control" [formGroup]="verify">\n\n    <img src="assets/imgs/logo.png">\n\n    <h3 class="green">{{ \'ValidationCode\' | translate }}</h3>\n\n    <div class="inner-input">\n      <input type="tel" formControlName="code" name="code" placeholder="{{ \'ValidationCode\' | translate }}">\n      <ion-label class="label-error"\n      *ngIf="!verify.controls.code.valid && (verify.controls.code.dirty || verify.controls.code.touched)">\n          {{ \'ValidationCode\' | translate }}\n      </ion-label> \n    </div>\n\n    <button class="btn-button bg-green" [disabled]="!verify.valid" (click)="goHome()">{{ \'login\' | translate }}</button>\n    <br>\n    <span class="green" (click)="resend_code()">{{\'resend_code\' | translate}}</span>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/verify-account/verify-account.html"*/,
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
    ], VerifyAccountPage);
    return VerifyAccountPage;
}());

//# sourceMappingURL=verify-account.js.map

/***/ })

});
//# sourceMappingURL=0.js.map