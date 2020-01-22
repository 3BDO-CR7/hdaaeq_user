import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-choose-date',
  templateUrl: 'choose-date.html',
})
export class ChooseDatePage {

  iconDir           : any   = 'divRtl';
  base64Image       : any   = [];
  base64Images      : any   = [];
  images            : any   = [];
  Images_Get        : any   = [];
  Image_current     : any   = [];
  services                  = [];
  orders                    = [];
  services_arr              = [];
  Up_Order                  = [];
  category_serves_Edit      = [];
  text                      = '';
  avatar;
  category_id;
  user;
  category_serves;
  position;
  key;
  Token;
  cart_id;
  services_array;
  has_details;
  has_data;
  token_Image_current;


  constructor(
    public navCtrl            : NavController, 
    public navParams          : NavParams,
    private platform          : Platform,
    private camera            : Camera,
    public translate          : TranslateService,
    public loadingCtrl        : LoadingController,
    public formBuilder        : FormBuilder,
    public api                : ApiProvider,
    public toastCtrl          : ToastController,
    public actionSheetCtrl    : ActionSheetController,
    public alertCtrl          : AlertController) {
      
      if(this.platform.isRTL){
        this.iconDir  = 'divLtr';
      } else{
        this.iconDir  = 'divRtl';
      }
      
      // Get Basket
      this.services_arr           =  this.navParams.get('services_arr');
      this.category_id            =  JSON.parse(localStorage.getItem('hdaaeq_order_serves_id')); 
      this.user                   =  JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
      this.category_serves        =  JSON.parse(localStorage.getItem('Hdaaeq_Serves'));
      this.key                    =  this.navParams.get('key');

      // Get Current
      this.cart_id                =  this.navParams.get('cart_id');
      this.services_array         =  this.navParams.get('current_services');
      this.has_details            =  this.navParams.get('has_details');
      this.has_data               =  this.navParams.get('has_data');
      this.token_Image_current    =  this.navParams.get('token_Image_current');

      // Get Current
      if(this.has_details == 1){
        this.Image_current        =  this.has_data.images;
        this.text                 =  this.has_data.cart_desc;
        this.category_id          =  JSON.parse(localStorage.getItem('current_category_id'))
        // localStorage.setItem('Random_Token' , JSON.stringify(this.has_data.token));
      }

      // Get Basket
      let Service                 =  this.navParams.get('Service');
      if(this.key == 1){
        this.Images_Get           =  this.navParams.get('Images');
        this.text                 =  Service.service_desc;
      }

  }


  ionViewWillEnter(){

    // Get Current
    if(this.has_details == 1){
      this.Token               = this.has_data.token;
      console.log('token Current')
      console.log(this.Token)
    }

    // Get Basket              
    if(this.key == 1){
      this.Token               =  JSON.parse(localStorage.getItem('Random_Token'));
      console.log('token Basket')
      console.log(this.Token)
    }


    if(this.Token == null){
      const rand=()=>Math.random().toString().replace('0.', '') ;
      const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
      this.Token = token(5);
      localStorage.setItem('Random_Token' , JSON.stringify(this.Token));
      console.log('new token')
      console.log(this.Token);
    }

  }
  

  Upload_Done(){

    var today = new Date();
    var date  = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let obj = 
    { 
      category_id       : this.category_id, 
      service_id        : this.services_arr, 
      service_desc      : this.text,
      images            : this.images,
      sub_service_id    : null,
      Category_Name     : this.category_serves.category_name,
      Category_Image    : this.category_serves.service_image,
      Category_Date     : date,
      token_servies     : this.Token
    }

    if(localStorage.getItem('Hdaaeq_Orders') == null){
      let arr         = [];
      arr.push(obj);  
      this.orders.push(arr);
      localStorage.setItem('Hdaaeq_Orders' , JSON.stringify(this.orders));
      localStorage.setItem('Random_Token' , this.Token);
      
    }else{

     let category_id  = JSON.parse(localStorage.getItem('hdaaeq_order_serves_id')) 
     this.orders      = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
     for(let i = 0 ; i < this.orders.length ; i ++)
     {
       if(this.orders[i][0].category_id == category_id)
       {
          this.position = i;
       }
     }
     this.orders = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
     if(this.position == null || this.position == undefined)
      {
        let arr         = [];
        arr.push(obj);  
        this.orders.push(arr);
        localStorage.setItem('Hdaaeq_Orders' , JSON.stringify(this.orders));
      }else{
        this.orders.splice(this.position,1);
        let arr         = [];
        arr.push(obj);  
        this.orders.push(arr);
        localStorage.setItem('Hdaaeq_Orders' , JSON.stringify(this.orders));
        localStorage.setItem('Hdaaeq_Orders_Up_1', JSON.stringify(arr));    
      }
    }
      this.navCtrl.setRoot('DonePage');
      this.navCtrl.setRoot('DonePage');
  }
  

