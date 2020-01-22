import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { ApiProvider } from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-maintenance-section',
  templateUrl: 'maintenance-section.html',
})
export class MaintenanceSectionPage {
  public sections: boolean;
  iconDir: any            = 'divRtl';
  img_Rtl: any            = 'img_Rtl';
  images                  = [];
  services_arr            = [];
  category_serves_Edit    = [];
  key;
  id;
  serves: any;
  service_id;
  user;
  Img;
  cart_id;
  services;
  has_details;
  has_data;
  token;
  chicked:any={};

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    private platform      : Platform,
    private translate     : TranslateService,
    public loadingCtrl    : LoadingController,
    public api            : ApiProvider,
    public alertCtrl      : AlertController) {

    this.id                      = this.navParams.get('id');
    this.service_id              = JSON.parse(localStorage.getItem('hdaaeq_order_serves_id'));
    this.user                    = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));

    // Get basket
    this.category_serves_Edit    = this.navParams.get('sup_ser_basket');
    this.key                     = this.navParams.get('key');
    this.Img                     = this.navParams.get('Images');
    
    // Get Current_Request
    this.cart_id                 = this.navParams.get('cart_id');
    this.services                = this.navParams.get('services');
    this.has_details             = this.navParams.get('has_details');
    this.has_data                = this.navParams.get('data');
    this.token                   = this.navParams.get('token');


    if (this.platform.isRTL) {
      this.iconDir = 'divLtr';
      this.img_Rtl = 'img_Rtl';
    } else {
      this.iconDir = 'divRtl';
      this.img_Rtl = 'img_Ltr';
    }

    // this.serves       = [];
    // this.chicked      = false;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintenanceSectionPage');
  }

  ionViewWillEnter() {


    console.log('this obj')
    console.log(this.serves);

    var els = document.querySelectorAll('.view-section')
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('fading');
    }

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.services({ 
      lang            : this.translate.currentLang ,
      category_id     : this.id , 
      user_id         : this.user.id ,
    }).subscribe(
      response => {

        var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
        var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل'

        if (response.type == "0") {

          this.serves = response.data;
          this.images = response.data.images;

          if(this.has_details == 1){
            // Get Current_Request
            setTimeout(() => {
                
              let current_serves  = this.services;
              
              for (var m = 0; m < current_serves.length; m++) {
                var id      = current_serves[m].id
                var element = document.getElementById(`id-${id}`);
                if(element)
                {
                  element.setAttribute('checked' , 'checked');
                  this.chicked[id] = true;
                }
                this.services_arr = current_serves;
              }
            }, 300);
          }

          if(this.key == 1){
            
            // Get basket
            setTimeout(() => {
              let Arr_Service  = this.category_serves_Edit['service_id'];
              for (var m = 0; m < Arr_Service.length; m++) {
                var id      = Arr_Service[m].id
                var element = document.getElementById(`id-${id}`);
                if(element)
                {
                  element.setAttribute('checked' , 'checked');
                  this.chicked[id] = true;
                }
                this.services_arr = Arr_Service;
            }
            }, 300);

          }

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
      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
      });

  }

  backBasket(id){
    this.navCtrl.push("BasketPage");
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

  goDate() {
    this.navCtrl.push("ChooseDatePage", { 
      'services_arr'          : this.services_arr ,
      key                     : this.key ,
      Service                 : this.category_serves_Edit ,
      Images                  : this.Img ,
      current_services        : this.services ,
      cart_id                 : this.cart_id ,
      has_data                : this.has_data ,
      has_details             : this.has_details ,
      token_Image_current     : this.token
    });

  }


  ionViewWillLeave()
  {
    // this.services_arr   = [];
    // this.chicked        = false;
  }

  chooseServices(id, name) {
    let obj       = { id: id, name: name };
    let arr       = this.services_arr.find(o => o.id == id);
    let index     = this.services_arr.indexOf(arr);
    if (index > -1) {
      this.services_arr.splice(index, 1);
      this.chicked[id] = false;
    } else {
      this.services_arr.push(obj);
      this.chicked[id] = true;
    }

  }



}
