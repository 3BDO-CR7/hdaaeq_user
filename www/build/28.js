webpackJsonp([28],{

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDatePageModule", function() { return ChooseDatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_date__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChooseDatePageModule = /** @class */ (function () {
    function ChooseDatePageModule() {
    }
    ChooseDatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_date__["a" /* ChooseDatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_date__["a" /* ChooseDatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], ChooseDatePageModule);
    return ChooseDatePageModule;
}());

//# sourceMappingURL=choose-date.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseDatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_api_api__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChooseDatePage = /** @class */ (function () {
    function ChooseDatePage(navCtrl, navParams, platform, camera, translate, loadingCtrl, formBuilder, api, toastCtrl, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.camera = camera;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.iconDir = 'divRtl';
        this.base64Image = [];
        this.base64Images = [];
        this.images = [];
        this.Images_Get = [];
        this.Image_current = [];
        this.services = [];
        this.orders = [];
        this.services_arr = [];
        this.Up_Order = [];
        this.category_serves_Edit = [];
        this.text = '';
        if (this.platform.isRTL) {
            this.iconDir = 'divLtr';
        }
        else {
            this.iconDir = 'divRtl';
        }
        // Get Basket
        this.services_arr = this.navParams.get('services_arr');
        this.category_id = JSON.parse(localStorage.getItem('hdaaeq_order_serves_id'));
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.category_serves = JSON.parse(localStorage.getItem('Hdaaeq_Serves'));
        this.key = this.navParams.get('key');
        // Get Current
        this.cart_id = this.navParams.get('cart_id');
        this.services_array = this.navParams.get('current_services');
        this.has_details = this.navParams.get('has_details');
        this.has_data = this.navParams.get('has_data');
        this.token_Image_current = this.navParams.get('token_Image_current');
        // Get Current
        if (this.has_details == 1) {
            this.Image_current = this.has_data.images;
            this.text = this.has_data.cart_desc;
            this.category_id = JSON.parse(localStorage.getItem('current_category_id'));
            // localStorage.setItem('Random_Token' , JSON.stringify(this.has_data.token));
        }
        // Get Basket
        var Service = this.navParams.get('Service');
        if (this.key == 1) {
            this.Images_Get = this.navParams.get('Images');
            this.text = Service.service_desc;
        }
    }
    ChooseDatePage.prototype.ionViewWillEnter = function () {
        // Get Current
        if (this.has_details == 1) {
            this.Token = this.has_data.token;
            console.log('token Current');
            console.log(this.Token);
        }
        // Get Basket              
        if (this.key == 1) {
            this.Token = JSON.parse(localStorage.getItem('Random_Token'));
            console.log('token Basket');
            console.log(this.Token);
        }
        if (this.Token == null) {
            var rand_1 = function () { return Math.random().toString().replace('0.', ''); };
            var token = function (length) { return (rand_1() + rand_1() + rand_1() + rand_1()).substr(0, length); };
            this.Token = token(5);
            localStorage.setItem('Random_Token', JSON.stringify(this.Token));
            console.log('new token');
            console.log(this.Token);
        }
    };
    ChooseDatePage.prototype.Upload_Done = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var obj = {
            category_id: this.category_id,
            service_id: this.services_arr,
            service_desc: this.text,
            images: this.images,
            sub_service_id: null,
            Category_Name: this.category_serves.category_name,
            Category_Image: this.category_serves.service_image,
            Category_Date: date,
            token_servies: this.Token
        };
        if (localStorage.getItem('Hdaaeq_Orders') == null) {
            var arr = [];
            arr.push(obj);
            this.orders.push(arr);
            localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.orders));
            localStorage.setItem('Random_Token', this.Token);
        }
        else {
            var category_id = JSON.parse(localStorage.getItem('hdaaeq_order_serves_id'));
            this.orders = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
            for (var i = 0; i < this.orders.length; i++) {
                if (this.orders[i][0].category_id == category_id) {
                    this.position = i;
                }
            }
            this.orders = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
            if (this.position == null || this.position == undefined) {
                var arr = [];
                arr.push(obj);
                this.orders.push(arr);
                localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.orders));
            }
            else {
                this.orders.splice(this.position, 1);
                var arr = [];
                arr.push(obj);
                this.orders.push(arr);
                localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.orders));
                localStorage.setItem('Hdaaeq_Orders_Up_1', JSON.stringify(arr));
            }
        }
        this.navCtrl.setRoot('DonePage');
        this.navCtrl.setRoot('DonePage');
    };
    ChooseDatePage.prototype.up = function (array) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.add_basket_image({
            lang: this.translate.currentLang,
            token: this.Token,
            images: this.images,
            category_id: this.category_id
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            if (response.key == 1) {
                response.data = _this.images;
                if (_this.has_details == 1) {
                    _this.editCurrent();
                }
                else {
                    _this.Upload_Done();
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
    ChooseDatePage.prototype.goDone = function () {
        var text = (this.translate.currentLang == 'en') ? 'You must add photos' : 'يجب عليك إضافة الصور';
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        if (this.images.length == 0 && this.Images_Get.length == 0 && this.Image_current.length == 0) {
            toast.present();
        }
        else {
            this.up(this.Images_Get);
        }
    };
    ChooseDatePage.prototype.presentActionSheet = function () {
        var _this = this;
        var addimage = (this.translate.currentLang == 'en') ? 'Add Image' : 'إضافة صورة';
        var take = (this.translate.currentLang == 'en') ? 'Take Photo' : 'إلتقاط صورة';
        var choose = (this.translate.currentLang == 'en') ? 'Choose Photo' : 'إختر صورة';
        var cancel = (this.translate.currentLang == 'en') ? 'Cancel' : 'إلغاء';
        var actionSheet = this.actionSheetCtrl.create({
            title: addimage,
            buttons: [
                {
                    text: take,
                    handler: function () {
                        _this.pickPhoto(0);
                    }
                },
                {
                    text: choose,
                    handler: function () {
                        _this.openGallery(0);
                    }
                },
                {
                    text: cancel,
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ChooseDatePage.prototype.pickPhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.images.push(imageData);
            _this.base64Image.push('data:image/jpeg;base64,' + imageData);
        }, function (err) {
        });
    };
    ChooseDatePage.prototype.openGallery = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.images.push(imageData);
            _this.base64Image.push('data:image/jpeg;base64,' + imageData);
        }, function (err) {
        });
    };
    ChooseDatePage.prototype.removeImgs = function (id, x, h) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        this.api.delete_basket_image({
            token: this.Token,
            images_id: id,
        }).subscribe(function (response) {
            if (response.key == 1) {
                _this.Image_current.splice(x, 1);
                _this.Images_Get.splice(h, 1);
            }
            else if (response.key == 3) {
                _this.navCtrl.push("LoginPage");
            }
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    ChooseDatePage.prototype.removeImg = function (i) {
        this.images.splice(i, 1);
        this.base64Image.splice(i, 1);
    };
    ChooseDatePage.prototype.editCurrent = function () {
        var _this = this;
        this.api.edit_order_cart({
            cart_id: this.cart_id,
            service_desc: this.text,
            token: this.Token,
            newcart: this.services_arr,
        }).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            _this.navCtrl.setRoot('HomePage');
            _this.navCtrl.push("CurrentRequestsPage", { 'id': JSON.parse(localStorage.getItem('current_edite_id')) });
        }, function (error) {
            // loading.dismiss();
        }, function () {
            // loading.dismiss();
        });
    };
    ChooseDatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose-date',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/choose-date/choose-date.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'time\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n          \n            <div class="form-section">\n                <div class="upload-image">\n                    <h3 (click)="presentActionSheet()">\n                      {{ \'Attach\' | translate }}\n                      <ion-icon name="camera" [(ngClass)]=\'iconDir\'></ion-icon>\n                    </h3>\n\n                    \n                    <div *ngIf="key == 1" style="display: inline-block">\n                      <div class="images" *ngFor="let imgs of Images_Get;let h = index;">\n                        <span class="upload">\n                          <img src="{{imgs?.image}}" alt="" (click)="removeImgs(imgs?.id , h)">\n                          <ion-icon name="ios-close-circle"></ion-icon>\n                        </span>\n                      </div>\n                    </div>\n\n                    <div *ngIf="has_details == 1" style="display: inline-block">\n                      <div class="images" *ngFor="let Img of Image_current;let x = index;">\n                        <span class="upload">\n                          <img src="{{Img?.image}}" alt="" (click)="removeImgs(Img?.id , x)">\n                          <ion-icon name="ios-close-circle"></ion-icon>\n                        </span>\n                      </div>\n                    </div>\n\n                    <div class="images" *ngFor="let img of images;let i = index;">\n                      <span class="upload">\n                        <img src="data:image/jpeg;base64,{{img}}" alt="" (click)="removeImg(i)">\n                        <ion-icon name="ios-close-circle"></ion-icon>\n                      </span>\n                    </div>\n\n\n                    <textarea placeholder="{{ \'Description\' | translate }}"  [(ngModel)]="text"></textarea>\n                    \n                </div>\n            </div>\n\n            <button class="btn-button bg-green" [disabled]="text == \'\' &&  (images.length == 0 || Images_Get.length == 0 || Image_current.length == 0)" (click)="goDone()">{{ \'Sent\' | translate }}</button>\n\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/choose-date/choose-date.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChooseDatePage);
    return ChooseDatePage;
}());

//# sourceMappingURL=choose-date.js.map

/***/ })

});
//# sourceMappingURL=28.js.map