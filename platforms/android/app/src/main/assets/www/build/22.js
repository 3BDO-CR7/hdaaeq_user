webpackJsonp([22],{

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneRequsetPageModule", function() { return DoneRequsetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__done_requset__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DoneRequsetPageModule = /** @class */ (function () {
    function DoneRequsetPageModule() {
    }
    DoneRequsetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__done_requset__["a" /* DoneRequsetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__done_requset__["a" /* DoneRequsetPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], DoneRequsetPageModule);
    return DoneRequsetPageModule;
}());

//# sourceMappingURL=done-requset.module.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneRequsetPage; });
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


var DoneRequsetPage = /** @class */ (function () {
    function DoneRequsetPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.iconRtl = "icon-right";
        this.iconLtr = "icon-right";
    }
    DoneRequsetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoneRequsetPage');
        if (this.platform.isRTL) {
            this.iconRtl = "icon-right";
            this.iconLtr = "icon-left";
        }
        else {
            this.iconRtl = "icon-left";
            this.iconLtr = "icon-right";
        }
    };
    DoneRequsetPage.prototype.goHome = function () {
        this.navCtrl.push("HomePage");
    };
    DoneRequsetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-done-requset',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/done-requset/done-requset.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'Request\' | translate }}</ion-title>\n    <button class="btn" menuToggle [(ngClass)]=\'iconRtl\'><img src="assets/imgs/menu.png"></button>\n    <button class="btn" (click)="openNoty()" [(ngClass)]=\'iconLtr\'><img src="assets/imgs/bell.png"></button>\n  </ion-navbar>\n\n  <div class="block-body">\n      <div class="body-app shadow">\n        \n          <div class="form-section">\n              <div class="done">\n                  <img src="assets/imgs/done.png">\n                  <p>{{ \'title\' | translate }}</p>\n                  <button class="btn-button brown" (click)="goHome()">{{ \'goHome\' | translate }}</button>\n              </div>\n          </div>\n\n      </div>\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/done-requset/done-requset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]])
    ], DoneRequsetPage);
    return DoneRequsetPage;
}());

//# sourceMappingURL=done-requset.js.map

/***/ })

});
//# sourceMappingURL=22.js.map