import { Component, ViewChild } from '@angular/core';
import { MenuController, Events, Nav, ToastController, AlertController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//For Translation
import { TranslateService } from '@ngx-translate/core';

import { SocialSharing } from '@ionic-native/social-sharing';
import {ApiProvider} from "../service/api/api";
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;

  rootPage:any   = "ChooseLangPage";
  image          = 'assets/imgs/image.png';
  login_user     = 0;
  hiden          = true;
  user;
  name;
  loginText;
  logoutText;
  text;

  constructor( 
    statusBar               : StatusBar, 
    splashScreen            : SplashScreen,
    private translate       : TranslateService, 
    public event            : Events,
    private oneSignal       : OneSignal,
    public menu             : MenuController,
    private socialSharing   : SocialSharing,
    public toastCtrl        : ToastController,
    public api              : ApiProvider,
    public alertCtrl        : AlertController,
    public platform         : Platform) {

    if(localStorage.getItem('hdaaeq_user_lang') == 'en')
    {
      this.platform.setDir('ltr',true)

      this.menu.enable(true, 'left');
      this.menu.swipeEnable(true, "left"); 
      this.menu.enable(false, 'right');
      this.menu.swipeEnable(false, 'right');

      translate.setDefaultLang('en');
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }else{
      this.platform.setDir('rtl',true);

      this.menu.enable(true, 'right');
      this.menu.swipeEnable(true, 'right');
      this.menu.enable(false, 'left');
      this.menu.swipeEnable(false, "left"); 

      translate.setDefaultLang('ar');
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    }

    platform.ready().then(() => {

      this.oneSignal.startInit('55c1b945-034e-4997-9160-1bade40d0aa4', '356792094039');

      this.oneSignal.inFocusDisplaying(2);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();

      this.oneSignal.getIds().then((id) => {
        localStorage.setItem('Hadaaq_DeviceId',JSON.stringify(id.userId));
      });
      
    });

    if(localStorage.getItem('hdaaeq_user_Data') === null) {
      this.rootPage     = 'LoginPage';
    } else {
      this.rootPage     = 'HomePage';
    }
    

    if(localStorage.getItem('hdaaeq_user_lang') === null) {
      this.rootPage     = 'ChooseLangPage';
    }

    this.loginText      = (this.translate.currentLang == 'en') ? 'LogIn'  : 'تسجيل الدخول';
    this.logoutText     = (this.translate.currentLang == 'en') ? 'LogOut' : 'تسجيل خروج';
    
    //this.login_user     = 0;
    //this.text           = this.loginText;
    
    event.subscribe('user_is_in', (data) => {
      this.login_user   = 1;
      this.text         = this.logoutText;
      this.name         = data.name; 
      this.image        = data.image;
    });

    event.subscribe('user_is_out', (data) => {
      this.login_user   = 0;
      this.text         = this.loginText;
      this.name         = data.name; 
      this.image        = data.image;
    });

    // translate.setDefaultLang('ar');
    // translate.setDefaultLang('ar');
    // this.translate.setDefaultLang('ar');
    // this.translate.use('ar');

    // this.event.subscribe('change_lang',()=>{
    //   translate.setDefaultLang('ar');
    //   this.translate.setDefaultLang('ar');
    //   this.translate.use('ar');
    // })

 

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.user     = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
    
    if(this.user != null){
      this.image  = this.user.image;
      this.name   = this.user.name;
      this.text   = this.logoutText;
    }else{
      this.text   = this.loginText;
    }

  }


  ionViewWillEnter(){}

  goHome(){
    this.navCtrl.push("HomePage")
  }

  goRequest(){
    var message   = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
    var cansel    = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
    var ok        = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
    if(localStorage.getItem('hdaaeq_user_Data')) {
      this.navCtrl.push("RequestPage")
    }else{
      const confirm = this.alertCtrl.create({
        message: message,
        buttons: [
          {
            text: ok,
            handler: () => {
              this.navCtrl.push("LoginPage");
            }
          },
          {
            text: cansel,
            handler: () => {
              
            }
          }
        ]
      });
      confirm.present();
    }
  }

  goClosed(){
    var message   = (this.translate.currentLang == 'en') ? 'You Must Login first ?' : 'يجب عليك التسجيل أولاََ ؟';
    var cansel    = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
    var ok        = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
    if(localStorage.getItem('hdaaeq_user_Data')) {
      this.navCtrl.push("ClosedOrdersPage")
    }else{
      const confirm = this.alertCtrl.create({
        message: message,
        buttons: [
          {
            text: ok,
            handler: () => {
              this.navCtrl.push("LoginPage");
            }
          },
          {
            text: cansel,
            handler: () => {
              
            }
          }
        ]
      });
      confirm.present();
    }
  }

  goAbout(){
    this.navCtrl.push("AboutPage")
  }

  goShare(){
      
    this.socialSharing.shareWithOptions({
         message: `How Have U been`
      }).then(() => {
            console.log('Shared!');
      }).catch((err) => {
            console.log('Oops, something went wrong:', err);
      });  
  }

  goContact(){
    this.navCtrl.push("ContactPage")
  }

  goSetting(){
    this.navCtrl.push("SettingPage")
  }

  goLogIn(){
    if(localStorage.getItem('hdaaeq_user_Data') == null || localStorage.getItem('hdaaeq_user_Data') == undefined){
      this.navCtrl.push("LoginPage");
    }else{
      var message   = (this.translate.currentLang == 'en') ? 'Do you want to exit the application ?' : 'هل تريد الخروج من التطبيق ؟';
      var cansel    = (this.translate.currentLang == 'en') ? 'cansel' : 'إلغاء';
      var ok        = (this.translate.currentLang == 'en') ? 'ok' : 'موافق';
      const confirm = this.alertCtrl.create({
        message: message,
        buttons: [
          {
            text: ok,
            handler: () => {
              this.event.publish('user_is_out',{name : '', image : 'assets/imgs/image.png'});
              localStorage.removeItem('hdaaeq_user_Data');
              localStorage.removeItem('hdaaeq_user_Data_register');
              this.navCtrl.push("LoginPage");
              // this.event.publish('user_logout');
            }
          },
          {
            text: cansel,
            handler: () => {
              
            }
          }
        ]
      });
      confirm.present();
    }
      
  }
  


}

