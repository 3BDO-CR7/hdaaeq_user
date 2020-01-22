import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-close-code',
  templateUrl: 'close-code.html',
})
export class CloseCodePage {

  code;

  private finishOrder            :      FormGroup  = this.formBuilder.group({
    finish_code                  :      ['', Validators.required],
  });

  constructor(
    public navCtrl          : NavController, 
    public navParams        : NavParams,
    public loadingCtrl      : LoadingController,
    public formBuilder      : FormBuilder,
    public api              : ApiProvider,
    public toastCtrl        : ToastController,
    public alertCtrl        : AlertController,
    public translate        : TranslateService) {

      this.code = this.navParams.get('finish_code');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloseCodePage');
  }

  goHome(){
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.finishOrder(this.finishOrder.value).subscribe(
      response => {
        var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
        var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل'
        const toast = this.toastCtrl.create({
          message: response.message,
          duration: 3000
        });
        toast.present();
      if (response.key == "1") {
        this.navCtrl.push("HomePage");
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
