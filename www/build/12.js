webpackJsonp([12],{

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, formBuilder, api, toastCtrl, translate, event, oneSignal, platform, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.event = event;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.model = {};
        this.provider = 0;
        this.codes = [];
        this.pet = "loginPhone";
        this.iconLtr = "left";
        this.userPhone = this.formBuilder.group({
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lang: [],
            provider: [],
            device_id: [],
            country_code: [],
            value_input: [0],
        });
        this.userEmail = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(40), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lang: [],
            provider: [],
            device_id: [],
            value_input: [1],
        });
        // this.userPhone.controls['value_input'].setValue(this.value_input);
        this.userPhone.controls['lang'].setValue(this.translate.currentLang);
        this.userPhone.controls['provider'].setValue(this.provider);
        // this.userPhone.controls['device_id'].setValue('3333');
        this.userEmail.controls['lang'].setValue(this.translate.currentLang);
        this.userEmail.controls['provider'].setValue(this.provider);
        platform.ready().then(function () {
            _this.oneSignal.endInit();
            _this.oneSignal.getIds().then(function (id) {
                _this.userPhone.controls["device_id"].setValue(id.userId);
                _this.userEmail.controls["device_id"].setValue(id.userId);
            });
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
    LoginPage.prototype.goRegister = function () {
        this.navCtrl.push("RegisterPage");
    };
    LoginPage.prototype.goForgetPasswor = function () {
        this.navCtrl.push("ForgetPasswordPage");
    };
    LoginPage.prototype.goUserPhone = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        loading.dismissAll();
        this.api.signIn(this.userPhone.value).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.massage,
                duration: 3000
            });
            toast.present();
            if (response.key == "0") {
                var toast_1 = _this.toastCtrl.create({
                    message: response.massage,
                    duration: 3000
                });
                toast_1.present();
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
            else {
                _this.event.publish('user_is_in', { name: response.data.name, image: response.data.image });
                localStorage.setItem('hdaaeq_user_Data', JSON.stringify(response.data));
                _this.navCtrl.push("HomePage");
            }
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    LoginPage.prototype.goUserEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        loading.dismissAll();
        this.api.signIn(this.userEmail.value).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.massage,
                duration: 3000
            });
            toast.present();
            if (response.key == "0") {
                var toast_2 = _this.toastCtrl.create({
                    message: response.massage,
                    duration: 3000
                });
                toast_2.present();
            }
            else if (response.key == "3") {
                var confirm_2 = _this.alertCtrl.create({
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
                confirm_2.present();
            }
            else {
                _this.event.publish('user_is_in', { name: response.data.name, image: response.data.image });
                localStorage.setItem('hdaaeq_user_Data', JSON.stringify(response.data));
                _this.navCtrl.push("HomePage");
            }
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    LoginPage.prototype.goVistor = function () {
        this.navCtrl.push("HomePage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/login/login.html"*/'<ion-content padding>\n  <div class="form-control">\n\n    <img src="assets/imgs/logo.png">\n\n    <h3 class="green">{{ \'logins\' | translate }}</h3>\n\n    <ion-segment class="segment" [(ngModel)]="pet">\n      <ion-segment-button value="loginPhone">\n        {{ \'loginPhone\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="loginEmail">\n        {{ \'loginEmail\' | translate }}\n      </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]="pet">\n      <div *ngSwitchCase="\'loginPhone\'">\n        <form [formGroup]="userPhone">\n\n          <div class="inner-input">\n            <input type="tel" formControlName="phone" name="phone"   placeholder="{{ \'phone\' | translate }}">\n            <ion-list class="list-code" [(ngClass)]="iconLtr">\n                <ion-item>\n                  <!--<ion-label class="label-list">{{ \'code\' | translate }}</ion-label>-->\n                  <ion-select [(ngModel)]="countryCode"    formControlName="country_code" okText="{{ \'okay\' | translate }}" cancelText="{{ \'dismiss\' | translate }}">\n                    <ion-option  *ngFor="let code of codes"   value="{{ code?.code }}">{{ code?.code }}</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n          </div>\n\n          <ion-label class="label-error"\n          *ngIf="!userPhone.controls.phone.valid && (userPhone.controls.phone.dirty || userPhone.controls.phone.touched)">\n              {{ \'Enterphone\' | translate }}\n          </ion-label>\n    \n          <div class="inner-input">\n            <input formControlName="password" name="password" type="password" placeholder="{{ \'password\' | translate }}" >\n            <ion-label class="label-error"\n            *ngIf="!userPhone.controls.password.valid && (userPhone.controls.password.dirty || userPhone.controls.password.touched)">\n                {{ \'Enterpassword\' | translate }}\n            </ion-label> \n          </div>\n    \n          <p (click)="goForgetPasswor()">{{ \'forgetPassword\' | translate }}</p>\n    \n          <button class="btn-button bg-green" [disabled]="!userPhone.valid" (click)="goUserPhone()">{{ \'login\' | translate }}</button>\n    \n        </form>\n      </div>\n    \n      <div *ngSwitchCase="\'loginEmail\'">\n        <form [formGroup]="userEmail">\n\n          <div class="inner-input">\n            <input type="email" formControlName="email" name="email" placeholder="{{ \'email\' | translate }}">\n            <ion-label class="label-error"\n            *ngIf="!userEmail.controls.email.valid && (userEmail.controls.email.dirty || userEmail.controls.email.touched)">\n                {{ \'Enteremail\' | translate }}\n            </ion-label>\n          </div>\n    \n          <div class="inner-input">\n            <input formControlName="password" name="password" type="password" placeholder="{{ \'password\' | translate }}" >\n            <ion-label class="label-error"\n            *ngIf="!userEmail.controls.password.valid && (userEmail.controls.password.dirty || userEmail.controls.password.touched)">\n                {{ \'Enterpassword\' | translate }}\n            </ion-label> \n          </div>\n    \n          <p (click)="goForgetPasswor()">{{ \'forgetPassword\' | translate }}</p>\n    \n          <button class="btn-button bg-green" [disabled]="!userEmail.valid" (click)="goUserEmail()">{{ \'login\' | translate }}</button>\n    \n        </form>\n      </div>\n    </div>\n\n    <a class="brown" (click)="goVistor()">{{ \'LoginVisitor\' | translate }}</a>\n\n    <button class="green" (click)="goRegister()">{{ \'SignUp\' | translate }}</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=12.js.map