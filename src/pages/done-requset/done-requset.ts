import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-done-requset',
  templateUrl: 'done-requset.html',
})
export class DoneRequsetPage {

  iconRtl     = "icon-right";
  iconLtr     = "icon-right";

  constructor(
    public navCtrl          : NavController,
     public navParams       : NavParams,
     public platform        : Platform) {
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoneRequsetPage');
    if (this.platform.isRTL) {
      this.iconRtl      = "icon-right";
      this.iconLtr      = "icon-left";
    } else {
      this.iconRtl      = "icon-left";
      this.iconLtr      = "icon-right";
    }
  }

  goHome(){
    this.navCtrl.push("HomePage");
  }

}
