webpackJsonp([17],{

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowerServicePageModule", function() { return FlowerServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flower_service__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FlowerServicePageModule = /** @class */ (function () {
    function FlowerServicePageModule() {
    }
    FlowerServicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flower_service__["a" /* FlowerServicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flower_service__["a" /* FlowerServicePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], FlowerServicePageModule);
    return FlowerServicePageModule;
}());

//# sourceMappingURL=flower-service.module.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowerServicePage; });
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




var FlowerServicePage = /** @class */ (function () {
    function FlowerServicePage(navCtrl, navParams, platform, translate, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.serves = [];
        this.sup_serves_arr = [];
        this.serves_edit = [];
        this.Service = [];
        this.Sup_Arr_Service = [];
        this.chicked = {};
        this.unit = this.navParams.get('unit');
        this.name = this.navParams.get('name');
        this.Service = this.navParams.get('Sup_serves');
        // Get Basket
        this.service_id = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id'));
        this.serves_edit = this.navParams.get('serves_edit');
        this.key = this.navParams.get('key');
        // Get Current 
        this.has_details = this.navParams.get('has_details');
        ;
        this.cart_id = this.navParams.get('cart_id');
        this.current_service = this.navParams.get('current_service');
        // this.sup_serves_arr   = [];
        console.log('servies current serveis');
        console.log(this.current_service);
    }
    FlowerServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowerServicePage');
    };
    FlowerServicePage.prototype.ionViewWillEnter = function () {
        // this.sup_serves_arr = [];
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.subservices({
            lang: this.translate.currentLang,
            service_id: this.service_id
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == "1") {
                _this.serves = response.data;
                // Get Basket
                if (_this.key == 1) {
                    _this.Sup_Arr_Service = _this.Service['Array_Sub_Services'];
                    for (var m = 0; m < _this.Sup_Arr_Service.length; m++) {
                        var Get_Sup_Serves = _this.Sup_Arr_Service[m].subServices;
                        for (var s = 0; s < Get_Sup_Serves.length; s++) {
                            var id = Get_Sup_Serves[s].sup_service_id;
                            var element = document.getElementById("id-" + id);
                            if (element) {
                                element.setAttribute('checked', 'checked');
                                _this.chicked[id] = true;
                            }
                            var serves_id = _this.Sup_Arr_Service[m].id;
                            if (serves_id == _this.service_id) {
                                _this.sup_serves_arr = Get_Sup_Serves;
                            }
                            // this.sup_serves_arr = Get_Sup_Serves;
                        }
                    }
                }
                // Get Current
                if (_this.has_details == 0) {
                    setTimeout(function () {
                        var Arr_Service_current = _this.current_service;
                        for (var m = 0; m < Arr_Service_current.length; m++) {
                            var Sup_Serves_current = Arr_Service_current[m].sub_services;
                            for (var s = 0; s < Sup_Serves_current.length; s++) {
                                var id = Sup_Serves_current[s].sup_service_id;
                                var element = document.getElementById("id-" + id);
                                if (element) {
                                    element.setAttribute('checked', 'checked');
                                    _this.chicked[id] = true;
                                }
                                var serves_id = Arr_Service_current[m].id;
                                if (serves_id == _this.service_id) {
                                    _this.sup_serves_arr = Sup_Serves_current;
                                }
                                // this.sup_serves_arr = Sup_Serves_current;
                            }
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
    FlowerServicePage.prototype.ionViewWillLeave = function () {
        // this.sup_serves_arr = [];
        // this.chicked        = false;
    };
    FlowerServicePage.prototype.chooseServices = function (id, name) {
        var obj = { sup_service_id: id, sub_service_name: name };
        var arr = this.sup_serves_arr.find(function (o) { return o.sup_service_id == id; });
        var index = this.sup_serves_arr.indexOf(arr);
        if (index > -1) {
            this.sup_serves_arr.splice(index, 1);
            this.chicked[id] = false;
        }
        else {
            this.sup_serves_arr.push(obj);
            this.chicked[id] = true;
        }
    };
    FlowerServicePage.prototype.goDetils = function (id, name) {
        var obj = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2'));
        obj.subServices = this.sup_serves_arr;
        this.navCtrl.push("FlowerDetilsPage", {
            sup_serves_arr: this.sup_serves_arr,
            serviceSubServices: obj,
            key: this.key,
            Service: this.Service,
            unit: this.unit,
            has_details: this.has_details,
            cart_id: this.cart_id,
            current_service: this.current_service,
        });
        console.log('goning');
        console.log(this.current_service);
        console.log(obj);
    };
    FlowerServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flower-service',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/flower-service/flower-service.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ name }}</ion-title>\n  </ion-navbar>\n\n  <div class="block-body">\n      <div class="body-app shadow">\n\n        <div class="up-section">\n          <div *ngFor="let sups of serves">\n            <!-- <ion-grid class="no-padding">\n              <ion-row>\n                <ion-col col-10>\n                  <h3>{{ sups?.name }}</h3>\n                </ion-col>\n                <ion-col col-2 class="no-padding">\n                  <label class="ckicked">\n                    <input type="checkbox" id="id-{{sups?.sub_service_id}}" (click)="chooseServices(sups?.sub_service_id , sups?.name)">\n                    <span class="checkmark"></span>\n                  </label>\n                </ion-col>\n              </ion-row>\n            </ion-grid> -->\n\n            <ion-grid class="no-padding">\n              <ion-row>\n                <ion-col col-10>\n                    <h3>{{ sups?.name }}</h3>\n                </ion-col>\n                <ion-col col-2 class="no-padding">\n                    <ion-checkbox [(ngModel)]="chicked[sups?.sub_service_id]" id="id-{{sups?.sub_service_id}}" (click)="chooseServices(sups?.sub_service_id , sups?.name)"></ion-checkbox>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </div>\n        </div>\n\n        <button class="btn-button bg-green" [disabled]="sup_serves_arr.length == 0" (click)="goDetils(sups?.sub_service_id , sups?.name)">{{ \'ask\' | translate }}</button>\n\n      </div>\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/flower-service/flower-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FlowerServicePage);
    return FlowerServicePage;
}());

//# sourceMappingURL=flower-service.js.map

/***/ })

});
//# sourceMappingURL=17.js.map