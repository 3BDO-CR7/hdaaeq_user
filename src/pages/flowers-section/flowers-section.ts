import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-flowers-section',
  templateUrl: 'flowers-section.html',
})
export class FlowersSectionPage {

  id;
  key;
  unit;
  current_service;
  cart_id;
  has_details;
  serves                          = [];
  category_serves_Edit            = [];
  Service                         = [];

  constructor(
    public navCtrl                : NavController,
    public navParams              : NavParams,
    private translate             : TranslateService,
    public loadingCtrl            : LoadingController,
    public api                    : ApiProvider,
    public alertCtrl              : AlertController) {
  
    this.id                       = this.navParams.get('id');

    //Get Basket
    this.category_serves_Edit     = this.navParams.get('sup_ser_basket');
    this.key                      = this.navParams.get('key');

    //Get Current
    this.cart_id                  = this.navParams.get('cart_id');
    this.has_details              = this.navParams.get('has_details');
    this.current_service          = this.navParams.get('services');

    console.log('current serveis')
    console.log(this.current_service);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowersSectionPage');
  }

  ionViewWillEnter(){
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.services({
      lang            : this.translate.currentLang , 
      category_id     : this.id
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
        this.serves  = response.data;
      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
    });

  }

  goService( name, id , unit ){
    this.navCtrl.push("FlowerServicePage" , { 
      name              : name , 
      Sup_serves        : this.category_serves_Edit , 
      key               : this.key ,
      unit              : unit ,
      current_service   : this.current_service ,
      cart_id           : this.cart_id ,
      has_details       : this.has_details
    });
    let obj  = { name : name , id : id};
    localStorage.setItem('hdaaeq_servers_id_2_id' , JSON.stringify(id));
    localStorage.setItem('hdaaeq_servers_id_2'    , JSON.stringify(obj));
  }

}
