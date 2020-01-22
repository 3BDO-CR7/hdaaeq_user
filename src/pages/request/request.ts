import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { ApiProvider} from "../../service/api/api";
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  pet             = "Current-Orders";
  iconRtl         = "icon-right";
  iconLtr         = "icon-right";
  iconCart        = "icon-cart-Ltr";
  orders          : any;
  activeorders    : any;
  user;
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
      this.activeorders   = [] ;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
    if (this.platform.isRTL) {
      this.iconRtl="icon-right";
      this.iconLtr="icon-left";
      this.iconCart="icon-cart-Ltr";
    } else {
      this.iconRtl="icon-left";
      this.iconLtr="icon-right";
      this.iconCart="icon-cart-Rtl";
    }

    this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
    this.currentOrder();

  }

  currentOrder(){

      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: '<img src="assets/imgs/logo.png">'
      });
      loading.present();
      
      this.api.clientactiveorders({
        user_id     : this.user.id,
        lang        : this.translate.currentLang
      }).subscribe(
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

          this.orders = response.data;

        },
        error => {
          loading.dismiss();
        },
        () => {
          loading.dismiss();
      });

  }

  finishOrder(){

      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: '<img src="assets/imgs/logo.png">'
      });
      loading.present();

      this.api.clientfinorders({
        user_id     : this.user.id,
        lang        : this.translate.currentLang}).subscribe(
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

          this.activeorders = response.data;

        },
        error => {
          loading.dismiss();
        },
        () => {
          loading.dismiss();
      });

  }

  goCurrentOrders(id, type){
    if(type == 0){
      this.navCtrl.push("CurrentRequestsPage",{'id':id});
      localStorage.setItem('hdaaeq_order_id_offer', id)
    }else if(type == 1){
      this.navCtrl.push("CurrentOrdersPage",{'id':id});
    }
    console.log(id)
  }
  
  goFinishOrder(id){
    this.navCtrl.push("FinishOrdersPage",{'id':id});
  }



}
