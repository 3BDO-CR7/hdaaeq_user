import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { ApiProvider } from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  categor       : any;
  iconRtl       = "icon-right";
  iconLtr       = "icon-right";
  iconBasket    = "icon-cart-Rtl";
  user;
  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public platform       : Platform,
    private translate     : TranslateService,
    public alertCtrl      : AlertController,
    public loadingCtrl    : LoadingController,
    public api            : ApiProvider) {

    this.categor = [];

  }

  ionViewDidLoad() {
    if (this.platform.isRTL) {
      this.iconRtl      = "icon-right";
      this.iconLtr      = "icon-left";
      this.iconBasket   = "icon-cart-Ltr";
    } else {
      this.iconRtl      = "icon-left";
      this.iconLtr      = "icon-right";
      this.iconBasket   = "icon-cart-Rtl";
    }
  }

  ionViewWillEnter() {
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.categories({ lang: this.translate.currentLang }).subscribe(
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
      this.categor = response.data;
      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
      });

  }

  openNoty() {
    var message   = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
    var cansel    = (this.translate.currentLang == 'en') ? 'cansel'                 : 'إلغاء';
    var ok        = (this.translate.currentLang == 'en') ? 'ok'                     : 'موافق';
    if (localStorage.getItem('hdaaeq_user_Data')) {
      this.navCtrl.push("NotificationPage");
    } else {
      const confirm = this.alertCtrl.create({
        message: message,
        buttons: [
          {
            text: ok,
            handler: () => {
              this.navCtrl.push("LoginPage");
            }
          },
          {
            text: cansel,
            handler: () => {

            }
          }
        ]
      });
      confirm.present();
    }
  }

  openBasket() {

    var disc      = (this.translate.currentLang == 'en') ? 'You must add the services first ?'    : 'يجب عليك إضافة الخدمات أولاً ؟';
    var title     = (this.translate.currentLang == 'en') ? 'The basket is empty'                  : 'السلة فارغة';
    var done      = (this.translate.currentLang == 'en') ? 'ok'                                   : 'موافق';

    var message   = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
    var cansel    = (this.translate.currentLang == 'en') ? 'cansel'                 : 'إلغاء';
    var ok        = (this.translate.currentLang == 'en') ? 'ok'                     : 'موافق';

    if (localStorage.getItem('hdaaeq_user_Data')) {
      if(JSON.parse(localStorage.getItem('Hdaaeq_Orders')) == undefined || JSON.parse(localStorage.getItem('Hdaaeq_Orders')) == null){
        let alert = this.alertCtrl.create({
          title: title,
          message: disc,
          buttons: [
            {
              text: done,
              handler: () => {
                this.navCtrl.push("HomePage");
              }
            }
          ]
        });
        alert.present();
      }else{
        this.navCtrl.push("BasketPage");
      }
    } else {
      const confirm = this.alertCtrl.create({
        message: message,
        buttons: [
          {
            text: ok,
            handler: () => {
              this.navCtrl.push("LoginPage");
            }
          },
          {
            text: cansel,
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
  }

  goCategories(id, name, image) {

    this.user    = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
    
    if(this.user == null || this.user == undefined){
      var message   = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
      var cansel    = (this.translate.currentLang == 'en') ? 'cansel'                 : 'إلغاء';
      var ok        = (this.translate.currentLang == 'en') ? 'ok'                     : 'موافق';
      const confirm = this.alertCtrl.create({
        message: message,
        buttons: [
          {
            text: ok,
            handler: () => {
              this.navCtrl.push("LoginPage");
            }
          },
          {
            text: cansel,
            handler: () => {

            }
          }
        ]
      });
      confirm.present();
    }else{
      let obj_Servers = {
        category_name: name,
        service_image: image,
      };
  
      if (id == 1) {
        this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
      } else if (id == 2) {
        this.navCtrl.push('FlowersSectionPage', { 'id': id });
        localStorage.setItem('gategory_id', id);
      } else if (id == 3) {
        this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
      }
  
      localStorage.setItem('hdaaeq_order_serves_id', id);
      localStorage.setItem('Hdaaeq_Serves', JSON.stringify(obj_Servers));
    }

  }


}
