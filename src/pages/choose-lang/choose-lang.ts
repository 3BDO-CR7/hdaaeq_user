import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform, MenuController, LoadingController } from 'ionic-angular';

import {TranslateService} from "@ngx-translate/core";
import { OneSignal } from '@ionic-native/onesignal';

@IonicPage()
@Component({
  selector: 'page-choose-lang',
  templateUrl: 'choose-lang.html',
})
export class ChooseLangPage {

  constructor(
    public navCtrl          : NavController, 
    public navParams        : NavParams,
    private translate       : TranslateService,
    public platform         : Platform,
    public event            : Events,
    public menu             : MenuController,
    public loadingCtrl      : LoadingController,
    private oneSignal       : OneSignal) {


    this.oneSignal.startInit('55c1b945-034e-4997-9160-1bade40d0aa4', '356792094039');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseLangPage');
  }

  goLogin(lang){
    if(lang == 'en')
    {
      this.platform.setDir('ltr',true)

      this.menu.enable(true, 'left');
      this.menu.swipeEnable(true, "left"); 
      this.menu.enable(false, 'right');
      this.menu.swipeEnable(false, 'right');

      localStorage.setItem('hdaaeq_user_lang',lang)
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      this.event.publish('change_lang');
    }else{
      this.platform.setDir('rtl',true);

      this.menu.enable(true, 'right');
      this.menu.swipeEnable(true, 'right');
      this.menu.enable(false, 'left');
      this.menu.swipeEnable(false, "left"); 

      localStorage.setItem('hdaaeq_user_lang',lang)
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      this.event.publish('change_lang');
    }
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });

    loading.present();

    setTimeout(() => {
        loading.dismiss();
    }, 500);
    this.navCtrl.setRoot('LoginPage')
    loading.dismissAll()
  }

}
