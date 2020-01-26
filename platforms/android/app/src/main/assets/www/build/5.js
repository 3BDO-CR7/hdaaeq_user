webpackJsonp([5],{

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationsPageModule", function() { return QuotationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotations__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuotationsPageModule = /** @class */ (function () {
    function QuotationsPageModule() {
    }
    QuotationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quotations__["a" /* QuotationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quotations__["a" /* QuotationsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], QuotationsPageModule);
    return QuotationsPageModule;
}());

//# sourceMappingURL=quotations.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationsPage; });
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




var QuotationsPage = /** @class */ (function () {
    function QuotationsPage(navCtrl, navParams, platform, loadingCtrl, api, toastCtrl, translate, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.iconRtl = "icon-right";
        this.iconLtr = "icon-right";
        this.icon_RTl = "icon_RTl";
        this.BgDete = false;
        this.orders = [];
        this.id = this.navParams.get('id');
        this.data = this.navParams.get('date');
        this.id_order = JSON.parse(localStorage.getItem('hdaaeq_order_id_offer'));
        console.log(this.id);
        console.log(this.data);
        console.log(this.id_order);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.clientOrderOffers({
            order_id: this.id_order,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == "1") {
                _this.BgDete = true;
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
                _this.BgDete = false;
            }
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            _this.data = response.data;
            _this.orders = response.data.offers;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    }
    QuotationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuotationsPage');
        if (this.platform.isRTL) {
            this.iconRtl = "icon-right";
            this.iconLtr = "icon-left";
            this.icon_RTl = "icon_RTl";
        }
        else {
            this.iconRtl = "icon-left";
            this.iconLtr = "icon-right";
            this.icon_RTl = "icon_Ltr";
        }
    };
    QuotationsPage.prototype.goData = function (id) {
        this.navCtrl.push("ProviderDataPage", { id: id });
    };
    QuotationsPage.prototype.clickfilter = function (filter) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.clientOrderOffers({
            filter: filter,
            order_id: this.id_order,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
            if (response.key == "3") {
                _this.navCtrl.push("LoginPage");
            }
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            _this.orders = response.data.offers;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    QuotationsPage.prototype.resentRequest = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.resend_order({ order_id: this.id_order }).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == "3") {
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
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    QuotationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotations',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/quotations/quotations.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'Quotations\' | translate }}</ion-title>\n      <!-- <button class="btn" (click)="goBack()" [(ngClass)]=\'icon_RTl\'><img src="assets/imgs/back.png"></button> -->\n    </ion-navbar>\n\n      \n    <div class="block-body">\n      <div class="body-app shadow">\n          <div class="bg-brown" *ngIf="BgDete">\n            <ion-grid class="no-padding">\n              <ion-row>\n                <ion-col col-7><h4>{{ \'Daterequest\' | translate }} : {{ data?.created_at }}</h4></ion-col>\n                <ion-col col-5><h4>{{ \'Ordernumber\' | translate }} : {{ id }}</h4></ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <ion-grid class="no-padding">\n            <ion-row>\n              <ion-col col-6>\n                  <label class="radios sall">\n                    <input type="radio" name="radio" value="price" (click)="clickfilter(\'price\')">\n                    <p [(ngClass)]=\'iconRtl\'>{{ \'Lowestprice\' | translate }}</p>\n                    <strong class="cross" [(ngClass)]=\'iconLtr\'></strong>\n                    <span class="checkmark"></span>\n                  </label>\n              </ion-col>\n              <ion-col col-6>\n                  <label class="radios date">\n                    <input type="radio" name="radio" value="date" (click)="clickfilter(\'date\')">\n                    <p [(ngClass)]=\'iconRtl\'>{{ \'Earliestdate\' | translate }}</p>\n                    <strong class="cross"[(ngClass)]=\'iconLtr\'></strong>\n                    <span class="checkmark"></span>\n                  </label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <div class="list-order" *ngFor="let order of orders">\n              <h3>{{ \'Ordernumber\' | translate }} : <span>{{ order?.offer_id }}</span></h3>\n              <h3>{{ \'Daterequest\' | translate }} : <span>{{ order?.excute_date }}</span></h3>\n              <h3>{{ \'Ordertime\' | translate }} : <span>{{ order?.excute_time }}</span></h3>\n              <h3>{{ \'TotalCost\' | translate }} : <span>{{ order?.total_price }} {{ \'RS\' | translate }}</span></h3>\n              <h3>{{ \'RequestStatus\' | translate }} : <span>{{ \'Under\' | translate }}</span></h3>\n              <strong class="done" [(ngClass)]=\'iconLtr\' (click)="goData(order?.offer_id)">{{ \'Acceptance\' | translate }}</strong>\n          </div>\n          <button class="btn-button bg-green" (click)="resentRequest(order?.offer_id)">{{ \'Resrequest\' | translate }}</button>\n      </div>\n    </div>\n\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/quotations/quotations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], QuotationsPage);
    return QuotationsPage;
}());

//# sourceMappingURL=quotations.js.map

/***/ })

});
//# sourceMappingURL=5.js.map