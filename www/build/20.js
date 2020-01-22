webpackJsonp([20],{

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_api_api__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, modalCtrl, camera, translate, loadingCtrl, formBuilder, api, toastCtrl, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.model = { city: "" };
        this.address = "العنوان";
        this.countries = [];
        this.cities = [];
        this.editProfile = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(40), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            city_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            country_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            user_id: [''],
            lang: [],
            lat: [],
            lng: [],
            address: [],
            image: [],
        });
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.editProfile.controls['user_id'].setValue(this.user.id);
        this.avatar = this.user.image;
        this.editProfile.controls['lang'].setValue(this.translate.currentLang);
        this.country_id = this.user.country_id;
        this.city_id = this.user.city_id;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditProfilePage');
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
        this.country_cities(this.country_id);
    };
    EditProfilePage.prototype.country_cities = function (id) {
        var _this = this;
        var data = { country_id: id };
        this.api.cities({ country_id: id, lang: this.translate.currentLang }).subscribe(function (response) {
            _this.cities = response.data;
        });
    };
    EditProfilePage.prototype.goLocation = function () {
        var modal = this.modalCtrl.create("LocationPage");
        modal.present();
    };
    EditProfilePage.prototype.goProfile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.editprofile(this.editProfile.value).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            if (response.key == "1") {
                localStorage.setItem('hdaaeq_user_Data', JSON.stringify(response.data));
                _this.navCtrl.push("ProfilePage");
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
    EditProfilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var addimage = (this.translate.currentLang == 'en') ? 'Add Image' : 'إضافة صورة';
        var take = (this.translate.currentLang == 'en') ? 'Take Photo' : 'إلتقاط صورة';
        var choose = (this.translate.currentLang == 'en') ? 'Choose Photo' : 'إختر صورة';
        var cancel = (this.translate.currentLang == 'en') ? 'Cancel' : 'إلغاء';
        var actionSheet = this.actionSheetCtrl.create({
            title: addimage,
            buttons: [
                {
                    text: take,
                    handler: function () {
                        _this.openGallery();
                    }
                },
                {
                    text: choose,
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    text: cancel,
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditProfilePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 500,
            correctOrientation: true,
            targetWidth: 500,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.avatar = "data:image/jpeg;base64," + imageData;
            _this.editProfile.controls['image'].setValue(imageData);
        }, function (err) {
        });
    };
    EditProfilePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.avatar = "data:image/jpeg;base64," + imageData;
            _this.editProfile.controls['image'].setValue(imageData);
        }, function (err) {
            console.log(err);
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'editprofile\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n\n            <div class="profile">\n                          \n                <div class="user">\n                    <div class="userimg" (click)="presentActionSheet()">  \n                      <img src="{{avatar}}">\n                    </div>\n                    <h3>{{ \'changeimg\' | translate }}</h3>\n                </div>\n\n                <form [formGroup]="editProfile">\n\n                    <div class="inner-input">\n                      <input type="text" formControlName="name" value="{{user?.name}}" placeholder="{{ \'username\' | translate }}" required>\n                      <ion-label class="label-error" *ngIf="editProfile.controls.name.touched && editProfile.controls.name.invalid">\n                          {{ \'Enteruser\' | translate }}\n                      </ion-label>\n                    </div>\n\n                    <div class="inner-input">\n                      <input type="email" formControlName="email" value="{{user?.email}}" placeholder="{{ \'email\' | translate }}" required class="shadow">\n                      <ion-label class="label-error" *ngIf="editProfile.controls.email.touched && editProfile.controls.email.invalid">\n                          {{ \'Enteremail\' | translate }}\n                      </ion-label>\n                    </div>\n\n                    <div class="inner-input">\n                      <input type="tel" formControlName="phone" value="{{user?.phone}}" maxlength="10" placeholder="{{ \'phone\' | translate }}" required class="shadow">\n                      <ion-label class="label-error" *ngIf="editProfile.controls.phone.touched && editProfile.controls.phone.invalid">\n                          {{ \'Enterphone\' | translate }}\n                      </ion-label>\n                    </div>\n\n                    <ion-list>\n                      <ion-item>\n                        <!-- <ion-label [(ngClass)]="iconRtl" class="label-list">user?.country</ion-label> -->\n                        <ion-select #C (ionChange)="country_cities(C.value)" [(ngModel)]="country_id" formControlName="country_id" okText="{{ \'okay\' | translate }}" cancelText="{{ \'dismiss\' | translate }}">\n                          <ion-option *ngFor="let country of countries" [selected]="true" value="{{ country?.id }}">{{ country?.name }}</ion-option>          \n                        </ion-select>\n                      </ion-item>\n                    </ion-list>\n                \n                    <ion-list>\n                      <ion-item>\n                        <!-- <ion-label [(ngClass)]="iconRtl" class="label-list">user?.city</ion-label> -->\n                        <ion-select formControlName="city_id" [(ngModel)]="city_id" okText="{{ \'okay\' | translate }}" cancelText="{{ \'dismiss\' | translate }}">\n                          <ion-option *ngFor="let citys of cities" [selected]="true" value="{{ citys?.id }}">{{ citys?.name }}</ion-option>\n                        </ion-select>\n                      </ion-item>\n                    </ion-list>\n\n                    <button class="btn-button green" (click)="goLocation()">{{ \'Locationmap\' | translate }}</button>\n                \n                    <button class="btn-button bg-green" (click)="goProfile()">{{ \'save\' | translate }}</button>\n\n                </form>\n\n        </div>\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=20.js.map