  up(array)
  {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.add_basket_image({
      lang            : this.translate.currentLang ,
      token           : this.Token , 
      images          : this.images ,
      category_id     : this.category_id
    }).subscribe(
    response => {
      var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
      var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل'
      if(response.key == 1){
        response.data = this.images;
        if(this.has_details == 1){
          this.editCurrent();
        }else{
          this.Upload_Done();
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


  goDone(){

    var text     = (this.translate.currentLang == 'en') ? 'You must add photos'  :  'يجب عليك إضافة الصور'

    const toast = this.toastCtrl.create({
    message: text,
    duration: 3000
    });

    if( this.images.length == 0 && this.Images_Get.length == 0 && this.Image_current.length == 0)
    {
      toast.present();
    }else{
      this.up(this.Images_Get)
    }


  }

  presentActionSheet() {
    var addimage        = (this.translate.currentLang == 'en') ? 'Add Image'      : 'إضافة صورة';
    var take            = (this.translate.currentLang == 'en') ? 'Take Photo'     : 'إلتقاط صورة';
    var choose          = (this.translate.currentLang == 'en') ? 'Choose Photo'   : 'إختر صورة';
    var cancel          = (this.translate.currentLang == 'en') ? 'Cancel'         : 'إلغاء';
    let actionSheet = this.actionSheetCtrl.create({
    title: addimage,
    buttons: [
      {
          text: take,
          handler: () => {
          this.pickPhoto(0);
      }
    },
      {
          text: choose,
          handler: () => {
          this.openGallery(0);
      }
    },
      {
          text: cancel,
      handler: () => {
      
      }
    }]
    });
    
    actionSheet.present();
  }
  
  pickPhoto(sourceType:number)
  {
    const options: CameraOptions = {
      quality: 30,
      destinationType       : this.camera.DestinationType.DATA_URL,
      encodingType          : this.camera.EncodingType.JPEG,
      mediaType             : this.camera.MediaType.PICTURE,
      correctOrientation    : true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.images.push(imageData);
      this.base64Image.push('data:image/jpeg;base64,'+imageData) ;
    }, (err) => {

    });
  }

  openGallery(sourceType:number)
  {
    const options: CameraOptions = {
      quality: 50,
      destinationType       : this.camera.DestinationType.DATA_URL,
      encodingType          : this.camera.EncodingType.JPEG,
      mediaType             : this.camera.MediaType.PICTURE,
      correctOrientation    : true,
      sourceType:sourceType,

    }
    this.camera.getPicture(options).then((imageData) => {
      this.images.push(imageData);
      this.base64Image.push('data:image/jpeg;base64,'+imageData) ;
    }, (err) => {

    });

  }


  removeImgs(id, x, h){

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();


    this.api.delete_basket_image({
      token              : this.Token , 
      images_id          : id ,
    }).subscribe(
    response => {
      if(response.key == 1){
        this.Image_current.splice(x,1);
        this.Images_Get.splice(h,1);
      }else if(response.key == 3){
        this.navCtrl.push("LoginPage");
      }
    },
    error => {
      loading.dismiss();
    },
    () => {
      loading.dismiss();
    });
  }


  removeImg(i){
    this.images.splice(i,1);
    this.base64Image.splice(i,1);
  }

  editCurrent(){

    this.api.edit_order_cart({
      cart_id         : this.cart_id,
      service_desc    : this.text,
      token           : this.Token,
      newcart         : this.services_arr,
    }).subscribe(
    response => {

      const toast = this.toastCtrl.create({
      message: response.message,
      duration: 3000
      });
      toast.present();

      this.navCtrl.setRoot('HomePage');
      this.navCtrl.push("CurrentRequestsPage",{'id' : JSON.parse(localStorage.getItem('current_edite_id'))});
      
    },
    error => {
      // loading.dismiss();
    },
    () => {
      // loading.dismiss();
    });
    
  }

}
