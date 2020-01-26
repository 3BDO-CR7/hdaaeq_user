webpackJsonp([10],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
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


var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, event, plt, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.plt = plt;
        this.viewCtrl = viewCtrl;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.initMap();
    };
    MapPage.prototype.initMap = function () {
        var _this = this;
        this.plt.ready().then(function () {
            //get address from lat and lng
            var geocoder = new google.maps.Geocoder();
            var locations = new google.maps.LatLng(localStorage.getItem('hdaaeq_user_default_lat'), localStorage.getItem('hdaaeq_user_default_lng'));
            localStorage.setItem('hdaaeq_user_map_lat', localStorage.getItem('hdaaeq_user_default_lat'));
            localStorage.setItem('hdaaeq_user_map_lng', localStorage.getItem('hdaaeq_user_default_lng'));
            geocoder.geocode({ 'latLng': locations }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var add = results[0].formatted_address;
                    localStorage.setItem('hdaaeq_user_map_address', add);
                    _this.event.publish('hdaaeq_user_address_done');
                }
            });
            //show map
            var crosshairShape = { coords: [0, 0, 0, 0], type: 'rect' }; // floating marker
            var location = new google.maps.LatLng(localStorage.getItem('hdaaeq_user_default_lat'), localStorage.getItem('hdaaeq_user_default_lng'));
            var options = google.maps.MapOptions = {
                center: { lat: 30.0596185, lng: 31.1884236 },
                zoom: 13,
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, options);
            //end of show map
            //marker
            var marker = new google.maps.Marker({
                position: location,
                draggable: true,
                icon: 'assets/imgs/map.png',
                animation: 'DROP',
                shape: crosshairShape
            });
            marker.setMap(_this.map);
            marker.bindTo('position', _this.map, 'center'); // floating marker
            //get lat lng when moveing map
            google.maps.event.addListener(_this.map, 'center_changed', function () {
                var location = _this.map.getCenter();
                localStorage.setItem('hdaaeq_user_map_lat', location.lat());
                localStorage.setItem('hdaaeq_user_map_lng', location.lng());
                //get address from lat and lng
                var geocoder = new google.maps.Geocoder();
                var locations = new google.maps.LatLng(location.lat(), location.lng());
                geocoder.geocode({ 'latLng': locations }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var add = results[0].formatted_address;
                        localStorage.setItem('hdaaeq_user_map_address', add);
                        _this.event.publish('hdaaeq_user_address_done');
                    }
                });
            });
        });
    };
    MapPage.prototype.goDone = function () {
        this.navCtrl.push("DonePage");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'selectlocation\' | translate }}</ion-title>\n  </ion-navbar>\n\n  <div class="block-body">\n      <div class="body-app shadow">\n        <div class="body">\n          <div #map id="map"></div>\n          <button class="btn-button bg-green" (click)="goDone()">{{ \'confirm\' | translate }}</button>\n        </div>\n      </div>\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=10.js.map