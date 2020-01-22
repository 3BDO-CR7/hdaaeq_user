import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-quotations',
  templateUrl: 'quotations.html',
})
export class QuotationsPage {
  iconRtl   = "icon-right";
  iconLtr   = "icon-right";
  icon_RTl  = "icon_RTl";
  BgDete    = false;
  Date;
  id;
  id_order;
  data;
  orders : any;
  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public platform     : Platform,
    public loadingCtrl  : LoadingController,
    public api          : ApiProvider,
    public toastCtrl    : ToastController,
    private translate   : TranslateService,
    public alertCtrl    : AlertController) {
      
      this.orders         = [] ;

      this.id         =   this.navParams.get('id');
      this.data       =   this.navParams.get('date');
      this.id_order   =   JSON.parse(localStorage.getItem('hdaaeq_order_id_offer'));

      console.log(this.id);
      console.log(this.data);
      console.log(this.id_order);

      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: '<img src="assets/imgs/logo.png">'
      });
      loading.present();
      this.api.clientOrderOffers({
        order_id    : this.id_order ,
        lang        : this.translate.currentLang
      }).subscribe(
        response => {
          var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
          var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل'
          if(response.key == "1"){
            this.BgDete = true
          }else if (response.key == "3") {
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
          else{
            this.BgDete = false
          }
          const toast = this.toastCtrl.create({
          message: response.message,
          duration: 3000
          });
          toast.present();
          this.data    = response.data 
          this.orders  = response.data.offers;
        },
        error => {
          loading.dismiss();
        },
        () => {
          loading.dismiss();
     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotationsPage');
    if (this.platform.isRTL) {
      this.iconRtl    = "icon-right";
      this.iconLtr    = "icon-left";
      this.icon_RTl   = "icon_RTl";
    } else {
      this.iconRtl    = "icon-left";
      this.iconLtr    = "icon-right";
      this.icon_RTl   = "icon_Ltr";
    }
  }

  goData(id){
    this.navCtrl.push("ProviderDataPage" , {id : id})
  }

  clickfilter(filter){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();
    this.api.clientOrderOffers({
      filter      : filter , 
      order_id    : this.id_order , 
      lang        : this.translate.currentLang
    }).subscribe(
      response => {
      if(response.key == "3"){
        this.navCtrl.push("LoginPage");
      }
      const toast = this.toastCtrl.create({
      message: response.message,
      duration: 3000
      });
      toast.present();
      this.orders  = response.data.offers;
      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
   });
  }

  resentRequest(id){

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.resend_order({order_id : this.id_order}).subscribe(
    response => {

      const toast = this.toastCtrl.create({
        message: response.message,
        duration: 3000
        });
      toast.present();

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
    },
    error => {
      loading.dismiss();
    },
    () => {
      loading.dismiss();
    });

  }


}
