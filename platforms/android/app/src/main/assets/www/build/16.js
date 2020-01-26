webpackJsonp([16],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowersSectionPageModule", function() { return FlowersSectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flowers_section__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FlowersSectionPageModule = /** @class */ (function () {
    function FlowersSectionPageModule() {
    }
    FlowersSectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flowers_section__["a" /* FlowersSectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flowers_section__["a" /* FlowersSectionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], FlowersSectionPageModule);
    return FlowersSectionPageModule;
}());

//# sourceMappingURL=flowers-section.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowersSectionPage; });
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




var FlowersSectionPage = /** @class */ (function () {
    function FlowersSectionPage(navCtrl, navParams, translate, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.serves = [];
        this.category_serves_Edit = [];
        this.Service = [];
        this.id = this.navParams.get('id');
        //Get Basket
        this.category_serves_Edit = this.navParams.get('sup_ser_basket');
        this.key = this.navParams.get('key');
        //Get Current
        this.cart_id = this.navParams.get('cart_id');
        this.has_details = this.navParams.get('has_details');
        this.current_service = this.navParams.get('services');
        console.log('current serveis');
        console.log(this.current_service);
    }
    FlowersSectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowersSectionPage');
    };
    FlowersSectionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.services({
            lang: this.translate.currentLang,
            category_id: this.id
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
            _this.serves = response.data;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    FlowersSectionPage.prototype.goService = function (name, id, unit) {
        this.navCtrl.push("FlowerServicePage", {
            name: name,
            Sup_serves: this.category_serves_Edit,
            key: this.key,
            unit: unit,
            current_service: this.current_service,
            cart_id: this.cart_id,
            has_details: this.has_details
        });
        var obj = { name: name, id: id };
        localStorage.setItem('hdaaeq_servers_id_2_id', JSON.stringify(id));
        localStorage.setItem('hdaaeq_servers_id_2', JSON.stringify(obj));
    };
    FlowersSectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flowers-section',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/flowers-section/flowers-section.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'ourflowers\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n        \n            <div class="form-section">\n                <div class="upload-image">\n                    <h3 *ngFor="let serv of serves">\n                        <div (click)="goService( serv?.name , serv?.id , serv?.unit)">\n                            {{ serv?.name }}\n                        </div>\n                    </h3>\n                </div>\n            </div>\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/flowers-section/flowers-section.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FlowersSectionPage);
    return FlowersSectionPage;
}());

//# sourceMappingURL=flowers-section.js.map

/***/ })

});
//# sourceMappingURL=16.js.map