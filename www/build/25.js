webpackJsonp([25],{

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, loadingCtrl, api, translate, formBuilder, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.sentMessage = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(40), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            message: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lang: [],
        });
        this.sentMessage.controls['lang'].setValue(this.translate.currentLang);
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.contact({ lang: this.translate.currentLang }).subscribe(function (response) {
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
            _this.data = response.data;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    ContactPage.prototype.goMessage = function () {
        var _this = this;
        this.api.sentMessage(this.sentMessage.value).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.massage,
                duration: 3000
            });
            toast.present();
            if (response.key == "0") {
                var toast_1 = _this.toastCtrl.create({
                    message: response.message,
                    duration: 3000
                });
                toast_1.present();
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
                _this.sentMessage.reset();
            }
        }, function (error) {
            // loading.dismissAll();
        }, function () {
            // loading.dismissAll();
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/contact/contact.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'contact\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n\n            <div class="contact">\n                <!-- <h3>\n                    <i class="fa fa-map-marker" aria-hidden="true"></i>\n                    <img src="assets/imgs/location.png">\n                    {{ data?.address }}\n                </h3> -->\n              <a href="tel:{{data?.phone}}" style="text-decoration: none; ">\n                <h3 style="font-size: 16px">\n                    <!-- <i class="fa fa-phone" aria-hidden="true"></i> -->\n                    <img src="assets/imgs/call.png">\n                  {{data?.phone}}\n                </h3>\n              </a>\n\n\n\n              <a href="mailto:{{data?.email}}" style="text-decoration: none; ">\n                <h3 style="font-size: 16px">\n                  <!-- <i class="fa fa-phone" aria-hidden="true"></i> -->\n                  <img src="assets/imgs/mail.png">\n                  {{data?.email}}\n                </h3>\n              </a>\n\n                <ul>\n                  <li>\n                      <a href="{{data?.facebook}}">\n                        <i class="fa fa-facebook" aria-hidden="true"></i>\n                    </a>\n                </li>\n                  <li>\n                      <a href="{{data?.twitter}}">\n                        <i class="fa fa-twitter" aria-hidden="true"></i>\n                    </a>\n                </li>\n                  <li>\n                      <a href="{{data?.gplus}}">\n                        <i class="fa fa-google-plus" aria-hidden="true"></i>\n                    </a>\n                </li>\n                </ul>\n                \n                <form [formGroup]="sentMessage">\n                  <ion-grid class="no-padding">\n                    <ion-row>\n                      <ion-col col-6>\n                          <div class="inner-input">\n                            <input type="text" formControlName="name" name="name" placeholder="{{ \'name\' | translate }}">\n                            <ion-label class="label-error"\n                            *ngIf="!sentMessage.controls.name.valid && (sentMessage.controls.name.dirty || sentMessage.controls.name.touched)">\n                                {{ \'Enteruser\' | translate }}\n                            </ion-label> \n                          </div>\n                      </ion-col>\n                      <ion-col col-6>\n                          <div class="inner-input">\n                            <input type="email" formControlName="email" name="email" placeholder="{{ \'email\' | translate }}">\n                            <ion-label class="label-error"\n                            *ngIf="!sentMessage.controls.email.valid && (sentMessage.controls.email.dirty || sentMessage.controls.email.touched)">\n                                {{ \'Enteremail\' | translate }}\n                            </ion-label> \n                          </div>\n                      </ion-col>\n                      <ion-col col-12>\n                          <div class="inner-input">\n                            <textarea type="text" formControlName="message" name="message" placeholder="{{ \'massage\' | translate }}"></textarea>\n                            <ion-label class="label-error"\n                            *ngIf="!sentMessage.controls.message.valid && (sentMessage.controls.message.dirty || sentMessage.controls.message.touched)">\n                                {{ \'Writenote\' | translate }}\n                            </ion-label> \n                          </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <button class="btn-button bg-green" (click)="goMessage()">{{ \'Sent\' | translate }}</button>\n                </form>\n\n            </div>\n\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=25.js.map