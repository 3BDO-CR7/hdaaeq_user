import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

import { ApiProvider} from "../../service/api/api";
import { TranslateService } from '@ngx-translate/core';

import { GalleryModal } from 'ionic-gallery-modal';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-basket-detils',
  templateUrl: 'basket-detils.html',
})
export class BasketDetilsPage {

  up_detils           = '';
  block_img           = [];
  up_serves           = [];
  sup_serves          = [];
  array               = [];
  Up_Serves           = [];
  Image               = [];
  Image_id            = [];
  gallery             = [];
  imgs;
  sup_ser_basket;
  category_id;
  Token;
  Category_id;
  _imageViewerCtrl    : ImageViewerController;

  constructor(
    public navCtrl              : NavController, 
    public navParams            : NavParams,
    public api                  : ApiProvider,
    private translate           : TranslateService,
    public alertCtrl            : AlertController,
    imageViewerCtrl             : ImageViewerController,
    public modalCtrl            : ModalController) {

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

    this.Category_id               = this.navParams.get('id');

    this.category_id               = this.navParams.get('id');
    this.sup_ser_basket            = this.navParams.get('sup_ser_basket');
    this.up_detils                 = this.sup_ser_basket;
    this.up_serves                 = this.sup_ser_basket.service_id;
    this.sup_serves                = this.sup_ser_basket.sub_service_id;
    this.Up_Serves                 = this.sup_ser_basket.Array_Sub_Services;
    this.Token                     = this.sup_ser_basket.token_servies;

    console.log('up_arr');
    console.log(this.sup_ser_basket);

    this.api.get_basket_image({
      token           : this.Token ,
      category_id     : this.Category_id ,
      lang            : this.translate.currentLang
    }).subscribe(
      response => {
        var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
        var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل';
        if(response.key == 1){
          this.block_img = response.data.images;
          let Arr_Image  = response.data.images
          for(let i = 0 ; i < Arr_Image.length ; i ++){
            this.Image_id.push(Arr_Image[i].id);
            this.sup_ser_basket.push(this.Image_id);
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
      error => {},
      () => {}
    );
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketDetilsPage');
  }

  goEdite(id){

    if(id == 1){
      this.navCtrl.push('MaintenanceSectionPage',{ 
        'id'              : id ,
        'key'             : 1 ,
        sup_ser_basket    : this.sup_ser_basket ,
        Images            : this.block_img ,
      });
    }else if(id == 2){
      this.navCtrl.push('FlowersSectionPage',{ 
        'id'              : id ,
        'key'             : 1 ,
        sup_ser_basket    : this.sup_ser_basket
      });
    }else if(id == 3){
      this.navCtrl.push('MaintenanceSectionPage',{ 
        'id'              : id ,
        'key'             : 1 ,
        sup_ser_basket    : this.sup_ser_basket ,
        Images            : this.block_img ,
      });
    }

    localStorage.setItem('Random_Token' , JSON.stringify(this.Token));
  }
  

}
