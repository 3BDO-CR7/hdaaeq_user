webpackJsonp([32],{

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketDetilsPageModule", function() { return BasketDetilsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket_detils__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BasketDetilsPageModule = /** @class */ (function () {
    function BasketDetilsPageModule() {
    }
    BasketDetilsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__basket_detils__["a" /* BasketDetilsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__basket_detils__["a" /* BasketDetilsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], BasketDetilsPageModule);
    return BasketDetilsPageModule;
}());

//# sourceMappingURL=basket-detils.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketDetilsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BasketDetilsPage = /** @class */ (function () {
    function BasketDetilsPage(navCtrl, navParams, api, translate, alertCtrl, imageViewerCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.up_detils = '';
        this.block_img = [];
        this.up_serves = [];
        this.sup_serves = [];
        this.array = [];
        this.Up_Serves = [];
        this.Image = [];
        this.Image_id = [];
        this.gallery = [];
        this._imageViewerCtrl = imageViewerCtrl;
    }
    BasketDetilsPage.prototype.itemSelected = function (images) {
        this.gallery = [];
        for (var i = 0; i < images.length; i++) {
            this.gallery.push({ url: images[i].image });
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: this.gallery,
        });
        modal.present();
    };
    BasketDetilsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Category_id = this.navParams.get('id');
        this.category_id = this.navParams.get('id');
        this.sup_ser_basket = this.navParams.get('sup_ser_basket');
        this.up_detils = this.sup_ser_basket;
        this.up_serves = this.sup_ser_basket.service_id;
        this.sup_serves = this.sup_ser_basket.sub_service_id;
        this.Up_Serves = this.sup_ser_basket.Array_Sub_Services;
        this.Token = this.sup_ser_basket.token_servies;
        console.log('up_arr');
        console.log(this.sup_ser_basket);
        this.api.get_basket_image({
            token: this.Token,
            category_id: this.Category_id,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == 1) {
                _this.block_img = response.data.images;
                var Arr_Image = response.data.images;
                for (var i = 0; i < Arr_Image.length; i++) {
                    _this.Image_id.push(Arr_Image[i].id);
                    _this.sup_ser_basket.push(_this.Image_id);
                }
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
        }, function (error) { }, function () { });
    };
    BasketDetilsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasketDetilsPage');
    };
    BasketDetilsPage.prototype.goEdite = function (id) {
        if (id == 1) {
            this.navCtrl.push('MaintenanceSectionPage', {
                'id': id,
                'key': 1,
                sup_ser_basket: this.sup_ser_basket,
                Images: this.block_img,
            });
        }
        else if (id == 2) {
            this.navCtrl.push('FlowersSectionPage', {
                'id': id,
                'key': 1,
                sup_ser_basket: this.sup_ser_basket
            });
        }
        else if (id == 3) {
            this.navCtrl.push('MaintenanceSectionPage', {
                'id': id,
                'key': 1,
                sup_ser_basket: this.sup_ser_basket,
                Images: this.block_img,
            });
        }
        localStorage.setItem('Random_Token', JSON.stringify(this.Token));
    };
    BasketDetilsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket-detils',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/basket-detils/basket-detils.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'basket\' | translate }}</ion-title>\n  </ion-navbar>\n\n  <div class="block-body">\n    <div class="body-app shadow">\n        \n        <div class="up-section">\n\n          <div *ngIf="sup_ser_basket?.category_id != 2;">\n            <ion-slides *ngIf="block_img.length !=0 && block_img.length != undefined " spaceBetween="5px" pager="true" autoplay="3000" speed="3000">\n                <ion-slide *ngFor="let img of block_img">\n                  <img src="{{img?.image}}" (click)="itemSelected(block_img)"  #myImage>\n                </ion-slide>\n            </ion-slides>\n          </div>\n\n          <div class="discrbion" *ngIf="sup_ser_basket?.category_id != 2;">\n              <h3 class="brown">{{ \'Details\' | translate }} : </h3>\n              <p>{{ up_detils?.service_desc }}</p>\n          </div>\n\n          <div class="discrbion">\n              <h3 class="brown">{{ \'Services\' | translate }} : </h3>\n              <div class="list-order" *ngIf="sup_ser_basket?.category_id != 2;else temp">\n                <div *ngFor="let serv of up_serves">\n                    <h4><span>*</span> {{ serv?.name }}</h4>\n                </div>\n              </div>\n              <ng-template #temp>\n                <div class="table_order">\n                    <div class="border_box" no-padding *ngFor="let up_serv of Up_Serves">\n                        <div>\n                            <h4> {{ up_serv?.name }} </h4>\n                            <div *ngFor="let sup_serv of up_serv.subServices" class="block_table">\n                              <h6> - {{ sup_serv?.sub_service_name }}</h6>\n                              <span class="brown">\n                                  <strong>{{ sup_serv?.unit_details }}</strong>\n                              </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n              </ng-template>\n          </div>\n\n        </div>\n\n        <button class="btn-button bg-green" (click)="goEdite(sup_ser_basket?.category_id)">{{ \'edit\' | translate }}</button>\n    \n    </div>\n  </div>\n  \n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/basket-detils/basket-detils.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], BasketDetilsPage);
    return BasketDetilsPage;
}());

//# sourceMappingURL=basket-detils.js.map

/***/ })

});
//# sourceMappingURL=32.js.map