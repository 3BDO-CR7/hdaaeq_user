webpackJsonp([14],{

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, platform, translate, alertCtrl, loadingCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.iconRtl = "icon-right";
        this.iconLtr = "icon-right";
        this.iconBasket = "icon-cart-Rtl";
        this.categor = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        if (this.platform.isRTL) {
            this.iconRtl = "icon-right";
            this.iconLtr = "icon-left";
            this.iconBasket = "icon-cart-Ltr";
        }
        else {
            this.iconRtl = "icon-left";
            this.iconLtr = "icon-right";
            this.iconBasket = "icon-cart-Rtl";
        }
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.categories({ lang: this.translate.currentLang }).subscribe(function (response) {
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
            _this.categor = response.data;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    HomePage.prototype.openNoty = function () {
        var _this = this;
        var message = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
        var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        if (localStorage.getItem('hdaaeq_user_Data')) {
            this.navCtrl.push("NotificationPage");
        }
        else {
            var confirm_2 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.navCtrl.push("LoginPage");
                        }
                    },
                    {
                        text: cansel,
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_2.present();
        }
    };
    HomePage.prototype.openBasket = function () {
        var _this = this;
        var disc = (this.translate.currentLang == 'en') ? 'You must add the services first ?' : 'يجب عليك إضافة الخدمات أولاً ؟';
        var title = (this.translate.currentLang == 'en') ? 'The basket is empty' : 'السلة فارغة';
        var done = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        var message = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
        var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        if (localStorage.getItem('hdaaeq_user_Data')) {
            if (JSON.parse(localStorage.getItem('Hdaaeq_Orders')) == undefined || JSON.parse(localStorage.getItem('Hdaaeq_Orders')) == null) {
                var alert_1 = this.alertCtrl.create({
                    title: title,
                    message: disc,
                    buttons: [
                        {
                            text: done,
                            handler: function () {
                                _this.navCtrl.push("HomePage");
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                this.navCtrl.push("BasketPage");
            }
        }
        else {
            var confirm_3 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.navCtrl.push("LoginPage");
                        }
                    },
                    {
                        text: cansel,
                        handler: function () { }
                    }
                ]
            });
            confirm_3.present();
        }
    };
    HomePage.prototype.goCategories = function (id, name, image) {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        if (this.user == null || this.user == undefined) {
            var message = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
            var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
            var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
            var confirm_4 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.navCtrl.push("LoginPage");
                        }
                    },
                    {
                        text: cansel,
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_4.present();
        }
        else {
            var obj_Servers = {
                category_name: name,
                service_image: image,
            };
            if (id == 1) {
                this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
            }
            else if (id == 2) {
                this.navCtrl.push('FlowersSectionPage', { 'id': id });
                localStorage.setItem('gategory_id', id);
            }
            else if (id == 3) {
                this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
            }
            localStorage.setItem('hdaaeq_order_serves_id', id);
            localStorage.setItem('Hdaaeq_Serves', JSON.stringify(obj_Servers));
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'home\' | translate }}</ion-title>\n      <button class="btn" menuToggle [(ngClass)]=\'iconRtl\'><img src="assets/imgs/menu.png"></button>\n      <button class="btn" (click)="openNoty()" [(ngClass)]=\'iconLtr\'><img src="assets/imgs/bell.png"></button>\n      <button class="btn" (click)="openBasket()" [(ngClass)]=\'iconBasket\'><img src="assets/imgs/cart.png"></button>\n    </ion-navbar>\n\n    <div class="block-body">\n      <div class="body-app shadow">\n          <div class="block-item animated fadeInUp" (click)="goCategories(category?.id, category?.name, category?.image)" *ngFor="let category of categor">\n<!--            <h3>{{ category?.name }}</h3>-->\n            <img src="{{ category?.image }}">\n          </div>\n      </div>\n    </div>\n\n    \n  </ion-header>\n\n<ion-content padding>\n\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=14.js.map