webpackJsonp([34],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiProvider = /** @class */ (function () {
    function ApiProvider(event, http) {
        this.event = event;
        this.http = http;
        this.baseUrl = 'http://hadaek.aait-sa.com/api/';
        this.myGlobalVar = [];
    }
    // Api Reigesterion
    ApiProvider.prototype.signUp = function (data) {
        return this.http.post(this.baseUrl + "user-register", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.signIn = function (data) {
        return this.http.post(this.baseUrl + "login", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.codes = function (data) {
        return this.http.post(this.baseUrl + "codes", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.resendCode = function (data) {
        return this.http.post(this.baseUrl + "resendCode", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.verifyCode = function (data) {
        return this.http.post(this.baseUrl + "verify-account", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.sentCode = function (data) {
        return this.http.post(this.baseUrl + "send-code", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.forgetPassword = function (data) {
        return this.http.post(this.baseUrl + "forget-password", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.newPassword = function (data) {
        2;
        return this.http.post(this.baseUrl + "reset_password", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.cities = function (data) {
        return this.http.post(this.baseUrl + "cities", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.countries = function (data) {
        return this.http.get(this.baseUrl + "countries", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.about = function (data) {
        return this.http.post(this.baseUrl + "about", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.contact = function (data) {
        return this.http.get(this.baseUrl + "contact-info", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.profile = function (data) {
        return this.http.post(this.baseUrl + "profile", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.editprofile = function (data) {
        return this.http.post(this.baseUrl + "update-profile", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.editPassword = function (data) {
        return this.http.post(this.baseUrl + "update_password", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.sentMessage = function (data) {
        return this.http.post(this.baseUrl + "contact_us", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.notification = function (data) {
        return this.http.post(this.baseUrl + "notifiactions", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.deleteNotifiaction = function (data) {
        return this.http.post(this.baseUrl + "delete_notifiaction", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.categories = function (data) {
        return this.http.post(this.baseUrl + "categories", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.services = function (data) {
        return this.http.post(this.baseUrl + "services", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.clientfinorders = function (data) {
        return this.http.post(this.baseUrl + "client_finished_orders", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.clientactiveorders = function (data) {
        return this.http.post(this.baseUrl + "client_active_orders", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.clientActiveDetails = function (data) {
        return this.http.post(this.baseUrl + "client_active_order_details", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.clientFinishedDetails = function (data) {
        return this.http.post(this.baseUrl + "client_finished_order_details", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.finishOrder = function (data) {
        return this.http.post(this.baseUrl + "finish_order", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.clientOrderOffers = function (data) {
        return this.http.post(this.baseUrl + "client_order_offers", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.offerprovider = function (data) {
        return this.http.post(this.baseUrl + "offer_provider", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.subservices = function (data) {
        return this.http.post(this.baseUrl + "sub_services", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.new_order = function (data) {
        return this.http.post(this.baseUrl + "new_order", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.add_basket_image = function (data) {
        return this.http.post(this.baseUrl + "add_basket_image", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.get_basket_image = function (data) {
        return this.http.post(this.baseUrl + "get_basket_image", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.delete_basket_image = function (data) {
        return this.http.post(this.baseUrl + "delete_basket_image", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.notifiaction_status = function (data) {
        return this.http.post(this.baseUrl + "notifiaction_status", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.accept_provider_offer = function (data) {
        return this.http.post(this.baseUrl + "accept_provider_offer", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.resend_order = function (data) {
        return this.http.post(this.baseUrl + "resend_order", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.delete_order_cart = function (data) {
        return this.http.post(this.baseUrl + "delete_order_cart", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.get_order_cart = function (data) {
        return this.http.post(this.baseUrl + "get_order_cart", data).map(function (response) { return response; });
    };
    ApiProvider.prototype.edit_order_cart = function (data) {
        return this.http.post(this.baseUrl + "edit_order_cart", data).map(function (response) { return response; });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		829,
		33
	],
	"../pages/basket-detils/basket-detils.module": [
		828,
		32
	],
	"../pages/basket/basket.module": [
		827,
		31
	],
	"../pages/change-lang/change-lang.module": [
		831,
		30
	],
	"../pages/change-password/change-password.module": [
		830,
		29
	],
	"../pages/choose-date/choose-date.module": [
		859,
		28
	],
	"../pages/choose-lang/choose-lang.module": [
		832,
		27
	],
	"../pages/close-code/close-code.module": [
		833,
		26
	],
	"../pages/contact/contact.module": [
		834,
		25
	],
	"../pages/current-orders/current-orders.module": [
		835,
		24
	],
	"../pages/current-requests/current-requests.module": [
		858,
		23
	],
	"../pages/done-requset/done-requset.module": [
		836,
		22
	],
	"../pages/done/done.module": [
		838,
		21
	],
	"../pages/edit-profile/edit-profile.module": [
		837,
		20
	],
	"../pages/finish-orders/finish-orders.module": [
		839,
		19
	],
	"../pages/flower-detils/flower-detils.module": [
		860,
		18
	],
	"../pages/flower-service/flower-service.module": [
		842,
		17
	],
	"../pages/flowers-section/flowers-section.module": [
		840,
		16
	],
	"../pages/forget-password/forget-password.module": [
		841,
		15
	],
	"../pages/home/home.module": [
		843,
		14
	],
	"../pages/location/location.module": [
		844,
		13
	],
	"../pages/login/login.module": [
		846,
		12
	],
	"../pages/maintenance-section/maintenance-section.module": [
		845,
		11
	],
	"../pages/map/map.module": [
		848,
		10
	],
	"../pages/new-password/new-password.module": [
		847,
		9
	],
	"../pages/notification/notification.module": [
		849,
		8
	],
	"../pages/profile/profile.module": [
		851,
		7
	],
	"../pages/provider-data/provider-data.module": [
		850,
		6
	],
	"../pages/quotations/quotations.module": [
		853,
		5
	],
	"../pages/register/register.module": [
		852,
		4
	],
	"../pages/request/request.module": [
		855,
		3
	],
	"../pages/select-location/select-location.module": [
		854,
		2
	],
	"../pages/setting/setting.module": [
		856,
		1
	],
	"../pages/verify-account/verify-account.module": [
		857,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(490);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic3_calendar_en__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_img_viewer__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_gallery_modal__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//Step 1  -->




//Step 2  -->
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_gallery_modal__["c" /* GalleryModalModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/basket/basket.module#BasketPageModule', name: 'BasketPage', segment: 'basket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basket-detils/basket-detils.module#BasketDetilsPageModule', name: 'BasketDetilsPage', segment: 'basket-detils', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-lang/change-lang.module#ChangeLangPageModule', name: 'ChangeLangPage', segment: 'change-lang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-lang/choose-lang.module#ChooseLangPageModule', name: 'ChooseLangPage', segment: 'choose-lang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/close-code/close-code.module#CloseCodePageModule', name: 'CloseCodePage', segment: 'close-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/current-orders/current-orders.module#CurrentOrdersPageModule', name: 'CurrentOrdersPage', segment: 'current-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/done-requset/done-requset.module#DoneRequsetPageModule', name: 'DoneRequsetPage', segment: 'done-requset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/done/done.module#DonePageModule', name: 'DonePage', segment: 'done', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/finish-orders/finish-orders.module#FinishOrdersPageModule', name: 'FinishOrdersPage', segment: 'finish-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flowers-section/flowers-section.module#FlowersSectionPageModule', name: 'FlowersSectionPage', segment: 'flowers-section', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flower-service/flower-service.module#FlowerServicePageModule', name: 'FlowerServicePage', segment: 'flower-service', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintenance-section/maintenance-section.module#MaintenanceSectionPageModule', name: 'MaintenanceSectionPage', segment: 'maintenance-section', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-password/new-password.module#NewPasswordPageModule', name: 'NewPasswordPage', segment: 'new-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider-data/provider-data.module#ProviderDataPageModule', name: 'ProviderDataPage', segment: 'provider-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotations/quotations.module#QuotationsPageModule', name: 'QuotationsPage', segment: 'quotations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-location/select-location.module#SelectLocationPageModule', name: 'SelectLocationPage', segment: 'select-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-account/verify-account.module#VerifyAccountPageModule', name: 'VerifyAccountPage', segment: 'verify-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/current-requests/current-requests.module#CurrentRequestsPageModule', name: 'CurrentRequestsPage', segment: 'current-requests', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-date/choose-date.module#ChooseDatePageModule', name: 'ChooseDatePage', segment: 'choose-date', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flower-detils/flower-detils.module#FlowerDetilsPageModule', name: 'FlowerDetilsPage', segment: 'flower-detils', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                //For Translation Module
                __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8_ionic3_calendar_en__["a" /* CalendarModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__["a" /* Badge */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_9__service_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */],
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//For Translation




var MyApp = /** @class */ (function () {
    function MyApp(statusBar, splashScreen, translate, event, oneSignal, menu, socialSharing, toastCtrl, api, alertCtrl, platform) {
        var _this = this;
        this.translate = translate;
        this.event = event;
        this.oneSignal = oneSignal;
        this.menu = menu;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.rootPage = "ChooseLangPage";
        this.image = 'assets/imgs/image.png';
        this.login_user = 0;
        this.hiden = true;
        if (localStorage.getItem('hdaaeq_user_lang') == 'en') {
            this.platform.setDir('ltr', true);
            this.menu.enable(true, 'left');
            this.menu.swipeEnable(true, "left");
            this.menu.enable(false, 'right');
            this.menu.swipeEnable(false, 'right');
            translate.setDefaultLang('en');
            this.translate.setDefaultLang('en');
            this.translate.use('en');
        }
        else {
            this.platform.setDir('rtl', true);
            this.menu.enable(true, 'right');
            this.menu.swipeEnable(true, 'right');
            this.menu.enable(false, 'left');
            this.menu.swipeEnable(false, "left");
            translate.setDefaultLang('ar');
            this.translate.setDefaultLang('ar');
            this.translate.use('ar');
        }
        platform.ready().then(function () {
            _this.oneSignal.startInit('55c1b945-034e-4997-9160-1bade40d0aa4', '356792094039');
            _this.oneSignal.inFocusDisplaying(2);
            _this.oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
            });
            _this.oneSignal.handleNotificationOpened().subscribe(function () {
                // do something when a notification is opened
            });
            _this.oneSignal.endInit();
            _this.oneSignal.getIds().then(function (id) {
                localStorage.setItem('Hadaaq_DeviceId', JSON.stringify(id.userId));
            });
        });
        if (localStorage.getItem('hdaaeq_user_Data') === null) {
            this.rootPage = 'LoginPage';
        }
        else {
            this.rootPage = 'HomePage';
        }
        if (localStorage.getItem('hdaaeq_user_lang') === null) {
            this.rootPage = 'ChooseLangPage';
        }
        this.loginText = (this.translate.currentLang == 'en') ? 'LogIn' : 'تسجيل الدخول';
        this.logoutText = (this.translate.currentLang == 'en') ? 'LogOut' : 'تسجيل خروج';
        //this.login_user     = 0;
        //this.text           = this.loginText;
        event.subscribe('user_is_in', function (data) {
            _this.login_user = 1;
            _this.text = _this.logoutText;
            _this.name = data.name;
            _this.image = data.image;
        });
        event.subscribe('user_is_out', function (data) {
            _this.login_user = 0;
            _this.text = _this.loginText;
            _this.name = data.name;
            _this.image = data.image;
        });
        // translate.setDefaultLang('ar');
        // translate.setDefaultLang('ar');
        // this.translate.setDefaultLang('ar');
        // this.translate.use('ar');
        // this.event.subscribe('change_lang',()=>{
        //   translate.setDefaultLang('ar');
        //   this.translate.setDefaultLang('ar');
        //   this.translate.use('ar');
        // })
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
        if (this.user != null) {
            this.image = this.user.image;
            this.name = this.user.name;
            this.text = this.logoutText;
        }
        else {
            this.text = this.loginText;
        }
    }
    MyApp.prototype.ionViewWillEnter = function () { };
    MyApp.prototype.goHome = function () {
        this.navCtrl.push("HomePage");
    };
    MyApp.prototype.goRequest = function () {
        var _this = this;
        var message = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
        var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        if (localStorage.getItem('hdaaeq_user_Data')) {
            this.navCtrl.push("RequestPage");
        }
        else {
            var confirm_1 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.navCtrl.push("LoginPage");
                        }
                    },
                    {
                        text: cansel,
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    MyApp.prototype.goClosed = function () {
        var _this = this;
        var message = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
        var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        if (localStorage.getItem('hdaaeq_user_Data')) {
            this.navCtrl.push("ClosedOrdersPage");
        }
        else {
            var confirm_2 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.navCtrl.push("LoginPage");
                        }
                    },
                    {
                        text: cansel,
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_2.present();
        }
    };
    MyApp.prototype.goAbout = function () {
        this.navCtrl.push("AboutPage");
    };
    MyApp.prototype.goShare = function () {
        this.socialSharing.shareWithOptions({
            message: "How Have U been"
        }).then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    MyApp.prototype.goContact = function () {
        this.navCtrl.push("ContactPage");
    };
    MyApp.prototype.goSetting = function () {
        this.navCtrl.push("SettingPage");
    };
    MyApp.prototype.goLogIn = function () {
        var _this = this;
        if (localStorage.getItem('hdaaeq_user_Data') == null || localStorage.getItem('hdaaeq_user_Data') == undefined) {
            this.navCtrl.push("LoginPage");
        }
        else {
            var message = (this.translate.currentLang == 'en') ? 'Do you want to exit the application ?' : 'هل تريد الخروج من التطبيق ؟';
            var cansel = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
            var ok = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
            var confirm_3 = this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: ok,
                        handler: function () {
                            _this.event.publish('user_is_out', { name: '', image: 'assets/imgs/image.png' });
                            localStorage.removeItem('hdaaeq_user_Data');
                            localStorage.removeItem('hdaaeq_user_Data_register');
                            _this.navCtrl.push("LoginPage");
                            // this.event.publish('user_logout');
                        }
                    },
                    {
                        text: cansel,
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_3.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/sh3wza/hdaeq-master/src/app/app.html"*/'<div class="site-mune">\n    \n    <ion-menu id="right" [content]="content" side="right" type="overlay">\n        <ion-content>\n\n            <img src="assets/imgs/top.png" class="img top">\n            <img src="assets/imgs/down.png" class="img down">\n\n            <div class="header">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-12>\n                            <img src="{{image}}" class="animated swing">\n                            <h3>{{name}}</h3>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n\n            <button *ngIf="hiden" class="active" (click)="goHome()" menuClose>\n                {{ \'home\' | translate }}\n            </button>\n            <button (click)="goRequest()" menuClose>\n                {{ \'requests\' | translate }}\n            </button>\n            <button (click)="goAbout()" menuClose>\n                {{ \'AboutApp\' | translate }}\n            </button>\n            <button (click)="goShare()" menuClose>\n                {{ \'shareapp\' | translate }}\n            </button>\n            <button (click)="goContact()" menuClose>\n                {{ \'contact\' | translate }}\n            </button>\n            <button (click)="goSetting()" menuClose>\n                {{ \'setting\' | translate }}\n            </button>\n            <div *ngIf="login_user == 1">\n                <button (click)="goLogIn()" menuClose>\n                    {{ text }}\n                </button>\n            </div>\n            <div *ngIf="login_user == 0">\n                <button (click)="goLogIn()" menuClose>\n                    {{ text }}\n                </button>\n            </div>           \n\n            \n        </ion-content>\n    </ion-menu>\n\n    <ion-menu id="left" [content]="content" side="left" type="overlay">\n        <ion-content>\n\n            <img src="assets/imgs/top.png" class="img top">\n            <img src="assets/imgs/down.png" class="img down">\n\n            <div class="header">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-12>\n                            <img src="{{image}}" class="animated swing">\n                            <h3>{{name}}</h3>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n\n            <button *ngIf="hiden" class="active" (click)="goHome()" menuClose>\n                {{ \'home\' | translate }}\n            </button>\n            <button (click)="goRequest()" menuClose>\n                {{ \'requests\' | translate }}\n            </button>\n            <button (click)="goAbout()" menuClose>\n                {{ \'AboutApp\' | translate }}\n            </button>\n            <button (click)="goShare()" menuClose>\n                {{ \'shareapp\' | translate }}\n            </button>\n            <button (click)="goContact()" menuClose>\n                {{ \'contact\' | translate }}\n            </button>\n            <button (click)="goSetting()" menuClose>\n                {{ \'setting\' | translate }}\n            </button>\n            <div *ngIf="login_user == 1">\n                <button (click)="goLogIn()" menuClose>\n                    {{ text }}\n                </button>\n            </div>\n            <div *ngIf="login_user == 0">\n                <button (click)="goLogIn()" menuClose>\n                    {{ text }}\n                </button>\n            </div>\n        </ion-content>\n    </ion-menu>\n\n</div>\n    \n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n    '/*ion-inline-end:"/sh3wza/hdaeq-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__service_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 354,
	"./af.js": 354,
	"./ar": 355,
	"./ar-dz": 356,
	"./ar-dz.js": 356,
	"./ar-kw": 357,
	"./ar-kw.js": 357,
	"./ar-ly": 358,
	"./ar-ly.js": 358,
	"./ar-ma": 359,
	"./ar-ma.js": 359,
	"./ar-sa": 360,
	"./ar-sa.js": 360,
	"./ar-tn": 361,
	"./ar-tn.js": 361,
	"./ar.js": 355,
	"./az": 362,
	"./az.js": 362,
	"./be": 363,
	"./be.js": 363,
	"./bg": 364,
	"./bg.js": 364,
	"./bm": 365,
	"./bm.js": 365,
	"./bn": 366,
	"./bn.js": 366,
	"./bo": 367,
	"./bo.js": 367,
	"./br": 368,
	"./br.js": 368,
	"./bs": 369,
	"./bs.js": 369,
	"./ca": 370,
	"./ca.js": 370,
	"./cs": 371,
	"./cs.js": 371,
	"./cv": 372,
	"./cv.js": 372,
	"./cy": 373,
	"./cy.js": 373,
	"./da": 374,
	"./da.js": 374,
	"./de": 375,
	"./de-at": 376,
	"./de-at.js": 376,
	"./de-ch": 377,
	"./de-ch.js": 377,
	"./de.js": 375,
	"./dv": 378,
	"./dv.js": 378,
	"./el": 379,
	"./el.js": 379,
	"./en-SG": 380,
	"./en-SG.js": 380,
	"./en-au": 381,
	"./en-au.js": 381,
	"./en-ca": 382,
	"./en-ca.js": 382,
	"./en-gb": 383,
	"./en-gb.js": 383,
	"./en-ie": 384,
	"./en-ie.js": 384,
	"./en-il": 385,
	"./en-il.js": 385,
	"./en-nz": 386,
	"./en-nz.js": 386,
	"./eo": 387,
	"./eo.js": 387,
	"./es": 388,
	"./es-do": 389,
	"./es-do.js": 389,
	"./es-us": 390,
	"./es-us.js": 390,
	"./es.js": 388,
	"./et": 391,
	"./et.js": 391,
	"./eu": 392,
	"./eu.js": 392,
	"./fa": 393,
	"./fa.js": 393,
	"./fi": 394,
	"./fi.js": 394,
	"./fo": 395,
	"./fo.js": 395,
	"./fr": 396,
	"./fr-ca": 397,
	"./fr-ca.js": 397,
	"./fr-ch": 398,
	"./fr-ch.js": 398,
	"./fr.js": 396,
	"./fy": 399,
	"./fy.js": 399,
	"./ga": 400,
	"./ga.js": 400,
	"./gd": 401,
	"./gd.js": 401,
	"./gl": 402,
	"./gl.js": 402,
	"./gom-latn": 403,
	"./gom-latn.js": 403,
	"./gu": 404,
	"./gu.js": 404,
	"./he": 405,
	"./he.js": 405,
	"./hi": 406,
	"./hi.js": 406,
	"./hr": 407,
	"./hr.js": 407,
	"./hu": 408,
	"./hu.js": 408,
	"./hy-am": 409,
	"./hy-am.js": 409,
	"./id": 410,
	"./id.js": 410,
	"./is": 411,
	"./is.js": 411,
	"./it": 412,
	"./it-ch": 413,
	"./it-ch.js": 413,
	"./it.js": 412,
	"./ja": 414,
	"./ja.js": 414,
	"./jv": 415,
	"./jv.js": 415,
	"./ka": 416,
	"./ka.js": 416,
	"./kk": 417,
	"./kk.js": 417,
	"./km": 418,
	"./km.js": 418,
	"./kn": 419,
	"./kn.js": 419,
	"./ko": 420,
	"./ko.js": 420,
	"./ku": 421,
	"./ku.js": 421,
	"./ky": 422,
	"./ky.js": 422,
	"./lb": 423,
	"./lb.js": 423,
	"./lo": 424,
	"./lo.js": 424,
	"./lt": 425,
	"./lt.js": 425,
	"./lv": 426,
	"./lv.js": 426,
	"./me": 427,
	"./me.js": 427,
	"./mi": 428,
	"./mi.js": 428,
	"./mk": 429,
	"./mk.js": 429,
	"./ml": 430,
	"./ml.js": 430,
	"./mn": 431,
	"./mn.js": 431,
	"./mr": 432,
	"./mr.js": 432,
	"./ms": 433,
	"./ms-my": 434,
	"./ms-my.js": 434,
	"./ms.js": 433,
	"./mt": 435,
	"./mt.js": 435,
	"./my": 436,
	"./my.js": 436,
	"./nb": 437,
	"./nb.js": 437,
	"./ne": 438,
	"./ne.js": 438,
	"./nl": 439,
	"./nl-be": 440,
	"./nl-be.js": 440,
	"./nl.js": 439,
	"./nn": 441,
	"./nn.js": 441,
	"./pa-in": 442,
	"./pa-in.js": 442,
	"./pl": 443,
	"./pl.js": 443,
	"./pt": 444,
	"./pt-br": 445,
	"./pt-br.js": 445,
	"./pt.js": 444,
	"./ro": 446,
	"./ro.js": 446,
	"./ru": 447,
	"./ru.js": 447,
	"./sd": 448,
	"./sd.js": 448,
	"./se": 449,
	"./se.js": 449,
	"./si": 450,
	"./si.js": 450,
	"./sk": 451,
	"./sk.js": 451,
	"./sl": 452,
	"./sl.js": 452,
	"./sq": 453,
	"./sq.js": 453,
	"./sr": 454,
	"./sr-cyrl": 455,
	"./sr-cyrl.js": 455,
	"./sr.js": 454,
	"./ss": 456,
	"./ss.js": 456,
	"./sv": 457,
	"./sv.js": 457,
	"./sw": 458,
	"./sw.js": 458,
	"./ta": 459,
	"./ta.js": 459,
	"./te": 460,
	"./te.js": 460,
	"./tet": 461,
	"./tet.js": 461,
	"./tg": 462,
	"./tg.js": 462,
	"./th": 463,
	"./th.js": 463,
	"./tl-ph": 464,
	"./tl-ph.js": 464,
	"./tlh": 465,
	"./tlh.js": 465,
	"./tr": 466,
	"./tr.js": 466,
	"./tzl": 467,
	"./tzl.js": 467,
	"./tzm": 468,
	"./tzm-latn": 469,
	"./tzm-latn.js": 469,
	"./tzm.js": 468,
	"./ug-cn": 470,
	"./ug-cn.js": 470,
	"./uk": 471,
	"./uk.js": 471,
	"./ur": 472,
	"./ur.js": 472,
	"./uz": 473,
	"./uz-latn": 474,
	"./uz-latn.js": 474,
	"./uz.js": 473,
	"./vi": 475,
	"./vi.js": 475,
	"./x-pseudo": 476,
	"./x-pseudo.js": 476,
	"./yo": 477,
	"./yo.js": 477,
	"./zh-cn": 478,
	"./zh-cn.js": 478,
	"./zh-hk": 479,
	"./zh-hk.js": 479,
	"./zh-tw": 480,
	"./zh-tw.js": 480
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 821;

/***/ })

},[485]);
//# sourceMappingURL=main.js.map