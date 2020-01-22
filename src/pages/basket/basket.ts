import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

  public sections : boolean;
  iconRtl         = "icon-right";
  iconLtr         = "icon-right";
  up_arr : any    =  [];
  user;
  data;
  Token;
  constructor(
    public navCtrl                : NavController,
    public navParams              : NavParams,
    private platform              : Platform,
    private translate             : TranslateService,
    public loadingCtrl            : LoadingController,
    public api                    : ApiProvider,
    public toastCtrl              : ToastController,
    public alertCtrl              : AlertController) {

      this.user       = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
      this.up_arr     = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
      // this.Token      = JSON.parse(localStorage.getItem('Random_Token'));


      console.log('this is data')
      console.log(this.up_arr);
      
  }

  ionViewWillEnter() {
    
    let arrs = this.up_arr;
    for (let i = 0 ; i < arrs.length ; i ++) {
      var subArr = arrs[i];
      for (let x = 0 ; x < subArr.length ; x ++) {
        this.up_arr = arrs;
      }
    }

  }

  goRemove(id){
    for (let i = 0 ; i < this.up_arr.length ; i ++) {
      var subArr = this.up_arr[i];
      for (let x = 0 ; x < subArr.length ; x ++) {
        if(subArr[x].category_id == id){
          let index = this.up_arr.indexOf(subArr);
          this.up_arr.splice(index,1);
        }
      }
    }


    localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.up_arr));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
    if (this.platform.isRTL) {
      this.iconRtl = "icon-right";
      this.iconLtr = "icon-left";
    } else {
      this.iconRtl = "icon-left";
      this.iconLtr = "icon-right";
    }
  }

  goDetails(id, sup_ser_basket) {
    this.navCtrl.push("BasketDetilsPage", { sup_ser_basket: sup_ser_basket, id: id });
  }

  goEdite(id){
    if (id == 1) {
      this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
    } else if (id == 2) {
      this.navCtrl.push('FlowersSectionPage',     { 'id': id });
    } else if (id == 3) {
      this.navCtrl.push('MaintenanceSectionPage', { 'id': id });
    }
  }

  goDone(){

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    // let up_carts = this.up_arr;
    this.api.new_order(
      {
        lang      : this.translate.currentLang , 
        user_id   : this.user.id, 
        carts     : this.up_arr,
        token     : this.Token
      }).subscribe(
        response => {
        var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
        var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل';
        if(response.key == "1"){
          localStorage.removeItem('Hdaaeq_Orders');
          localStorage.removeItem('Random_Token');
          this.navCtrl.push('HomePage');
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
        const toast = this.toastCtrl.create({
        message: response.message,
        duration: 3000
        });
        toast.present();

    }, error =>{
      loading.dismiss();
    },()=>{
      loading.dismiss();
    });

    console.log(this.up_arr);

  }

  openNoty() {
    this.navCtrl.push("NotificationPage");
  }


}
