import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  
  iconLtr       = "left";
  codes         = [];
  countryCode;
  private forgetpassword      :      FormGroup  = this.formBuilder.group({
    phone                     :      ['', Validators.required],
    lang                      :      [],
    country_code              :      [],
  });

  constructor(
    public navCtrl          : NavController, 
    public navParams        : NavParams,
    public translate        : TranslateService,
    public loadingCtrl      : LoadingController,
    public formBuilder      : FormBuilder,
    public api              : ApiProvider,
    public toastCtrl        : ToastController,
    public platform         : Platform,
    public alertCtrl        : AlertController) {
  }

  ionViewWillEnter(){
    this.forgetpassword.controls['lang'].setValue(this.translate.currentLang);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
    if (this.platform.isRTL) {
      this.iconLtr="left";
    } else {
      this.iconLtr="right";
    }

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();
    this.api.codes({lang : this.translate.currentLang}).subscribe(
      response => {
        this.codes = response.data;
        this.countryCode = this.codes[0].code;
    },
      error => {
         loading.dismiss();
    },
      () => {
         loading.dismiss();
    });
  }
  
  goNewpassword(){
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.sentCode(this.forgetpassword.value).subscribe(
      response => {
      var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
      var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل'
      const toast = this.toastCtrl.create({
        message: response.message,
        duration: 3000
      });
      toast.present();
      if (response.key == "1") {
        this.navCtrl.push("NewPasswordPage");
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
        loading.dismissAll();
      },()=>{
        loading.dismissAll();
      }
      );

  }

}
