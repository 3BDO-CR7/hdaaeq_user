webpackJsonp([18],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowerDetilsPageModule", function() { return FlowerDetilsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flower_detils__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FlowerDetilsPageModule = /** @class */ (function () {
    function FlowerDetilsPageModule() {
    }
    FlowerDetilsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flower_detils__["a" /* FlowerDetilsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flower_detils__["a" /* FlowerDetilsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], FlowerDetilsPageModule);
    return FlowerDetilsPageModule;
}());

//# sourceMappingURL=flower-detils.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowerDetilsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlowerDetilsPage = /** @class */ (function () {
    function FlowerDetilsPage(navCtrl, navParams, loadingCtrl, api, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.serves = [];
        this.subServices = [];
        this.offers = [];
        this.Object_arr = [];
        this.serves_id = [];
        this.serviceSubServices = [];
        this.SubServices_Current = [];
        this.total = 0;
        // Get Basket 
        this.category_id = JSON.parse(localStorage.getItem('hdaaeq_order_serves_id'));
        this.category_serves = JSON.parse(localStorage.getItem('Hdaaeq_Serves'));
        this.key = this.navParams.get('key');
        this.unit = this.navParams.get('unit');
        this.serves_id.push(JSON.parse(localStorage.getItem('hdaaeq_servers_id_2')));
        // Get Current
        this.has_details = this.navParams.get('has_details');
        ;
        this.cart_id = this.navParams.get('cart_id');
        this.current_service = this.navParams.get('current_service');
    }
    FlowerDetilsPage.prototype.ionViewWillEnter = function () {
        var Service = this.navParams.get('Service');
        if (this.key == 1) {
            var Sup_Arr_Service = Service['Array_Sub_Services'];
            for (var m = 0; m < Sup_Arr_Service.length; m++) {
                var Get_Sup_Serves = Sup_Arr_Service[m].subServices;
                for (var s = 0; s < Get_Sup_Serves.length; s++) {
                    this.offers = Get_Sup_Serves;
                }
            }
        }
        var current_service = this.current_service;
        if (this.has_details == 0) {
            for (var g = 0; g < current_service.length; g++) {
                var Sup_Serves_current = current_service[g].sub_services;
                for (var s = 0; s < Sup_Serves_current.length; s++) {
                    this.offers = Sup_Serves_current;
                }
            }
        }
        // this.offers                   = [];
        // this.serves                   = []; 
        this.serviceSubServices.push(this.navParams.get('serviceSubServices'));
        this.serves = this.serviceSubServices[0].subServices;
        // if(this.has_details != null && this.has_details != undefined)
        // {
        //   if(this.has_details == 0){
        //     for (var g = 0; g < current_service.length; g++) {
        //       let Sup_Serves_current  = current_service[g].sub_services;
        //     for (var s = 0; s < Sup_Serves_current.length; s++) {
        //       this.offers = Sup_Serves_current;
        //     }
        //   }
        // }else{
        //  this.offers                    = [];
        // }
        //   this.serves                   = []; 
        //   this.serviceSubServices.push(this.navParams.get('serviceSubServices'));
        //   this.serves                   = this.serviceSubServices[0].subServices;
        // }else{
        //   this.serves                   = []; 
        //   this.serviceSubServices.push(this.navParams.get('serviceSubServices'));
        //   this.serves                   = this.serviceSubServices[0].subServices;  
        // }
    };
    FlowerDetilsPage.prototype.ionViewWillLeave = function () {
        this.offers = [];
        this.serves = [];
        this.offers.length = 0;
    };
    FlowerDetilsPage.prototype.getPrice = function (e) {
        this.offers = [];
        var inputPrice = document.getElementsByClassName("input-price");
        for (var i = 0; i < inputPrice.length; i++) {
            var id = inputPrice[i].getAttribute('id');
            var name = inputPrice[i].getAttribute('name');
            var inputVal = inputPrice[i];
            var unit_details = (parseInt(inputVal.value) == NaN || inputVal.value == '') ? 0 : parseInt(inputVal.value);
            var obj = { id: JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id')), sup_service_id: id, sub_service_name: name, unit_details: unit_details };
            var arr = this.offers.find(function (o) { return o.sup_service_id == id; });
            var index = this.offers.indexOf(arr);
            if (index > -1) {
                this.offers[index].unit_details = unit_details;
            }
            else {
                this.offers.push(obj);
            }
            this.total = unit_details;
        }
    };
    FlowerDetilsPage.prototype.goDone = function () {
        var _this = this;
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.serviceSubServices[0].subServices = this.offers;
        var positionArr = [];
        var obj = {
            category_id: this.category_id,
            service_id: this.serves_id,
            service_desc: null,
            images: null,
            sub_service_id: this.offers,
            Array_Sub_Services: this.serviceSubServices,
            Category_Name: this.category_serves.category_name,
            Category_Image: this.category_serves.service_image,
            Category_Date: date
        };
        var arr = [];
        if (localStorage.getItem('Hdaaeq_Orders') == null) {
            arr.push(obj);
            this.Object_arr.push(arr);
            localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.Object_arr));
        }
        else {
            this.Object_arr = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
            var positionArr = [];
            for (var i = 0; i < this.Object_arr.length; i++) {
                positionArr = this.Object_arr[i];
                if (this.Object_arr[i][0].category_id == 2) {
                    this.position = this.Object_arr[i][0];
                }
            }
            if (this.position == null || this.position == undefined) {
                this.Object_arr = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
                arr.push(obj);
                this.Object_arr.push(arr);
                localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.Object_arr));
            }
            else {
                var array = void 0;
                var secondIndex = void 0;
                var current_id_1 = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id'));
                var arrays_and_sub = this.position.Array_Sub_Services;
                var fontArray = this.navParams.get('serviceSubServices');
                var arr_s = arrays_and_sub.find(function (o) { return o.id == current_id_1; });
                var index_s = arrays_and_sub.indexOf(arr_s);
                if (index_s > -1) {
                    arrays_and_sub.splice(index_s, 1);
                    fontArray.subServices = this.offers;
                    arrays_and_sub.push(fontArray);
                }
                else {
                    fontArray.subServices = this.offers;
                    arrays_and_sub.push(fontArray);
                }
                var _loop_1 = function (g) {
                    array = this_1.position.sub_service_id.find(function (x) { return x.sub_service_id == _this.offers[g].sub_service_id; });
                    secondIndex = this_1.position.sub_service_id.indexOf(array);
                    if (secondIndex > -1) {
                        this_1.position.sub_service_id.splice(secondIndex, 1);
                        this_1.position.sub_service_id.push(this_1.offers[g]);
                    }
                    else {
                        this_1.position.sub_service_id.push(this_1.offers[g]);
                    }
                };
                var this_1 = this;
                for (var g = 0; g < this.offers.length; g++) {
                    _loop_1(g);
                }
                var arr_1 = this.position.service_id.find(function (o) { return o.id == _this.serves_id[0].id; });
                var _loop_2 = function (g) {
                    array = this_2.position.sub_service_id.find(function (x) { return x.sub_service_id == _this.offers[g].sub_service_id; });
                    secondIndex = this_2.position.sub_service_id.indexOf(array);
                    if (secondIndex > -1) {
                        this_2.position.sub_service_id.splice(secondIndex, 1);
                        this_2.position.sub_service_id.push(this_2.offers[g]);
                    }
                    else {
                        this_2.position.sub_service_id.push(this_2.offers[g]);
                    }
                };
                var this_2 = this;
                for (var g = 0; g < this.offers.length; g++) {
                    _loop_2(g);
                }
                var index = this.position.service_id.indexOf(arr_1);
                if (index > -1) {
                    this.position.service_id.splice(index, 1);
                    this.position.service_id.push(this.serves_id[0]);
                }
                else {
                    this.position.service_id.push(this.serves_id[0]);
                }
            }
        }
        localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.Object_arr));
        this.navCtrl.push('DonePage');
    };
    FlowerDetilsPage.prototype.editCurrent = function () {
        var _this = this;
        var up_Obj = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id'));
        var obj_Current = {
            id: up_Obj,
            subServices: this.offers
        };
        this.SubServices_Current.push(obj_Current);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.edit_order_cart({
            cart_id: this.cart_id,
            newcart: this.SubServices_Current,
        }).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            _this.navCtrl.setRoot('HomePage');
            _this.navCtrl.push("CurrentRequestsPage", { 'id': JSON.parse(localStorage.getItem('current_edite_id')) });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
        console.log('this is order');
        console.log(this.offers);
        console.log(this.SubServices_Current);
        console.log(this.serviceSubServices);
    };
    FlowerDetilsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flower-detils',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/flower-detils/flower-detils.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'time\' | translate }}</ion-title>\n  </ion-navbar>\n\n  <div class="block-body">\n      <div class="body-app shadow">\n        \n          <div class="form-section">\n              <div class="upload-image" *ngFor="let ser of serves">\n                  <ion-grid>\n                    <ion-row no-padding>\n                      <ion-col col-8>\n                          <h3>{{ ser?.sub_service_name }}</h3>\n                      </ion-col>\n                      <ion-col col-4>\n                        <input (focusout)="getPrice($event.target,ser?.sub_service_name)" name="{{ser?.sub_service_name}}" value="{{ ser?.unit_details }}" class="input-price" type="tel"  id="{{ser?.sup_service_id}}"  placeholder="{{ unit }}">\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n              </div>\n          </div>          \n          \n          <button class="btn-button bg-green" [hidden]="has_details == 0" (click)="goDone()">{{ \'Sent\' | translate }}</button>\n          \n          <button class="btn-button bg-green" *ngIf="has_details == 0" (click)="editCurrent()">{{ \'confirm\' | translate }}</button>\n\n      </div>\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/flower-detils/flower-detils.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], FlowerDetilsPage);
    return FlowerDetilsPage;
}());

//# sourceMappingURL=flower-detils.js.map

/***/ })

});
//# sourceMappingURL=18.js.map