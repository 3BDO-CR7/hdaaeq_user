import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-flower-service',
  templateUrl: 'flower-service.html',
})
export class FlowerServicePage {

  id;
  name;
  service_id;
  user;
  key;
  unit;
  has_details;
  cart_id;
  current_service;
  serves                        = [];
  sup_serves_arr                = [];
  serves_edit                   = [];
  Service                       = [];
  Sup_Arr_Service               = [];
  chicked:any={};
  
  constructor(
    public navCtrl              : NavController, 
    public navParams            : NavParams, 
    private platform            : Platform,
    private translate           : TranslateService,
    public loadingCtrl          : LoadingController,
    public api                  : ApiProvider,
    public alertCtrl            : AlertController) {

    
    this.unit                   = this.navParams.get('unit');
    this.name                   = this.navParams.get('name');
    this.Service                = this.navParams.get('Sup_serves');

    // Get Basket
    this.service_id             = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id'));
    this.serves_edit            = this.navParams.get('serves_edit');
    this.key                    = this.navParams.get('key');

    // Get Current 
    this.has_details            = this.navParams.get('has_details');;
    this.cart_id                = this.navParams.get('cart_id');
    this.current_service        = this.navParams.get('current_service');

    // this.sup_serves_arr   = [];

    console.log('servies current serveis')
    console.log(this.current_service);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowerServicePage');
  }

  ionViewWillEnter(){

    // this.sup_serves_arr = [];

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();

    this.api.subservices({
      lang              : this.translate.currentLang , 
      service_id        : this.service_id
    }).subscribe(
      response => {

        var message     = (this.translate.currentLang == 'en') ? '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> Sorry This User Has Been Warned'   : '<img src="assets/imgs/block-user.png" class="img_alert animated shake"> عذراََ لقد تم حذر هذا المستخدم';
        var Done        = (this.translate.currentLang == 'en') ? 'Go To The Register'                : 'الذهاب إلى التسجيل';

        if(response.key == "1"){

          this.serves = response.data;
          
          // Get Basket
          if(this.key == 1){
              
              this.Sup_Arr_Service  = this.Service['Array_Sub_Services'];
              for (var m = 0; m < this.Sup_Arr_Service.length; m++) {
                let Get_Sup_Serves = this.Sup_Arr_Service[m].subServices;                
              for (var s = 0; s < Get_Sup_Serves.length; s++) {
                var id      = Get_Sup_Serves[s].sup_service_id
                var element = document.getElementById(`id-${id}`);
                if(element)
                {
                  element.setAttribute('checked' , 'checked');
                  this.chicked[id] = true;
                }
                let serves_id = this.Sup_Arr_Service[m].id
                if(serves_id == this.service_id){
                  this.sup_serves_arr = Get_Sup_Serves;
                }
                // this.sup_serves_arr = Get_Sup_Serves;
              }
            }
          }

          // Get Current
          if(this.has_details == 0){
            setTimeout(() => {
                let Arr_Service_current  = this.current_service;
              for (var m = 0; m < Arr_Service_current.length; m++) {
                let Sup_Serves_current = Arr_Service_current[m].sub_services;
              for (var s = 0; s < Sup_Serves_current.length; s++) {
                var id      = Sup_Serves_current[s].sup_service_id
                var element = document.getElementById(`id-${id}`);
                if(element)
                {
                  element.setAttribute('checked' , 'checked');
                  this.chicked[id] = true;
                }
                let serves_id = Arr_Service_current[m].id
                if(serves_id == this.service_id){
                  this.sup_serves_arr = Sup_Serves_current;
                }
                  // this.sup_serves_arr = Sup_Serves_current;
              }
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
  
  ionViewWillLeave(){

    // this.sup_serves_arr = [];
    // this.chicked        = false;

  }
    
  chooseServices(id , name){
    let obj       = { sup_service_id : id, sub_service_name : name }
    let arr       = this.sup_serves_arr.find(o => o.sup_service_id == id);
    let index     = this.sup_serves_arr.indexOf(arr);
    if(index > -1){
      this.sup_serves_arr.splice(index,1);
      this.chicked[id] = false
    }else{
      this.sup_serves_arr.push(obj);
      this.chicked[id] = true
    }
  }

  goDetils(id, name) {
    let obj               = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2'));
    obj.subServices       = this.sup_serves_arr;
    this.navCtrl.push("FlowerDetilsPage", { 
      sup_serves_arr      : this.sup_serves_arr ,
      serviceSubServices  : obj , 
      key                 : this.key ,
      Service             : this.Service ,
      unit                : this.unit ,
      has_details         : this.has_details ,
      cart_id             : this.cart_id ,
      current_service     : this.current_service ,
    });
    console.log('goning')
    console.log(this.current_service);
    console.log(obj);
  }



}
