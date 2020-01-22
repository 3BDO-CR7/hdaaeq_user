import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-verify-account',
  templateUrl: 'verify-account.html',
})
export class VerifyAccountPage {

  user: any;

  private verify     :      FormGroup  = this.formBuilder.group({
    code             :      ['', Validators.required],
    user_id          :      ['', Validators.required],
    lang             :      [],
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
    this.user = JSON.parse(localStorage.getItem('hdaaeq_user_Data_register'));
    this.verify.controls['lang'].setValue(this.translate.currentLang);
    this.verify.controls['user_id'].setValue(this.user.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyAccountPage');
  }

  goHome(){
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.verifyCode(this.verify.value).subscribe(
      response => {

        const toast = this.toastCtrl.create({
          message: response.message,
          duration: 3000
        });
        toast.present();
        
        if (response.key == "1") {
          this.navCtrl.push("LoginPage");
        }
      
      },
      error => {
        loading.dismissAll();
      },()=>{
        loading.dismissAll();
      }
      );

  }

  resend_code(){

    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.resendCode({
      user_id   : this.user.id , 
      lang      : this.translate.currentLang}).subscribe(
      response => {
      const toast = this.toastCtrl.create({
        message: response.massage,
        duration: 3000
      });
      toast.present();
       
      },
      error => {
        loading.dismissAll();
      },()=>{
        loading.dismissAll();
      }
      );
  }

}
