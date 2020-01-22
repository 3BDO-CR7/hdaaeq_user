import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OneSignal } from '@ionic-native/onesignal';

import { MyApp } from './app.component';

import { SocialSharing } from '@ionic-native/social-sharing';
import { CalendarModule } from 'ionic3-calendar-en';
import { ApiProvider } from "../service/api/api";
import { Badge } from '@ionic-native/badge';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { Geolocation } from '@ionic-native/geolocation';
//Step 1  -->
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Camera } from '@ionic-native/camera';
//Step 2  -->
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    ionicGalleryModal.GalleryModalModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot(),
      HttpClientModule,
      //For Translation Module
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
          }
      }),
      CalendarModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    OneSignal,
    SplashScreen,
    Badge,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing,
    ApiProvider,
    Camera,
    Geolocation,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
  ]
})
export class AppModule {}
