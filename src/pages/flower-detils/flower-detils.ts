import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import {ApiProvider} from "../../service/api/api";

@IonicPage()
@Component({
  selector: 'page-flower-detils',
  templateUrl: 'flower-detils.html',
})
export class FlowerDetilsPage {
  serves                = [];
  subServices           = [];
  offers                = [];
  Object_arr            = [];
  serves_id             = [];
  serviceSubServices    = [];
  SubServices_Current   = [];
  total          : any  = 0;
  category_id;
  category_serves;
  position;
  second_position;
  position_obj;
  second_position_obj;
  key;
  unit;
  has_details;
  cart_id;
  current_service;

  constructor(
    public navCtrl                : NavController,
    public navParams              : NavParams,
    public loadingCtrl            : LoadingController,
    public api                    : ApiProvider,
    public toastCtrl              : ToastController) {

    // Get Basket 
    this.category_id              =  JSON.parse(localStorage.getItem('hdaaeq_order_serves_id'));
    this.category_serves          =  JSON.parse(localStorage.getItem('Hdaaeq_Serves'));
    this.key                      =  this.navParams.get('key');
    this.unit                     =  this.navParams.get('unit');
    this.serves_id.push(JSON.parse(localStorage.getItem('hdaaeq_servers_id_2')));


    // Get Current
    this.has_details              = this.navParams.get('has_details');;
    this.cart_id                  = this.navParams.get('cart_id');
    this.current_service          = this.navParams.get('current_service');

  }



  ionViewWillEnter(){

    let Service                 = this.navParams.get('Service');

    if(this.key == 1){
          let Sup_Arr_Service   = Service['Array_Sub_Services'];
        for (var m = 0; m < Sup_Arr_Service.length; m++) {
          let Get_Sup_Serves    = Sup_Arr_Service[m].subServices;
        for (var s = 0; s < Get_Sup_Serves.length; s++) {
          this.offers = Get_Sup_Serves;
        }
      }
    }

    let current_service           = this.current_service
    
    if(this.has_details == 0){
        for (var g = 0; g < current_service.length; g++) {
          let Sup_Serves_current  = current_service[g].sub_services;
        for (var s = 0; s < Sup_Serves_current.length; s++) {
          this.offers = Sup_Serves_current;
        }
      }
    }

    // this.offers                   = [];
    // this.serves                   = []; 
    this.serviceSubServices.push(this.navParams.get('serviceSubServices'));
    this.serves                   = this.serviceSubServices[0].subServices;
    
    // if(this.has_details != null && this.has_details != undefined)
    // {
    //   if(this.has_details == 0){
    //     for (var g = 0; g < current_service.length; g++) {
    //       let Sup_Serves_current  = current_service[g].sub_services;
    //     for (var s = 0; s < Sup_Serves_current.length; s++) {
    //       this.offers = Sup_Serves_current;
    //     }
    //   }
    // }else{
    //  this.offers                    = [];
    // }
    //   this.serves                   = []; 
    //   this.serviceSubServices.push(this.navParams.get('serviceSubServices'));
    //   this.serves                   = this.serviceSubServices[0].subServices;
    // }else{
    //   this.serves                   = []; 
    //   this.serviceSubServices.push(this.navParams.get('serviceSubServices'));
    //   this.serves                   = this.serviceSubServices[0].subServices;  
    // }
  }

  ionViewWillLeave()
  {
    this.offers             = [];
    this.serves             = [];
    this.offers.length      = 0;
  }

