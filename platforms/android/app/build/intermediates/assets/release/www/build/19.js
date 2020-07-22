webpackJsonp([19],{

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishOrdersPageModule", function() { return FinishOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finish_orders__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FinishOrdersPageModule = /** @class */ (function () {
    function FinishOrdersPageModule() {
    }
    FinishOrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__finish_orders__["a" /* FinishOrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finish_orders__["a" /* FinishOrdersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], FinishOrdersPageModule);
    return FinishOrdersPageModule;
}());

//# sourceMappingURL=finish-orders.module.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishOrdersPage; });
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




var FinishOrdersPage = /** @class */ (function () {
    function FinishOrdersPage(navCtrl, navParams, loadingCtrl, api, toastCtrl, translate, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.images = [];
        this.serves = [];
        this.up_serves = [];
        this.sup_serves = [];
        this.arr_order = [];
        this.id = this.navParams.get('id');
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.clientFinishedDetails({
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
            _this.images = response.data.images;
            _this.arr_order = response.data.carts;
            _this.serves = response.data.services;
            _this.up_serves = response.data.services;
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    }
    FinishOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinishOrdersPage');
    };
    FinishOrdersPage.prototype.goFading = function (id, e) {
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
    FinishOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finish-orders',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/finish-orders/finish-orders.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'closedorders\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n            <div class="list-order">\n                <h4>{{ \'Ordernumber\' | translate }} : <span>{{ data?.id }}</span></h4>\n                <h4>{{ \'Daterequest\' | translate }} : <span>{{ data?.date }}</span></h4>\n                <h4>{{ \'TotalCost\' | translate }} : <span>{{ data?.total_price }} {{ \'RS\' | translate }}</span></h4>\n                <h4>{{ \'RequestStatus\' | translate }} : <span>{{ data?.status }}</span></h4>\n            </div>\n            <h3 class="brown">{{ \'ProviderData\' | translate }}</h3>\n            <div class="list-order">\n                <h4>{{ \'nameProvider\' | translate }} : <span>{{ data?.provider_name }}</span></h4>\n                <h4>{{ \'phone\' | translate }} : <span>{{ data?.provider_phone }}</span></h4>\n                <h4>{{ \'city\' | translate }} : <span>{{ data?.provider_city }}</span></h4>\n                <h4>{{ \'workdate\' | translate }} : <span>{{ data?.work_date }}</span></h4>\n                <h4>{{ \'worktime\' | translate }} : <span>{{ data?.work_time }}</span></h4>\n            </div>\n            <h3 class="brown">{{ \'Required\' | translate }}</h3>\n            <div class="up_ip_block">\n              <div class="ip_block" *ngFor="let serv of arr_order">\n                  <div class="up-section">\n                      <h3 (click)="goFading(serv.cart_id,$event)" id="first-{{serv.cart_id}}">\n                        {{ serv?.category_name }}\n                        <ion-icon name="arrow-dropdown"></ion-icon>\n                      </h3>\n                      <div class="view-section" id="second-{{serv.cart_id}}">\n                          <div *ngIf="serv?.has_details != 0;">\n                              <ion-slides *ngIf="serv.images.length !=0 && serv.images.length != undefined" spaceBetween="5px" pager="true" autoplay="3000" speed="3000">\n                          \n                                  <ion-slide *ngFor="let img of serv.images">\n                                    <img src="{{img?.image}}">\n                                  </ion-slide>\n                            \n                              </ion-slides>\n                          </div>  \n                          <div class="list-order" *ngIf="serv?.has_details != 0;">\n                              <p>{{ serv?.cart_desc }}</p>\n                          </div>\n                          <div *ngIf="serv?.has_details != 0;">\n                              <div class="sup_serv" *ngFor="let sup_serv of serv.services">\n                                  <h3>\n                                    - {{ sup_serv?.service_name }}\n                                  </h3>\n                              </div>  \n                          </div>\n                          <div class="list-order" *ngIf="serv?.has_details == 0;">\n                            <div no-padding *ngFor="let up_serv of serv.services">\n                                <div>\n                                    <h4> {{ up_serv?.service_name }} </h4>\n                                    <div *ngFor="let sup_serv of up_serv.sub_services">\n                                      <h6> - {{ sup_serv?.sub_service_name }} \n                                        <span class="brown">{{ sup_serv?.unit_details }}</span>\n                                      </h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/finish-orders/finish-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FinishOrdersPage);
    return FinishOrdersPage;
}());

//# sourceMappingURL=finish-orders.js.map

/***/ })

});
//# sourceMappingURL=19.js.map