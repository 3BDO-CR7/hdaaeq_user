webpackJsonp([6],{

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderDataPageModule", function() { return ProviderDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_data__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProviderDataPageModule = /** @class */ (function () {
    function ProviderDataPageModule() {
    }
    ProviderDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__provider_data__["a" /* ProviderDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__provider_data__["a" /* ProviderDataPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ProviderDataPageModule);
    return ProviderDataPageModule;
}());

//# sourceMappingURL=provider-data.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderDataPage; });
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




var ProviderDataPage = /** @class */ (function () {
    function ProviderDataPage(navCtrl, navParams, loadingCtrl, api, toastCtrl, translate, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.offer_id = this.navParams.get('id');
    }
    ProviderDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProviderDataPage');
    };
    ProviderDataPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.offerprovider({
            offer_id: this.offer_id,
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
            _this.data = response.data;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    ProviderDataPage.prototype.goComplete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.accept_provider_offer({ offer_id: this.offer_id, lang: this.translate.currentLang }).subscribe(function (response) {
            if (response.key == "3") {
                _this.navCtrl.push("LoginPage");
            }
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            _this.navCtrl.push("DoneRequsetPage");
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    ProviderDataPage.prototype.goQuotations = function () {
        this.navCtrl.push("QuotationsPage");
    };
    ProviderDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-provider-data',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/provider-data/provider-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'ProviderData\' | translate }}</ion-title>\n  </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n            <div class="user">\n                <img src="{{ data?.provider_image }}">\n                <h4>{{ data?.provider_name }}</h4>\n            </div>\n            <div class="contact">\n                <h3>\n                    <img src="assets/imgs/call.png">\n                    {{ data?.provider_phone }}\n                </h3>\n                <h3>\n                    <img src="assets/imgs/flag.png">\n                    {{ data?.provider_country }}\n                </h3>\n                <h3>\n                    <img src="assets/imgs/location.png">\n                    {{ data?.provider_city }}\n                </h3>\n                <ion-grid class="no-padding">\n                  <ion-row>\n                    <ion-col col-6>\n                      <button class="btn-button bg-drow" (click)="goComplete()">{{ \'Complete\' | translate }}</button>\n                    </ion-col>\n                    <ion-col col-6>\n                      <button class="btn-button bg-drow" (click)="goQuotations()">{{ \'CancelOrder\' | translate }}</button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            </div>\n\n        </div>\n    </div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/provider-data/provider-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProviderDataPage);
    return ProviderDataPage;
}());

//# sourceMappingURL=provider-data.js.map

/***/ })

});
//# sourceMappingURL=6.js.map