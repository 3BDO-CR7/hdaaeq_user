import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController,ModalController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";


import { GalleryModal } from 'ionic-gallery-modal';

@IonicPage()
@Component({
  selector: 'page-current-orders',
  templateUrl: 'current-orders.html',
})
export class CurrentOrdersPage {

  data;
  id;
  images        = [];
  serves        = [];
  up_serves     = [];
  sup_serves    = [];
  Carts         = [];
  gallery       = [];
  root          = [];

  constructor(
    public navCtrl      : NavController,
    public navParams    : NavParams,
    public loadingCtrl  : LoadingController,
    public api          : ApiProvider,
    public toastCtrl    : ToastController,
    private translate   : TranslateService,
    public alertCtrl    : AlertController,
    public modalCtrl    : ModalController,
    ) {

      this.id = this.navParams.get('id');

  }

  ionViewWillEnter(){

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();
    this.api.clientActiveDetails({
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
        this.data     = response.data;
        this.Carts    = response.data.carts;

        // for(let r = 0 ; r < this.Carts.length ; r ++)
        // {

        //  this.root = this.Carts[r].images;

        // }

        // for(let i =0 ; i < this.root.length ;i ++)
        // {
        //   this.gallery.push({url:this.root[i].image })
         
        // }

      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
    });

  }


  itemSelected(images) {

   this.gallery = [];

      for(let i = 0 ; i < images.length ;i ++)
         {
           this.gallery.push({url:images[i].image })
         }

    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.gallery,
    });
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentOrdersPage');
  }

  goCloseCode(finish_code){
    this.navCtrl.push("CloseCodePage",{finish_code:finish_code});
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
