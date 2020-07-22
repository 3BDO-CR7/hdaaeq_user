webpackJsonp([31],{

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageModule", function() { return BasketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BasketPageModule = /** @class */ (function () {
    function BasketPageModule() {
    }
    BasketPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__basket__["a" /* BasketPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__basket__["a" /* BasketPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], BasketPageModule);
    return BasketPageModule;
}());

//# sourceMappingURL=basket.module.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
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




var BasketPage = /** @class */ (function () {
    function BasketPage(navCtrl, navParams, platform, translate, loadingCtrl, api, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.iconRtl = "icon-right";
        this.iconLtr = "icon-right";
        this.up_arr = [];
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.up_arr = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
        // this.Token      = JSON.parse(localStorage.getItem('Random_Token'));
        console.log('this is data');
        console.log(this.up_arr);
    }
    BasketPage.prototype.ionViewWillEnter = function () {
        var arrs = this.up_arr;
        for (var i = 0; i < arrs.length; i++) {
            var subArr = arrs[i];
            for (var x = 0; x < subArr.length; x++) {
                this.up_arr = arrs;
            }
        }
    };
    BasketPage.prototype.goRemove = function (id) {
        for (var i = 0; i < this.up_arr.length; i++) {
            var subArr = this.up_arr[i];
            for (var x = 0; x < subArr.length; x++) {
                if (subArr[x].category_id == id) {
                    var index = this.up_arr.indexOf(subArr);
                    this.up_arr.splice(index, 1);
                }
            }
        }
        localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.up_arr));
    };
    BasketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasketPage');
        if (this.platform.isRTL) {
            this.iconRtl = "icon-right";
            this.iconLtr = "icon-left";
        }
        else {
            this.iconRtl = "icon-left";
            this.iconLtr = "icon-right";
        }
    };
    BasketPage.prototype.goDetails = function (id, sup_ser_basket) {
        this.navCtrl.push("BasketDetilsPage", { sup_ser_basket: sup_ser_basket, id: id });
    };
    BasketPage.prototype.goEdite = function (id) {
        if (id == 1) {
            this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
        }
        else if (id == 2) {
            this.navCtrl.push('FlowersSectionPage', { 'id': id });
        }
        else if (id == 3) {
            this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
        }
    };
    BasketPage.prototype.goDone = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        // let up_carts = this.up_arr;
        this.api.new_order({
            lang: this.translate.currentLang,
            user_id: this.user.id,
            carts: this.up_arr,
            token: this.Token
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == "1") {
                localStorage.removeItem('Hdaaeq_Orders');
                localStorage.removeItem('Random_Token');
                _this.navCtrl.push('HomePage');
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
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
        console.log(this.up_arr);
    };
    BasketPage.prototype.openNoty = function () {
        this.navCtrl.push("NotificationPage");
    };
    BasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/basket/basket.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'basket\' | translate }}</ion-title>\n    <button class="btn" menuToggle [(ngClass)]=\'iconRtl\'><img src="assets/imgs/menu.png"></button>\n    <button class="btn" (click)="openNoty()" [(ngClass)]=\'iconLtr\'><img src="assets/imgs/bell.png"></button>\n  </ion-navbar>\n\n  <div class="block-body">\n      <div class="body-app shadow">\n\n        <div class="up-section" *ngFor="let ser_basket of up_arr">\n          <ion-list *ngFor="let sup_ser_basket of ser_basket; let index = index" class="animated fadeInUp">\n            <ion-item-sliding>\n              <ion-item (click)="goDetails(sup_ser_basket?.category_id,sup_ser_basket)">\n                <ion-avatar item-start>\n                  <img src="{{ sup_ser_basket?.Category_Image }}">\n                </ion-avatar>\n<!--                <h3 class="h3_text">{{ sup_ser_basket?.Category_Name }}</h3>-->\n              </ion-item>\n              <ion-item-options side="left" (click)="goRemove(sup_ser_basket?.category_id)">\n                <button ion-button color="danger">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-item-options>\n              <!-- <ion-item-options side="right" (click)="goEdite(sup_ser_basket?.category_id)">\n                <button ion-button color="primary">\n                  <ion-icon name="create"></ion-icon>\n                </button>\n              </ion-item-options> -->\n            </ion-item-sliding>\n          </ion-list>\n        </div>\n    \n        \n        <strong class="text animated fadeInUp" *ngIf="up_arr.length == 0">* {{ \'basketempty\' | translate }} *</strong>\n    \n        <button class="btn-button bg-green" (click)="goDone()" *ngIf="up_arr.length > 0">{{ \'confirm\' | translate }}</button>\n    \n      </div>\n  </div>\n  \n</ion-header>\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/basket/basket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], BasketPage);
    return BasketPage;
}());

//# sourceMappingURL=basket.js.map

/***/ })

});
//# sourceMappingURL=31.js.map