import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-provider-data',
  templateUrl: 'provider-data.html',
})
export class ProviderDataPage {

  data;
  offer_id;

  constructor(
    public navCtrl        : NavController, 
    public navParams      : NavParams,
    public loadingCtrl    : LoadingController,
    public api            : ApiProvider,
    public toastCtrl      : ToastController,
    private translate     : TranslateService,
    public alertCtrl      : AlertController) {

      this.offer_id       = this.navParams.get('id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderDataPage');
  }

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.offerprovider({
      offer_id    : this.offer_id,
      lang        : this.translate.currentLang
    }).subscribe(
      response => {
        var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
        var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل'
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
      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
    });
  }

  goComplete(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();
    this.api.accept_provider_offer({offer_id : this.offer_id , lang : this.translate.currentLang}).subscribe(
      response => {
        if(response.key == "3"){
          this.navCtrl.push("LoginPage");
        }
        const toast = this.toastCtrl.create({
        message: response.message,
        duration: 3000
        });
        toast.present();
        this.navCtrl.push("DoneRequsetPage")
      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
    });
  }

  goQuotations(){
    this.navCtrl.push("QuotationsPage");
  }

}
