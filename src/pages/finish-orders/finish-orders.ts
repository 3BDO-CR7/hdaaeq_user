import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-finish-orders',
  templateUrl: 'finish-orders.html',
})
export class FinishOrdersPage {

  data;
  images      = [];
  serves      = [];
  up_serves   = [];
  sup_serves  = [];
  arr_order   = [];
  id;

  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public loadingCtrl  : LoadingController,
    public api          : ApiProvider,
    public toastCtrl    : ToastController,
    private translate   : TranslateService,
    public alertCtrl    : AlertController) {

      this.id = this.navParams.get('id');

      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: '<img src="assets/imgs/logo.png">'
      });
      loading.present();
      this.api.clientFinishedDetails({
        order_id    : this.id , 
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
          const toast = this.toastCtrl.create({
          message: response.message,
          duration: 3000
          });
          toast.present();
          this.data              = response.data;
          this.images            = response.data.images;
          this.arr_order         = response.data.carts;
          this.serves            = response.data.services;
          this.up_serves         = response.data.services;
        },
        error => {
          loading.dismiss();
        },
        () => {
          loading.dismiss();
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishOrdersPage');
  }

  goFading(id, e) {

    var els = document.querySelectorAll('.view-section')
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('fading');
    }

    let element = document.getElementById(`second-${id}`);

    if (element.getAttribute('value') == 'active') {
      element.classList.remove('fading');
      element.setAttribute('value', '');
    } else {
      element.setAttribute('value', 'active');
      element.classList.add('fading');
    }
  }

}
