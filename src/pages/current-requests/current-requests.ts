import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController,ModalController, Navbar } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { ApiProvider } from "../../service/api/api";
import { ImageViewerController } from 'ionic-img-viewer';

import { GalleryModal } from 'ionic-gallery-modal';

@IonicPage()
@Component({
  selector: 'page-current-requests',
  templateUrl: 'current-requests.html',
})
export class CurrentRequestsPage {

  @ViewChild(Navbar) navBar: Navbar;
  data;
  id;
  arr_order                  = [];
  sup_serves                 = [];
  images                     = [];
  Up_Serves_Detils           = [];
  gallery                    = [];
  root                       = [];
  page                       = '0';
  public sections            : boolean;
  _imageViewerCtrl           : ImageViewerController;

  constructor(
    public navCtrl           : NavController, 
    public navParams         : NavParams,
    public loadingCtrl       : LoadingController,
    public api               : ApiProvider,
    public toastCtrl         : ToastController,
    private translate        : TranslateService,
    public alertCtrl         : AlertController,
    imageViewerCtrl          : ImageViewerController,
    public modalCtrl         : ModalController) {

      this.id = this.navParams.get('id');
      this._imageViewerCtrl = imageViewerCtrl;

      

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
        this.data                       = response.data;
        this.arr_order                  = response.data.carts;

        console.log('bool')
        console.log(this.data);
        console.log(this.arr_order);

      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
    });

    var els = document.querySelectorAll('.view-section')
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('fading');

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentRequestsPage');
  }

  goQuotations(id, date){
    this.navCtrl.push("QuotationsPage", {id : id, date : date})
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

  goRemove(id , i){

      if(this.arr_order.length == 1){
        var title     = (this.translate.currentLang == 'en') ? 'Do you want to delete this service ?' : 'هل تريد حذف هذه الخدمه ؟';
        var message   = (this.translate.currentLang == 'en') ? 'If this service is deleted, the entire request will be deleted' : 'إذا تم حذف هذه الخدمة ، فسيتم حذف الطلب بأكمله';
        var cansel    = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
        var ok        = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
        const confirm = this.alertCtrl.create({
          title: title,
          message: message,
          buttons: [
            {
              text: ok,
              handler: () => {
                this.removeReqest(id , i);
                this.navCtrl.push("HomePage");
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
        this.removeReqest(id , i);
      }
      
  }

  removeReqest(id , i){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.delete_order_cart({
      cart_id    : id,
    }).subscribe(
      response => {

        var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
        var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل'

        if(response.key == "1"){
          this.arr_order.splice(i,1);
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

      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
    });
  }

  goEdite(cart_id){

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.get_order_cart({
      cart_id         : cart_id ,
      lang            : this.translate.currentLang , 
    }).subscribe(
      response => {

        let data            = response.data
        let id              = response.data.category_id;
        let has_details     = response.data.has_details;
        let services        = response.data.services;
        let token           = response.data.token;

        console.log(data);

        if (id == 1) {
          this.navCtrl.push('MaintenanceSectionPage', { 
            'cart_id'       : cart_id , 
            'data'          : data , 
            'id'            : id ,
            'has_details'   : has_details,
            'services'      : services ,
            'token'         : token ,
            "section_id"    : this.id
          });
        } else if (id == 2) {
          this.navCtrl.push('FlowersSectionPage',     { 
            'cart_id'       : cart_id ,
            'has_details'   : has_details ,
            'services'      : services ,
            'id'            : id ,
            "section_id"    : this.id
          });
        } else if (id == 3) {
          this.navCtrl.push('MaintenanceSectionPage', { 
            'cart_id'       : cart_id , 
            'data'          : data , 
            'id'            : id ,
            'has_details'   : has_details ,
            'services'      : services ,
            'token'         : token ,
            "section_id"    : this.id
          });

          console.log('this is servies')
          console.log(services)
        }

        localStorage.setItem('current_edite_id' , JSON.stringify(this.id));
        localStorage.setItem('current_category_id' , JSON.stringify(id));

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

      },
      error => {
        loading.dismiss();
      },
      () => {
        loading.dismiss();
    });
    
  }

}
