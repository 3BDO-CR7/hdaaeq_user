webpackJsonp([4],{

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
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






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, platform, translate, modalCtrl, loadingCtrl, formBuilder, api, toastCtrl, oneSignal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.oneSignal = oneSignal;
        this.iconLtr = "icon-left";
        this.address = "العنوان";
        this.countries = [];
        this.cities = [];
        this.model = { city: "" };
        platform.ready().then(function () {
            _this.oneSignal.endInit();
            _this.oneSignal.getIds().then(function (id) {
                _this.signUp.controls["device_id"].setValue(id.userId);
                console.log('user ID', JSON.stringify(id.userId));
            });
        });
        this.signUp = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(40), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            city_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            country_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            country_code: [],
            lang: [],
            lat: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            lng: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            address: [],
            device_id: [],
        }, {
            validator: this.matchingPasswords('password', 'confirmPassword')
        });
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.signUp.controls['lang'].setValue(this.translate.currentLang);
        this.signUp.controls['country_code'].setValue(this.code);
        // this.signUp.controls['device_id'].setValue('3333');
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.platform.isRTL) {
            this.iconLtr = "icon-left";
        }
        else {
            this.iconLtr = "icon-right";
        }
        this.translate.get("city").subscribe(function (value) {
            _this.city = value;
        });
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.countries({ lang: this.translate.currentLang }).subscribe(function (response) {
            _this.countries = response.data;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    RegisterPage.prototype.country_cities = function (id) {
        var _this = this;
        var data = { country_id: id };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.cities({
            country_id: id,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
            _this.cities = response.data;
            _this.code = response.code;
            _this.signUp.controls['country_code'].setValue(_this.code);
        }, function () {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    RegisterPage.prototype.goHome = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        loading.dismissAll();
        this.api.signUp(this.signUp.value).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            if (response.key == "1") {
                localStorage.setItem('hdaaeq_user_Data_register', JSON.stringify(response.data));
                _this.navCtrl.setRoot("VerifyAccountPage");
            }
        }, function (error) {
            loading.dismissAll();
        }, function () {
            loading.dismissAll();
        });
    };
    RegisterPage.prototype.goLogin = function () {
        this.navCtrl.push("LoginPage");
    };
    RegisterPage.prototype.openMap = function () {
        var _this = this;
        var modal = this.modalCtrl.create("LocationPage");
        modal.onDidDismiss(function (data) {
            _this.address = JSON.parse(localStorage.getItem("hdaaeq_map_user_address"));
            _this.signUp.controls['address'].setValue(data.city);
            _this.signUp.controls['address'].setValue(JSON.parse(localStorage.getItem("hdaaeq_map_user_address")));
            _this.signUp.controls['lat'].setValue(JSON.parse(localStorage.getItem("hdaaeq_map_user_lat")));
            _this.signUp.controls['lng'].setValue(JSON.parse(localStorage.getItem("hdaaeq_map_user_lng")));
        });
        modal.present();
    };
    RegisterPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/register/register.html"*/'<ion-content padding>\n\n  <div class="form-control">\n\n    <img src="assets/imgs/logo.png">\n\n    <h3 class="green">{{ \'SignUp\' | translate }}</h3>\n\n    <form [formGroup]="signUp">\n\n    <div class="inner-input">\n        <input type="text" formControlName="name" placeholder="{{ \'username\' | translate }}">\n        <ion-label class="label-error"\n            *ngIf="!signUp.controls.name.valid && (signUp.controls.name.dirty || signUp.controls.name.touched)">\n            {{ \'Enteruser\' | translate }}\n        </ion-label>\n    </div>\n\n      <div class="inner-input">\n        <input formControlName="email" name="email" type="email" placeholder="{{ \'email\' | translate }}" >\n        <ion-label class="label-error"\n                   *ngIf="!signUp.controls.email.valid && (signUp.controls.email.dirty || signUp.controls.email.touched)">\n          {{ \'Enteremail\' | translate }}\n        </ion-label>\n      </div>\n\n\n      <ion-list>\n        <ion-item>\n          <ion-label [(ngClass)]="iconRtl" class="label-list">{{ \'country\' | translate }}</ion-label>\n          <ion-select #C (ionChange)="country_cities(C.value)" formControlName="country_id" okText="{{ \'okay\' | translate }}" cancelText="{{ \'dismiss\' | translate }}">\n            <ion-option *ngFor="let country of countries" value="{{ country?.id }}">{{ country?.name }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label [(ngClass)]="iconRtl" class="label-list">{{ \'city\' | translate }}</ion-label>\n          <ion-select formControlName="city_id" okText="{{ \'okay\' | translate }}" cancelText="{{ \'dismiss\' | translate }}">\n            <ion-option *ngFor="let citys of cities" value="{{ citys?.id }}">{{ citys?.name }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n     <div class="inner-input">\n      <input type="tel" formControlName="phone" name="phone" placeholder="{{ \'phone\' | translate }}">\n      <span class="showcode" [(ngClass)]="iconLtr">{{ code }}</span>\n    </div>\n    <ion-label class="label-error"\n    *ngIf="!signUp.controls.phone.valid && (signUp.controls.phone.dirty || signUp.controls.phone.touched)">\n        {{ \'Enterphone\' | translate }}\n    </ion-label>\n\n\n\n\n\n\n    \n    <div class="location" (click)="openMap()">\n        <input type="text" formControlName="address" placeholder="{{address}}" name="address" disabled>\n        <ion-icon name="pin" [(ngClass)]=\'iconLtr\'></ion-icon>\n        <ion-label class="label-error"\n            *ngIf="!signUp.controls.address.valid &&\n            (signUp.controls.address.dirty || signUp.controls.address.touched)" >\n            {{ \'Enterpassword\' | translate }}\n        </ion-label> \n    </div>\n\n    <div class="inner-input">\n      <input formControlName="password" name="password" type="password" placeholder="{{ \'password\' | translate }}" >\n       <ion-label class="label-error"\n          *ngIf="!signUp.controls.password.valid &&( signUp.controls.password.dirty||signUp.controls.password.touched)" stacked>\n          {{ \'oldpassword\' | translate }}\n      </ion-label> \n    </div>\n\n    <div class="inner-input">\n      <input formControlName="confirmPassword" type="password" placeholder="{{ \'ConfirmPassword\' | translate }}" >\n       <ion-label class="label-error"\n      *ngIf="signUp.controls.confirmPassword.touched && signUp.hasError(\'mismatchedPasswords\') && signUp.controls.password.valid" stacked>\n          {{ \'Enteroldpass\' | translate }}\n      </ion-label> \n    </div>\n\n    <button [disabled]="!signUp.valid" class="btn-button bg-green" (click)="goHome()">{{ \'SignUp\' | translate }}</button>\n  \n    </form>\n    \n    <p class="brown">{{ \'haveaccount\' | translate }} <a class="green" (click)="goLogin()">{{ \'logins\' | translate }}</a></p>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/register/register.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=4.js.map