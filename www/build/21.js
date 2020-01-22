webpackJsonp([21],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonePageModule", function() { return DonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__done__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DonePageModule = /** @class */ (function () {
    function DonePageModule() {
    }
    DonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__done__["a" /* DonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__done__["a" /* DonePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], DonePageModule);
    return DonePageModule;
}());

//# sourceMappingURL=done.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonePage = /** @class */ (function () {
    function DonePage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.iconRtl = "icon-right";
        this.iconLtr = "icon-right";
    }
    DonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonePage');
        if (this.platform.isRTL) {
            this.iconRtl = "icon-right";
            this.iconLtr = "icon-left";
        }
        else {
            this.iconRtl = "icon-left";
            this.iconLtr = "icon-right";
        }
    };
    DonePage.prototype.goBasket = function () {
        this.navCtrl.push("BasketPage");
    };
    DonePage.prototype.goHome = function () {
        this.navCtrl.push("HomePage");
    };
    DonePage.prototype.goComplet = function () {
        this.navCtrl.push('MaintenanceSectionPage', { 'id': JSON.parse(localStorage.getItem('hdaaeq_order_serves_id')) });
    };
    DonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-done',template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/pages/done/done.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'Request\' | translate }}</ion-title>\n      <button class="btn" menuToggle [(ngClass)]=\'iconRtl\'><img src="assets/imgs/menu.png"></button>\n      <button class="btn" (click)="openNoty()" [(ngClass)]=\'iconLtr\'><img src="assets/imgs/bell.png"></button>\n    </ion-navbar>\n\n    <div class="block-body">\n        <div class="body-app shadow">\n          \n            <div class="form-section">\n                <div class="done">\n                    <img src="assets/imgs/done.png">\n                    <p>{{ \'titles\' | translate }}</p>\n                    <button class="btn-button brown" (click)="goBasket()">{{ \'Gobasket\' | translate }}</button>\n                    <button class="btn-button brown" (click)="goComplet()">{{ \'gocomplet\' | translate }}</button>\n                    <button class="btn-button brown" (click)="goHome()">{{ \'goHome\' | translate }}</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n  </ion-header>\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaeq-master/src/pages/done/done.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]])
    ], DonePage);
    return DonePage;
}());

//# sourceMappingURL=done.js.map

/***/ })

});
//# sourceMappingURL=21.js.map