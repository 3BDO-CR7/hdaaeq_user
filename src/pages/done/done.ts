import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-done',
  templateUrl: 'done.html',
})
export class DonePage {

  iconRtl     = "icon-right";
  iconLtr     = "icon-right";

  constructor(
    public navCtrl          : NavController, 
    public navParams        : NavParams,
    public platform         : Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonePage');
    if (this.platform.isRTL) {
      this.iconRtl      = "icon-right";
      this.iconLtr      = "icon-left";
    } else {
      this.iconRtl      = "icon-left";
      this.iconLtr      = "icon-right";
    }
  }

  goBasket(){
    this.navCtrl.push("BasketPage");
  }

  goHome(){
    this.navCtrl.push("HomePage");
  }

  goComplet(){

      this.navCtrl.push('MaintenanceSectionPage', { 'id': JSON.parse(localStorage.getItem('hdaaeq_order_serves_id')) });

  }

}
