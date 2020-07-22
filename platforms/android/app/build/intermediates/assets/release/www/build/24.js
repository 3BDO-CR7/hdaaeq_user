webpackJsonp([24],{

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentOrdersPageModule", function() { return CurrentOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_orders__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CurrentOrdersPageModule = /** @class */ (function () {
    function CurrentOrdersPageModule() {
    }
    CurrentOrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__current_orders__["a" /* CurrentOrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__current_orders__["a" /* CurrentOrdersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], CurrentOrdersPageModule);
    return CurrentOrdersPageModule;
}());

//# sourceMappingURL=current-orders.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrentOrdersPage = /** @class */ (function () {
    function CurrentOrdersPage(navCtrl, navParams, loadingCtrl, api, toastCtrl, translate, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.images = [];
        this.serves = [];
        this.up_serves = [];
        this.sup_serves = [];
        this.Carts = [];
        this.gallery = [];
        this.root = [];
        this.id = this.navParams.get('id');
    }
    CurrentOrdersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.clientActiveDetails({
            order_id: this.id,
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
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            _this.data = response.data;
            _this.Carts = response.data.carts;
            // for(let r = 0 ; r < this.Carts.length ; r ++)
            // {
            //  this.root = this.Carts[r].images;
            // }
            // for(let i =0 ; i < this.root.length ;i ++)
            // {
            //   this.gallery.push({url:this.root[i].image })
            // }
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CurrentOrdersPage.prototype.itemSelected = function (images) {
        this.gallery = [];
        for (var i = 0; i < images.length; i++) {
            this.gallery.push({ url: images[i].image });
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: this.gallery,
        });
        modal.present();
    };
    CurrentOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentOrdersPage');
    };
    CurrentOrdersPage.prototype.goCloseCode = function (finish_code) {
        this.navCtrl.push("CloseCodePage", { finish_code: finish_code });
    };
    CurrentOrdersPage.prototype.goFading = function (id, e) {
        var els = document.querySelectorAll('.view-section');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('fading');
        }
        var element = document.getElementById("second-" + id);
        if (element.getAttribute('value') == 'active') {
            element.classList.remove('fading');
            element.setAttribute('value', '');
        }
        else {
            element.setAttribute('value', 'active');
            element.classList.add('fading');
        }
    };
    CurrentOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-current-orders',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/current-orders/current-orders.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'Current\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n            <h3 class="brown">{{ \'Details\' | translate }}</h3>\n            <div class="list-order">\n                <h4>{{ \'Ordernumber\' | translate }} : <span>{{ data?.id }}</span></h4>\n                <h4>{{ \'Daterequest\' | translate }} : <span>{{ data?.date }}</span></h4>\n                <h4>{{ \'TotalCost\' | translate }} : <span>{{ data?.total_price }} {{ \'RS\' | translate }}</span></h4>\n                <h4>{{ \'RequestStatus\' | translate }} : <span>{{ data?.status }}</span></h4>\n            </div>\n            <h3 class="brown">{{ \'ProviderData\' | translate }}</h3>\n            <div class="list-order">\n                <h4>{{ \'nameProvider\' | translate }} : <span>{{ data?.provider_name }}</span></h4>\n                <h4>{{ \'phone\' | translate }} : <span>{{ data?.provider_phone }}</span></h4>\n                <h4>{{ \'city\' | translate }} : <span>{{ data?.provider_city }}</span></h4>\n                <h4>{{ \'workdate\' | translate }} : <span>{{ data?.work_date }}</span></h4>\n                <h4>{{ \'worktime\' | translate }} : <span>{{ data?.work_time }}</span></h4>\n            </div>\n            <div class="up_ip_block">\n              <div class="ip_block" *ngFor="let cart of Carts">\n                  <div class="up-section">\n                      <h3 (click)="goFading(cart.cart_id,$event)" id="first-{{cart.cart_id}}">\n                        {{ cart?.category_name }}\n                        <ion-icon name="arrow-dropdown"></ion-icon>\n                      </h3>\n                      <div class="view-section" id="second-{{cart.cart_id}}">\n                          <div *ngIf="cart?.has_details != 0;">\n                              <ion-slides *ngIf="cart.images.length !=0 && cart.images.length != undefined" spaceBetween="5px" pager="true" autoplay="3000" speed="3000">\n                          \n                                  <ion-slide *ngFor="let img of cart.images">\n                                    <img src="{{img?.image}}"  (click)="itemSelected(cart.images)"  #myImage>\n                                  </ion-slide>\n                            \n                              </ion-slides>\n                          </div>  \n                          <div class="list-order" *ngIf="cart?.has_details != 0;">\n                              <p>{{ cart?.cart_desc }}</p>\n                          </div>\n                          <div *ngIf="cart?.has_details != 0;">\n                              <div class="sup_serv" *ngFor="let sup_serv of cart.services">\n                                  <h3>\n                                    - {{ sup_serv?.service_name }}\n                                  </h3>\n                              </div>  \n                          </div>\n                          <div class="list-order" *ngIf="cart?.has_details == 0;">\n                            <div no-padding *ngFor="let up_serv of cart.services">\n                                <div>\n                                    <h4> {{ up_serv?.service_name }} </h4>\n                                    <div *ngFor="let sup_serv of up_serv.sub_services">\n                                      <h6> - {{ sup_serv?.sub_service_name }} \n                                        <span class="brown">{{ sup_serv?.unit_details }}</span>\n                                      </h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n            <button class="btn-button green" (click)="goCloseCode(data?.finish_code)">{{ \'closecode\' | translate }}</button>\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/current-orders/current-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], CurrentOrdersPage);
    return CurrentOrdersPage;
}());

//# sourceMappingURL=current-orders.js.map

/***/ })

});
//# sourceMappingURL=24.js.map