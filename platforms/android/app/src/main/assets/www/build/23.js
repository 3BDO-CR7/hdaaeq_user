webpackJsonp([23],{

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentRequestsPageModule", function() { return CurrentRequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_requests__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CurrentRequestsPageModule = /** @class */ (function () {
    function CurrentRequestsPageModule() {
    }
    CurrentRequestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__current_requests__["a" /* CurrentRequestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__current_requests__["a" /* CurrentRequestsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], CurrentRequestsPageModule);
    return CurrentRequestsPageModule;
}());

//# sourceMappingURL=current-requests.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CurrentRequestsPage = /** @class */ (function () {
    function CurrentRequestsPage(navCtrl, navParams, loadingCtrl, api, toastCtrl, translate, alertCtrl, imageViewerCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.arr_order = [];
        this.sup_serves = [];
        this.images = [];
        this.Up_Serves_Detils = [];
        this.gallery = [];
        this.root = [];
        this.page = '0';
        this.id = this.navParams.get('id');
        this._imageViewerCtrl = imageViewerCtrl;
    }
    CurrentRequestsPage.prototype.itemSelected = function (images) {
        this.gallery = [];
        for (var i = 0; i < images.length; i++) {
            this.gallery.push({ url: images[i].image });
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: this.gallery,
        });
        modal.present();
    };
    CurrentRequestsPage.prototype.ionViewWillEnter = function () {
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
            _this.arr_order = response.data.carts;
            console.log('bool');
            console.log(_this.data);
            console.log(_this.arr_order);
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
        var els = document.querySelectorAll('.view-section');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('fading');
        }
    };
    CurrentRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentRequestsPage');
    };
    CurrentRequestsPage.prototype.goQuotations = function (id, date) {
        this.navCtrl.push("QuotationsPage", { id: id, date: date });
    };
    CurrentRequestsPage.prototype.goFading = function (id, e) {
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
    CurrentRequestsPage.prototype.goRemove = function (id, i) {
        var _this = this;
        if (this.arr_order.length == 1) {
            var title = (this.translate.currentLang == 'en') ? 'Do you want to delete this service ?' : 'هل تريد حذف هذه الخدمه ؟';
            var message = (this.translate.currentLang == 'en') ? 'If this service is deleted, the entire request will be deleted' : 'إذا تم حذف هذه الخدمة ، فسيتم حذف الطلب بأكمله';
            var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
            var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
            var confirm_2 = this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.removeReqest(id, i);
                            _this.navCtrl.push("HomePage");
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
        else {
            this.removeReqest(id, i);
        }
    };
    CurrentRequestsPage.prototype.removeReqest = function (id, i) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.delete_order_cart({
            cart_id: id,
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == "1") {
                _this.arr_order.splice(i, 1);
            }
            else if (response.key == "3") {
                var confirm_3 = _this.alertCtrl.create({
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
                confirm_3.present();
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
    };
    CurrentRequestsPage.prototype.goEdite = function (cart_id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.get_order_cart({
            cart_id: cart_id,
            lang: this.translate.currentLang,
        }).subscribe(function (response) {
            var data = response.data;
            var id = response.data.category_id;
            var has_details = response.data.has_details;
            var services = response.data.services;
            var token = response.data.token;
            console.log(data);
            if (id == 1) {
                _this.navCtrl.push('MaintenanceSectionPage', {
                    'cart_id': cart_id,
                    'data': data,
                    'id': id,
                    'has_details': has_details,
                    'services': services,
                    'token': token,
                    "section_id": _this.id
                });
            }
            else if (id == 2) {
                _this.navCtrl.push('FlowersSectionPage', {
                    'cart_id': cart_id,
                    'has_details': has_details,
                    'services': services,
                    'id': id,
                    "section_id": _this.id
                });
            }
            else if (id == 3) {
                _this.navCtrl.push('MaintenanceSectionPage', {
                    'cart_id': cart_id,
                    'data': data,
                    'id': id,
                    'has_details': has_details,
                    'services': services,
                    'token': token,
                    "section_id": _this.id
                });
                console.log('this is servies');
                console.log(services);
            }
            localStorage.setItem('current_edite_id', JSON.stringify(_this.id));
            localStorage.setItem('current_category_id', JSON.stringify(id));
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == "3") {
                var confirm_4 = _this.alertCtrl.create({
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
                confirm_4.present();
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Navbar */])
    ], CurrentRequestsPage.prototype, "navBar", void 0);
    CurrentRequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-current-requests',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/current-requests/current-requests.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'Current\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n            <h3 class="brown">{{ \'Details\' | translate }}</h3>\n            <div class="list-order">\n                <h4>{{ \'Ordernumber\'    | translate }}  : <span>{{ data?.id }}</span></h4>\n                <h4>{{ \'Daterequest\'    | translate }}  : <span>{{ data?.date }}</span></h4>\n                <h4>{{ \'RequestStatus\'  | translate }}  : <span>{{ data?.status }}</span></h4>\n            </div>\n            <h3 class="brown">{{ \'Services\' | translate }}</h3>\n            <div class="up_ip_block">\n\n              <div class="ip_block" *ngFor="let serv of arr_order ; let i index">\n                  <div class="up-section">\n\n                      <ion-list class="animated fadeInUp">\n                        <ion-item-sliding>\n                          <ion-item>\n                            <ion-avatar item-start>\n                                <h3 (click)="goFading(serv.cart_id,$event)" id="first-{{serv.cart_id}}">\n                                  {{ serv?.category_name }}\n                                  <ion-icon name="arrow-dropdown"></ion-icon>\n                                </h3>\n                            </ion-avatar>\n                          </ion-item>\n                          <ion-item-options side="left" (click)="goRemove(serv.cart_id , i)">\n                            <button ion-button color="danger">\n                              <ion-icon name="trash"></ion-icon>\n                            </button>\n                          </ion-item-options>\n                          <ion-item-options side="right" (click)="goEdite(serv.cart_id)">\n                            <button ion-button color="primary">\n                              <ion-icon name="create"></ion-icon>\n                            </button>\n                          </ion-item-options>\n                        </ion-item-sliding>\n                      </ion-list>\n\n                      <div class="view-section" id="second-{{serv.cart_id}}">\n                          <div *ngIf="serv?.has_details != 0;">\n                              <ion-slides *ngIf="serv.images.length !=0 && serv.images.length != undefined" spaceBetween="5px" pager="true" autoplay="3000" speed="3000">\n                          \n                                  <ion-slide *ngFor="let img of serv.images">\n                                    <img src="{{img?.image}}"  (click)="itemSelected(serv.images)"  #myImage>\n                                  </ion-slide>\n                            \n                              </ion-slides>\n                          </div>  \n                          <div class="list-order" *ngIf="serv?.has_details != 0;">\n                              <p>{{ serv?.cart_desc }}</p>\n                          </div>\n                          <div *ngIf="serv?.has_details != 0;">\n                              <div class="sup_serv" *ngFor="let sup_serv of serv.services">\n                                  <h3>\n                                    - {{ sup_serv?.service_name }}\n                                  </h3>\n                              </div>  \n                          </div>\n                          <div class="list-order block_list" *ngIf="serv?.has_details == 0;">\n                            <div no-padding *ngFor="let up_serv of serv.services" class="list_array">\n                                <div>\n                                    <h4> {{ up_serv?.service_name }} </h4>\n                                    <div *ngFor="let sup_serv of up_serv.sub_services" class="list_box">\n                                      <h6> - {{ sup_serv?.sub_service_name }} </h6>\n                                        <span class="brown">{{ sup_serv?.unit_details }}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n              \n            </div>\n        </div>\n        <button class="btn-button green" (click)="goQuotations(data?.date,data?.id)">{{ \'Quotes\' | translate }}</button>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/current-requests/current-requests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], CurrentRequestsPage);
    return CurrentRequestsPage;
}());

//# sourceMappingURL=current-requests.js.map

/***/ })

});
//# sourceMappingURL=23.js.map