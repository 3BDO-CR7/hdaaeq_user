import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Events, MenuController, LoadingController, AlertController  } from 'ionic-angular';

import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-change-lang',
  templateUrl: 'change-lang.html',
})
export class ChangeLangPage {
  lang : "ar";
  constructor(
    public navCtrl          : NavController, 
    public navParams        : NavParams,
    public platform         : Platform,
    public translate        : TranslateService,
    public event            : Events,
    public menu             : MenuController,
    public loadingCtrl      : LoadingController,
    public alertCtrl        : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeLangPage');
  }

  onChange() {

    if(this.lang == "ar"){
      this.platform.setDir('rtl',true);
      localStorage.setItem('hdaaeq_user_lang',this.lang )
      this.translate.setDefaultLang(this.lang );

      this.menu.enable(true, 'right');
      this.menu.swipeEnable(true, 'right');
      this.menu.enable(false, 'left');
      this.menu.swipeEnable(false, "left"); 

      this.translate.use(this.lang );
      this.event.publish('change_lang');
      this.translate.setDefaultLang("ar");
      this.translate.use("ar");
      localStorage.setItem('hdaaeq_user_lang',this.lang)
    }else{
      this.platform.setDir('ltr',true);
      localStorage.setItem('hdaaeq_user_lang',this.lang );

      this.menu.enable(true, 'left');
      this.menu.swipeEnable(true, "left"); 
      this.menu.enable(false, 'right');
      this.menu.swipeEnable(false, 'right');

      this.translate.setDefaultLang(this.lang );
      this.translate.use(this.lang );
      this.event.publish('change_lang');
      this.translate.setDefaultLang("en");
      this.translate.use("en");
      localStorage.setItem('hdaaeq_user_lang',this.lang)
    }

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });

    loading.present();

    setTimeout(() => {
        loading.present();
        location.reload();
    }, 200);
    loading.dismissAll()
    this.navCtrl.setRoot('HomePage');

  }

}