  getPrice(e) {

   this.offers             = [];

    var inputPrice          = document.getElementsByClassName("input-price");
  
    for (var i = 0; i       < inputPrice.length; i++) {
        var id              = inputPrice[i].getAttribute('id');
        var name            = inputPrice[i].getAttribute('name');
        var inputVal        = inputPrice[i] as HTMLInputElement;
        var unit_details    = (parseInt(inputVal.value) == NaN || inputVal.value == '') ? 0 : parseInt(inputVal.value);
        var obj             = {id : JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id')), sup_service_id: id, sub_service_name: name, unit_details: unit_details };
        var arr             = this.offers.find(o => o.sup_service_id == id);
        var index           = this.offers.indexOf(arr);
      if (index > -1) {
          this.offers[index].unit_details = unit_details;
      } else {
          this.offers.push(obj);
      }
          this.total = unit_details;
    }

  }

  goDone() {

    var today = new Date();
    var date  = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.serviceSubServices[0].subServices    = this.offers;
    var positionArr: any = [];  

    let obj =
    {
      category_id           : this.category_id,
      service_id            : this.serves_id,
      service_desc          : null,
      images                : null,
      sub_service_id        : this.offers,
      Array_Sub_Services    : this.serviceSubServices,
      Category_Name         : this.category_serves.category_name,
      Category_Image        : this.category_serves.service_image,
      Category_Date         : date
    }
 
    let arr = [];

    if (localStorage.getItem('Hdaaeq_Orders') == null) {

      arr.push(obj);
      this.Object_arr.push(arr);
      localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.Object_arr));

    } else {
      this.Object_arr = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
      var positionArr: any = [];
      for (var i = 0; i < this.Object_arr.length; i++) {
        positionArr     = this.Object_arr[i];
        if (this.Object_arr[i][0].category_id == 2) {
          this.position = this.Object_arr[i][0];
        }
      }
      if (this.position == null || this.position == undefined) {
        this.Object_arr = JSON.parse(localStorage.getItem('Hdaaeq_Orders'));
        arr.push(obj);
        this.Object_arr.push(arr);
        localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.Object_arr));
      } else {
        let array;
        let secondIndex;
        let current_id          = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id'));
        let arrays_and_sub      = this.position.Array_Sub_Services;
          
        var fontArray           = this.navParams.get('serviceSubServices');
      
        var arr_s               = arrays_and_sub.find(o => o.id == current_id);
        var index_s             = arrays_and_sub.indexOf(arr_s);
        if(index_s > -1)
        {
            arrays_and_sub.splice(index_s,1);
            fontArray.subServices   = this.offers;
            arrays_and_sub.push(fontArray);  
        }else{
            fontArray.subServices   = this.offers;
            arrays_and_sub.push(fontArray);  
        }


        for (let g = 0; g < this.offers.length; g++) {

          array         = this.position.sub_service_id.find(x => x.sub_service_id == this.offers[g].sub_service_id);
          secondIndex   = this.position.sub_service_id.indexOf(array);

          if (secondIndex > -1) {
            this.position.sub_service_id.splice(secondIndex,1);
            this.position.sub_service_id.push(this.offers[g]);
          } else {
            this.position.sub_service_id.push(this.offers[g]);
          }
        }
        let arr         = this.position.service_id.find(o => o.id == this.serves_id[0].id);
        for (let g      = 0; g < this.offers.length; g++) {
          array         = this.position.sub_service_id.find(x => x.sub_service_id == this.offers[g].sub_service_id);
          secondIndex   = this.position.sub_service_id.indexOf(array);
          if (secondIndex > -1) {
            this.position.sub_service_id.splice(secondIndex,1);
            this.position.sub_service_id.push(this.offers[g]);
          } else {
            this.position.sub_service_id.push(this.offers[g]);
          }
        }
        let index     = this.position.service_id.indexOf(arr);
        if (index > -1) {
          this.position.service_id.splice(index,1);       
          this.position.service_id.push(this.serves_id[0]);
        } else {
          this.position.service_id.push(this.serves_id[0]);
        }

      }
    }

    localStorage.setItem('Hdaaeq_Orders', JSON.stringify(this.Object_arr));
    this.navCtrl.push('DonePage');
    
  }

  editCurrent(){

    let up_Obj = JSON.parse(localStorage.getItem('hdaaeq_servers_id_2_id'));

    let obj_Current = { 
      id            : up_Obj ,
      subServices   : this.offers
    }

    this.SubServices_Current.push(obj_Current);

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/logo.png">'
    });
    loading.present();


    this.api.edit_order_cart({
      cart_id         : this.cart_id,
      newcart         : this.SubServices_Current,
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
      loading.dismiss();
    },
    () => {
      loading.dismiss();
    });

    console.log('this is order')
    console.log(this.offers);
    console.log(this.SubServices_Current)
    console.log(this.serviceSubServices)
    
  }

}
