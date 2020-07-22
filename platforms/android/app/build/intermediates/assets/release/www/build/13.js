webpackJsonp([13],{

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], LocationPageModule);
    return LocationPageModule;
}());

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationPage = /** @class */ (function () {
    function LocationPage(navCtrl, navParams, event, plt, viewCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.plt = plt;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.model = { city: "" };
        this.latout = 24.774265;
        this.lngout = 46.738586;
    }
    LocationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        localStorage.setItem('hdaaeq_map_user_lat', this.latout);
        localStorage.setItem('hdaaeq_map_user_lng', this.lngout);
        this.geolocation.getCurrentPosition().then(function (resp) {
            setTimeout(function () {
                _this.initMap();
            }, 2000);
            _this.latout = resp.coords.latitude;
            _this.lngout = resp.coords.longitude;
        }).catch(function (error) {
            _this.initMap();
        });
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        if (this.user == null) {
            this.lat = this.latout;
            this.lng = this.lngout;
        }
        else {
            this.lat = JSON.parse(localStorage.getItem("hdaaeq_map_user_lat"));
            this.lng = JSON.parse(localStorage.getItem("hdaaeq_map_user_lng"));
        }
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
        this.initMap();
    };
    LocationPage.prototype.initMap = function () {
        var uluru = { lat: this.latout, lng: this.lngout };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: uluru,
            mapTypeId: google.maps.MapTypeId.roadmap, scaleControl: true,
        });
        var input = document.getElementById('search');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var contentString = '<div id="content">' +
            '<p></p>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var image = 'assets/imgs/map.png';
        var marker = new google.maps.Marker({
            position: { lat: this.latout, lng: this.lngout },
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: 'Hello site',
            icon: image,
            label: {
                color: 'white',
                fontSize: '12px'
            }
        });
        var google_maps_geocoder = new google.maps.Geocoder();
        google_maps_geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
            if (results[0]) {
                var add = results[0].formatted_address;
                localStorage.setItem('hdaaeq_map_user_address', JSON.stringify(add));
            }
        });
        var geocoder = new google.maps.Geocoder();
        google.maps.event.addListener(marker, 'dragend', function () {
            geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var add = results[0].formatted_address;
                        localStorage.setItem('hdaaeq_map_user_address', JSON.stringify(add));
                        infowindow.setContent(results[0].formatted_address);
                        infowindow.open(map, marker);
                    }
                }
            }.bind(this));
        }.bind(this));
    };
    LocationPage.prototype.dismiss = function () {
        var data = this.model.city;
        this.viewCtrl.dismiss(data);
        console.log(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/location/location.html"*/'\n  <ion-header>\n\n      <ion-navbar>\n        <ion-title>{{ \'selectlocation\' | translate }}</ion-title>\n      </ion-navbar>\n    </ion-header>\n  \n  <ion-content>\n  \n    <div class="body">\n      <div #map id="map"></div>\n      <button class="btn-button bg-green" (click)="dismiss()">{{ \'confirm\' | translate }}</button>\n    </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/location/location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ })

});
//# sourceMappingURL=13.js.map