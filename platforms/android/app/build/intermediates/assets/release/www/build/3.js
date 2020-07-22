webpackJsonp([3],{

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RequestPageModule = /** @class */ (function () {
    function RequestPageModule() {
    }
    RequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], RequestPageModule);
    return RequestPageModule;
}());

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, navParams, platform, loadingCtrl, api, toastCtrl, translate, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.pet = "Current-Orders";
        this.iconRtl = "icon-right";
        this.iconLtr = "icon-right";
        this.iconCart = "icon-cart-Ltr";
        this.orders = [];
        this.activeorders = [];
    }
    RequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
        if (this.platform.isRTL) {
            this.iconRtl = "icon-right";
            this.iconLtr = "icon-left";
            this.iconCart = "icon-cart-Ltr";
        }
        else {
            this.iconRtl = "icon-left";
            this.iconLtr = "icon-right";
            this.iconCart = "icon-cart-Rtl";
        }
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.currentOrder();
    };
    RequestPage.prototype.currentOrder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.clientactiveorders({
            user_id: this.user.id,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
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
            _this.orders = response.data;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    RequestPage.prototype.finishOrder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.clientfinorders({
            user_id: this.user.id,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
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
            _this.activeorders = response.data;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    RequestPage.prototype.goCurrentOrders = function (id, type) {
        if (type == 0) {
            this.navCtrl.push("CurrentRequestsPage", { 'id': id });
            localStorage.setItem('hdaaeq_order_id_offer', id);
        }
        else if (type == 1) {
            this.navCtrl.push("CurrentOrdersPage", { 'id': id });
        }
        console.log(id);
    };
    RequestPage.prototype.goFinishOrder = function (id) {
        this.navCtrl.push("FinishOrdersPage", { 'id': id });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/request/request.html"*/'<ion-header>\n\n    <ion-navbar>\n        <!-- <button class="btn" menuToggle [(ngClass)]=\'iconRtl\'><img src="assets/imgs/menu.png"></button> -->\n        <ion-title>{{ \'requests\' | translate }}</ion-title>\n        <!-- <button class="btn" (click)="openNoty()" [(ngClass)]=\'iconLtr\'><img src="assets/imgs/bell.png"></button> -->\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n            <ion-segment [(ngModel)]="pet">\n                <ion-segment-button value="Current-Orders" (click)="currentOrder()">\n                <span>{{ \'Current\' | translate }}</span>\n                </ion-segment-button>\n                <ion-segment-button value="finish-Orders" (click)="finishOrder()">\n                <span>{{ \'closedorders\' | translate }}</span>\n                </ion-segment-button>\n            </ion-segment>\n        \n            <div [ngSwitch]="pet">\n                <ion-list *ngSwitchCase="\'Current-Orders\'">\n                    <div class="list-order" (click)="goCurrentOrders(order.id, order.type)" *ngFor="let order of orders">\n                        <h4>{{ \'Ordernumber\' | translate }} : <span>{{ order?.id }}</span></h4>\n                        <h4>{{ \'Daterequest\' | translate }} : <span>{{ order?.date }}</span></h4>\n                        <h4 *ngIf="order?.total_price != \'\'">{{ \'TotalCost\' | translate }} : <span>{{ order?.total_price }}</span></h4>\n                        <h4>{{ \'RequestStatus\' | translate }} : <span>{{ order?.status }}</span></h4>\n                    </div>\n                    <h4 class="text" *ngIf="orders.length == 0">* {{ \'NoNewapp\' | translate }} *</h4>\n                </ion-list>\n                <ion-list *ngSwitchCase="\'finish-Orders\'">\n                    <div class="list-order" (click)="goFinishOrder(active.id)" *ngFor="let active of activeorders">\n                        <h4>{{ \'Ordernumber\' | translate }} : <span>{{ active?.id }}</span></h4>\n                        <h4>{{ \'Daterequest\' | translate }} : <span>{{ active?.date }}</span></h4>\n                        <h4>{{ \'TotalCost\' | translate }} : <span>{{ active?.total_price }}</span></h4>\n                        <h4>{{ \'RequestStatus\' | translate }} : <span>{{ active?.status }}</span></h4>\n                    </div>\n                    <h4 class="text" *ngIf="activeorders.length == 0">* {{ \'NoCompleted\' | translate }} *</h4>\n                </ion-list>\n            </div>\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ })

});
//# sourceMappingURL=3.js.map