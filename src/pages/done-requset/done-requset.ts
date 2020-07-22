import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';


import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-done-requset',
  templateUrl: 'done-requset.html',
})
export class DoneRequsetPage {

  iconRtl     = "icon-right";
  iconLtr     = "icon-right";

  data;

  constructor(
      public navCtrl        : NavController,
      public navParams      : NavParams,
      private translate     : TranslateService,
      public loadingCtrl    : LoadingController,
      public api            : ApiProvider,
      public alertCtrl      : AlertController,
      public platform        : Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoneRequsetPage');
    if (this.platform.isRTL) {
      this.iconRtl      = "icon-right";
      this.iconLtr      = "icon-left";
    } else {
      this.iconRtl      = "icon-left";
      this.iconLtr      = "icon-right";
    }
  }

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.priceOffer({lang : this.translate.currentLang}).subscribe(
        response => {
          var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
          var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل';
          if (response.key == "3") {
            const confirm = this.alertCtrl.create({
              message: message,
              buttons: [
                {
                  text: Done,
                  cssClass: 'BtnCss',
                  handler: () => {
                    this.navCtrl.push("LoginPage");
                  }
                },
              ]
            });
            confirm.present();
          }
          this.data = response.data;
          console.log('info', response.data)
        },
        error => {
          loading.dismiss();
        },
        () => {
          loading.dismiss();
        });
  }

  goHome(){
    this.navCtrl.push("HomePage");
  }

}
