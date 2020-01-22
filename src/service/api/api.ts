import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {Events} from "ionic-angular";


@Injectable()
export class ApiProvider {
  baseUrl      = 'http://hadaek.aait-sa.com/api/';
  public myGlobalVar: any = [];
  constructor(
    private event       :Events,
    public http         : HttpClient) {

  }


  // Api Reigesterion

  signUp(data):Observable<any> {
    return this.http.post(`${this.baseUrl}user-register`,data).map((response) => {return response});
  }

  signIn(data):Observable<any> {
    return this.http.post(`${this.baseUrl}login`,data).map((response) => {return response});
  }
  
  codes(data):Observable<any> {
    return this.http.post(`${this.baseUrl}codes`,data).map((response) => {return response});
  }
  
  resendCode(data):Observable<any> {
    return this.http.post(`${this.baseUrl}resendCode`,data).map((response) => {return response});
  }

  verifyCode(data):Observable<any> {
    return this.http.post(`${this.baseUrl}verify-account`,data).map((response) => {return response});
  }

  sentCode(data):Observable<any> {
    return this.http.post(`${this.baseUrl}send-code`,data).map((response) => {return response});
  }

  forgetPassword(data):Observable<any> {
    return this.http.post(`${this.baseUrl}forget-password`,data).map((response) => {return response});
  }

  newPassword(data):Observable<any> {2
    return this.http.post(`${this.baseUrl}reset_password`,data).map((response) => {return response});
  }

  cities(data):Observable<any> {
    return this.http.post(`${this.baseUrl}cities`,data).map(response => {return response});
  }

  countries(data):Observable<any> {
    return this.http.get(`${this.baseUrl}countries`,data).map(response => {return response});
  }

  about(data):Observable<any> {
    return this.http.post(`${this.baseUrl}about`, data).map(response => {return response});
  }

  contact(data):Observable<any> {
    return this.http.get(`${this.baseUrl}contact-info`,data).map(response => {return response});
  }

  profile(data):Observable<any> {
    return this.http.post(`${this.baseUrl}profile`, data).map(response => {return response});
  }

  editprofile(data):Observable<any> {
    return this.http.post(`${this.baseUrl}update-profile`, data).map(response => {return response});
  }

  editPassword(data):Observable<any> {
    return this.http.post(`${this.baseUrl}update_password`, data).map(response => {return response});
  }

  sentMessage(data):Observable<any> {
    return this.http.post(`${this.baseUrl}contact_us`, data).map(response => {return response});
  }
  
  notification(data):Observable<any> {
    return this.http.post(`${this.baseUrl}notifiactions`, data).map(response => {return response});
  }
  
  deleteNotifiaction(data):Observable<any> {
    return this.http.post(`${this.baseUrl}delete_notifiaction`, data).map(response => {return response});
  }

  categories(data):Observable<any> {
    return this.http.post(`${this.baseUrl}categories`, data).map(response => {return response});
  }

  services(data):Observable<any> {
    return this.http.post(`${this.baseUrl}services`, data).map(response => {return response});
  }

  clientfinorders(data):Observable<any> {
    return this.http.post(`${this.baseUrl}client_finished_orders`, data).map(response => {return response});
  }

  clientactiveorders(data):Observable<any> {
    return this.http.post(`${this.baseUrl}client_active_orders`, data).map(response => {return response});
  }

  clientActiveDetails(data):Observable<any> {
    return this.http.post(`${this.baseUrl}client_active_order_details`, data).map(response => {return response});
  }

  clientFinishedDetails(data):Observable<any> {
    return this.http.post(`${this.baseUrl}client_finished_order_details`, data).map(response => {return response});
  }

  finishOrder(data):Observable<any> {
    return this.http.post(`${this.baseUrl}finish_order`, data).map(response => {return response});
  }

  clientOrderOffers(data):Observable<any> {
    return this.http.post(`${this.baseUrl}client_order_offers`, data).map(response => {return response});
  }

  offerprovider(data):Observable<any> {
    return this.http.post(`${this.baseUrl}offer_provider`, data).map(response => {return response});
  }

  subservices(data):Observable<any> {
    return this.http.post(`${this.baseUrl}sub_services`, data).map(response => {return response});
  }
  
  new_order(data):Observable<any> {
    return this.http.post(`${this.baseUrl}new_order`, data).map(response => {return response});
  }
  
  add_basket_image(data):Observable<any> {
    return this.http.post(`${this.baseUrl}add_basket_image`, data).map(response => {return response});
  }
  
  get_basket_image(data):Observable<any> {
    return this.http.post(`${this.baseUrl}get_basket_image`, data).map(response => {return response});
  }
  
  delete_basket_image(data):Observable<any> {
    return this.http.post(`${this.baseUrl}delete_basket_image`, data).map(response => {return response});
  }
  
  notifiaction_status(data):Observable<any> {
    return this.http.post(`${this.baseUrl}notifiaction_status`, data).map(response => {return response});
  }
  
  accept_provider_offer(data):Observable<any> {
    return this.http.post(`${this.baseUrl}accept_provider_offer`, data).map(response => {return response});
  }
  
  resend_order(data):Observable<any> {
    return this.http.post(`${this.baseUrl}resend_order`, data).map(response => {return response});
  }
  
  delete_order_cart(data):Observable<any> {
    return this.http.post(`${this.baseUrl}delete_order_cart`, data).map(response => {return response});
  }
  
  get_order_cart(data):Observable<any> {
    return this.http.post(`${this.baseUrl}get_order_cart`, data).map(response => {return response});
  }
  
  edit_order_cart(data):Observable<any> {
    return this.http.post(`${this.baseUrl}edit_order_cart`, data).map(response => {return response});
  }


}
