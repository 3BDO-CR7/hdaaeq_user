webpackJsonp([8],{

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
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




var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, loadingCtrl, api, toastCtrl, translate, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.text = false;
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.getData();
    }
    NotificationPage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/logo.png">'
        });
        loading.present();
        loading.dismiss();
        this.api.notification({
            user_id: this.user.id,
            lang: this.translate.currentLang
        }).subscribe(function (response) {
            var message = (_this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned' : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
            var Done = (_this.translate.currentLang == 'en') ? 'Go To The Register' : 'الذهاب إلى التسجيل';
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            if (response.key == "0") {
                _this.text = true;
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
            else {
                _this.notification = response.data;
            }
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    NotificationPage.prototype.goShow = function (status, type, id) {
        this.navCtrl.push("QuotationsPage", { id: id });
    };
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.goRemove = function (id, e, index) {
        var _this = this;
        var message = (this.translate.currentLang == 'en') ? 'Do you want to erase this notifiaction ?' : 'هل تريد مسح هذا الأشعار ؟';
        var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        var confirm = this.alertCtrl.create({
            message: message,
            buttons: [
                {
                    text: ok,
                    handler: function () {
                        _this.api.deleteNotifiaction({ notifiaction_id: id }).subscribe(function (response) {
                            var element = document.getElementById("notification-" + id);
                            element.className += ' removnig';
                            setTimeout(function () {
                                _this.notification.splice(index, 1);
                            }, 500);
                        }, function (err) {
                        }, function () {
                        });
                    }
                },
                {
                    text: cansel,
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/notification/notification.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'notification\' | translate }}</ion-title>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n          <div *ngFor="let noty of notification;let i = index">\n            <div class="notification" (click)="goShow(noty.status,noty.type,noty.id)" #notification1 id="notification-{{noty?.notification_id}}">\n                <p>{{ noty?.message }}</p>\n                <ion-icon name="trash" (click)="goRemove(noty.notification_id,$event,i)"></ion-icon>\n              </div>\n          </div>\n\n          <!-- <strong class="text animated fadeInUp" *ngIf="notification.length == 0">* {{ \'noNoty\' | translate }} *</strong> -->\n\n          <strong class="text animated fadeInUp" *ngIf="text">* {{ \'noNoty\' | translate }} *</strong>\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=8.js.map