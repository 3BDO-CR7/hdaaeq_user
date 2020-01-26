webpackJsonp([2],{

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPageModule", function() { return SelectLocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_location__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectLocationPageModule = /** @class */ (function () {
    function SelectLocationPageModule() {
    }
    SelectLocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_location__["a" /* SelectLocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_location__["a" /* SelectLocationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], SelectLocationPageModule);
    return SelectLocationPageModule;
}());

//# sourceMappingURL=select-location.module.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLocationPage; });
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




var SelectLocationPage = /** @class */ (function () {
    function SelectLocationPage(navCtrl, navParams, event, plt, viewCtrl, translate, api, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.plt = plt;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.model = { address: "", lang: "", lat: "", lng: "", user_id: "" };
    }
    SelectLocationPage.prototype.ionViewDidLoad = function () {
        this.user_id = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        this.model.user_id = this.user_id.id;
        this.model.lang = this.translate.currentLang;
        this.initMap();
        this.lating = JSON.parse(localStorage.getItem('hdaaeq_map_user_lat'));
        this.luging = JSON.parse(localStorage.getItem('hdaaeq_map_user_lng'));
    };
    // initMap(){
    //   this.plt.ready().then(() => {
    //       //get address from lat and lng
    //       var geocoder  = new google.maps.Geocoder();            
    //       var locations  = new google.maps.LatLng(localStorage.getItem('hdaaeq_map_user_lat'),
    //       localStorage.getItem('hdaaeq_map_user_lng'));
    //       localStorage.setItem('hdaaeq_user_map_lat',localStorage.getItem('hdaaeq_map_user_lat'))
    //       localStorage.setItem('hdaaeq_user_map_lng',localStorage.getItem('hdaaeq_map_user_lng'))
    //       geocoder.geocode({'latLng': locations}, (results, status) =>{
    //         if(status == google.maps.GeocoderStatus.OK) {
    //           var add=results[0].formatted_address;
    //           localStorage.setItem('hdaaeq_map_user_address',add)
    //           this.event.publish('hdaaeq_user_address_done')
    //         }
    //       });
    //       this.model.city = localStorage.getItem('hdaaeq_map_user_address')
    //       //show map
    //       var crosshairShape = {coords:[0,0,0,0],type:'rect'};
    //       const location = new google.maps.LatLng(localStorage.getItem('hdaaeq_map_user_lat'),
    //       localStorage.getItem('hdaaeq_map_user_lng'));
    //       const options = google.maps.MapOptions = {
    //         center: {lat: 30.0596185, lng: 31.1884236},
    //         zoom: 13,
    //       }
    //       this.map = new google.maps.Map(this.mapElement.nativeElement,options);
    //       //end of show map
    //       //marker
    //       var marker = new google.maps.Marker({
    //         position: location,
    //         draggable: true,
    //         icon: 'assets/imgs/map.png',
    //         animation: 'DROP',
    //         shape: crosshairShape
    //       });
    //       marker.setMap(this.map);
    //       marker.bindTo('position', this.map, 'center'); // floating marker
    //         //get lat lng when moveing map
    //         google.maps.event.addListener(this.map, 'center_changed', () => {
    //         var location = this.map.getCenter();
    //         this.model.lat = location.lat();
    //         this.model.lng = location.lng();
    //         //get address from lat and lng
    //         var geocoder  = new google.maps.Geocoder();            
    //         var locations  = new google.maps.LatLng(location.lat(), location.lng());
    //         geocoder.geocode({'latLng': locations}, (results, status)=> {
    //           if(status == google.maps.GeocoderStatus.OK) {         
    //             var add=results[0].formatted_address;
    //             this.model.address = add;
    //             this.event.publish('hdaaeq_user_address_done')
    //           }
    //         })
    //       });
    //   })
    // }
    SelectLocationPage.prototype.initMap = function () {
        var uluru = { lat: this.lating, lng: this.luging };
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
            position: { lat: this.lating, lng: this.luging },
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
                localStorage.setItem('hdaaeq_map_Provider_address', JSON.stringify(add));
            }
        });
        var geocoder = new google.maps.Geocoder();
        google.maps.event.addListener(marker, 'dragend', function () {
            geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var add = results[0].formatted_address;
                        localStorage.setItem('hdaaeq_map_Provider_address', JSON.stringify(add));
                        infowindow.setContent(results[0].formatted_address);
                        infowindow.open(map, marker);
                    }
                }
            }.bind(this));
        }.bind(this));
    };
    SelectLocationPage.prototype.dismiss = function () {
        var _this = this;
        this.api.editprofile(this.model).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: response.message,
                duration: 3000
            });
            toast.present();
            if (response.key == "1") {
                // localStorage.setItem('hdaaeq_user_Data',JSON.stringify(response.data));
                _this.navCtrl.push("EditProfilePage");
            }
            else if (response.key == "3") {
                _this.navCtrl.push("LoginPage");
            }
        }, function (error) {
            // loading.dismiss();
        }, function () {
            // loading.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], SelectLocationPage.prototype, "mapElement", void 0);
    SelectLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-location',template:/*ion-inline-start:"/sh3wza/hdaaeq_user/src/pages/select-location/select-location.html"*/'\n  <ion-header>\n\n      <ion-navbar>\n        <ion-title>{{ \'selectlocation\' | translate }}</ion-title>\n      </ion-navbar>\n    </ion-header>\n  \n  <ion-content>\n  \n    <div class="body">\n      <div #map id="map"></div>\n      <button [disabled]="model.lat ==\'\' || model.lng == \'\' " class="btn-button bg-green" (click)="dismiss()">{{ \'confirm\' | translate }}</button>\n    </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"/sh3wza/hdaaeq_user/src/pages/select-location/select-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], SelectLocationPage);
    return SelectLocationPage;
}());

//# sourceMappingURL=select-location.js.map

/***/ })

});
//# sourceMappingURL=2.js.map