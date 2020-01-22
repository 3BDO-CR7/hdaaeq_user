webpackJsonp([11],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceSectionPageModule", function() { return MaintenanceSectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintenance_section__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaintenanceSectionPageModule = /** @class */ (function () {
    function MaintenanceSectionPageModule() {
    }
    MaintenanceSectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maintenance_section__["a" /* MaintenanceSectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maintenance_section__["a" /* MaintenanceSectionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], MaintenanceSectionPageModule);
    return MaintenanceSectionPageModule;
}());

//# sourceMappingURL=maintenance-section.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceSectionPage; });
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




var MaintenanceSectionPage = /** @class */ (function () {
    function MaintenanceSectionPage(navCtrl, navParams, platform, translate, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.iconDir = 'divRtl';
        this.img_Rtl = 'img_Rtl';
        this.images = [];
        this.services_arr = [];
        this.category_serves_Edit = [];
        this.chicked = {};
        this.id = this.navParams.get('id');
        this.service_id = JSON.parse(localStorage.getItem('hdaaeq_order_serves_id'));
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        // Get basket
        this.category_serves_Edit = this.navParams.get('sup_ser_basket');
        this.key = this.navParams.get('key');
        this.Img = this.navParams.get('Images');
        // Get Current_Request
        this.cart_id = this.navParams.get('cart_id');
        this.services = this.navParams.get('services');
        this.has_details = this.navParams.get('has_details');
        this.has_data = this.navParams.get('data');
        this.token = this.navParams.get('token');
        if (this.platform.isRTL) {
            this.iconDir = 'divLtr';
            this.img_Rtl = 'img_Rtl';
        }
        else {
            this.iconDir = 'divRtl';
            this.img_Rtl = 'img_Ltr';
        }
        // this.serves       = [];
        // this.chicked      = false;
    }
    MaintenanceSectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaintenanceSectionPage');
    };
    MaintenanceSectionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('this obj');
        console.log(this.serves);
        var els = document.querySelectorAll('.view-section');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('fading');
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.services({
            lang: this.translate.currentLang,
            category_id: this.id,
            user_id: this.user.id,
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.type == "0") {
                _this.serves = response.data;
                _this.images = response.data.images;
                if (_this.has_details == 1) {
                    // Get Current_Request
                    setTimeout(function () {
                        var current_serves = _this.services;
                        for (var m = 0; m < current_serves.length; m++) {
                            var id = current_serves[m].id;
                            var element = document.getElementById("id-" + id);
                            if (element) {
                                element.setAttribute('checked', 'checked');
                                _this.chicked[id] = true;
                            }
                            _this.services_arr = current_serves;
                        }
                    }, 300);
                }
                if (_this.key == 1) {
                    // Get basket
                    setTimeout(function () {
                        var Arr_Service = _this.category_serves_Edit['service_id'];
                        for (var m = 0; m < Arr_Service.length; m++) {
                            var id = Arr_Service[m].id;
                            var element = document.getElementById("id-" + id);
                            if (element) {
                                element.setAttribute('checked', 'checked');
                                _this.chicked[id] = true;
                            }
                            _this.services_arr = Arr_Service;
                        }
                    }, 300);
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
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    MaintenanceSectionPage.prototype.backBasket = function (id) {
        this.navCtrl.push("BasketPage");
    };
    MaintenanceSectionPage.prototype.goFading = function (id, e) {
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
    MaintenanceSectionPage.prototype.goDate = function () {
        this.navCtrl.push("ChooseDatePage", {
            'services_arr': this.services_arr,
            key: this.key,
            Service: this.category_serves_Edit,
            Images: this.Img,
            current_services: this.services,
            cart_id: this.cart_id,
            has_data: this.has_data,
            has_details: this.has_details,
            token_Image_current: this.token
        });
    };
    MaintenanceSectionPage.prototype.ionViewWillLeave = function () {
        // this.services_arr   = [];
        // this.chicked        = false;
    };
    MaintenanceSectionPage.prototype.chooseServices = function (id, name) {
        var obj = { id: id, name: name };
        var arr = this.services_arr.find(function (o) { return o.id == id; });
        var index = this.services_arr.indexOf(arr);
        if (index > -1) {
            this.services_arr.splice(index, 1);
            this.chicked[id] = false;
        }
        else {
            this.services_arr.push(obj);
            this.chicked[id] = true;
        }
    };
    MaintenanceSectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maintenance-section',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/maintenance-section/maintenance-section.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'Maintenance\' | translate }}</ion-title>\n      <button class="btn btn_basket" (click)="backBasket()" *ngIf="key == 1" [(ngClass)]=\'iconBasket\'>\n        <img src="assets/imgs/back.png" [(ngClass)]=\'img_Rtl\'>\n      </button>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n          \n            <div class="hegie-page">\n              <div class="up-section" *ngFor="let serv of serves">\n                  <!-- <ion-grid class="no-padding">\n                    <ion-row>\n                      <ion-col col-10>\n                          <h3 (click)="goFading(serv?.id,$event)"  id="first-{{serv?.id}}">\n                            {{ serv?.name }}\n                            <ion-icon name="arrow-dropdown" [(ngClass)]=\'iconDir\'></ion-icon>\n                          </h3>\n                      </ion-col>\n                      <ion-col col-2 class="no-padding">\n                          <label class="ckicked">\n                            <input type="checkbox" id="id-{{serv?.id}}" (click)="chooseServices(serv?.id,serv?.name)">\n                            <span class="checkmark"></span>\n                          </label>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid> -->\n\n                  <ion-grid class="no-padding">\n                    <ion-row>\n                      <ion-col col-10>\n                          <h3 (click)="goFading(serv?.id,$event)"  id="first-{{serv?.id}}">\n                            {{ serv?.name }}\n                            <ion-icon name="arrow-dropdown" [(ngClass)]=\'iconDir\'></ion-icon>\n                          </h3>\n                      </ion-col>\n                      <ion-col col-2 class="no-padding">\n                          <ion-checkbox [(ngModel)]="chicked[serv?.id]" id="id-{{serv?.id}}" (click)="chooseServices(serv?.id,serv?.name)"></ion-checkbox>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n\n                  <div class="view-section" id="second-{{serv?.id}}">\n                        <ion-slides *ngIf="serv.images.length !=0 && serv.images.length != undefined" spaceBetween="5px" pager="true" autoplay="3000" loop="true" speed="3000">\n                      \n                          <ion-slide *ngFor="let img of serv.images">\n                            <img src="{{img?.image}}">\n                          </ion-slide>\n                    \n                      </ion-slides>  \n                      <p>{{serv?.description}}</p>\n                  </div>\n              </div>\n            </div>\n            <button class="btn-button bg-green" [disabled]="services_arr.length == 0" (click)="goDate()">{{ \'ask\' | translate }}</button>\n\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/maintenance-section/maintenance-section.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MaintenanceSectionPage);
    return MaintenanceSectionPage;
}());

//# sourceMappingURL=maintenance-section.js.map

/***/ })

});
//# sourceMappingURL=11.js.map