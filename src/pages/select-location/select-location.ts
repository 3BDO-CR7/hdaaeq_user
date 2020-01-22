import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ViewController, Platform, ToastController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import {ApiProvider} from "../../service/api/api";

declare var google;
@IonicPage()
@Component({
  selector: 'page-select-location',
  templateUrl: 'select-location.html',
})
export class SelectLocationPage {
  @ViewChild('map') mapElement
  map: any;
  model:any={address:"", lang:"",lat: "",lng:"",user_id: ""}
  user_id;
  lating;
  luging;
  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public event        : Events,
    public plt          : Platform,
    public viewCtrl     : ViewController,
    public translate    : TranslateService,
    public api          : ApiProvider,
    public toastCtrl    : ToastController) {

      

  }

  ionViewDidLoad() {

    this.user_id          = JSON.parse(localStorage.getItem('hdaaeq_user_Data'));
    this.model.user_id    = this.user_id.id;
    this.model.lang       = this.translate.currentLang;
    
    this.initMap();

    this.lating = JSON.parse(localStorage.getItem('hdaaeq_map_user_lat')); 

    this.luging = JSON.parse(localStorage.getItem('hdaaeq_map_user_lng'));

  }

  // initMap(){

  //   this.plt.ready().then(() => {
        
  //       //get address from lat and lng
  //       var geocoder  = new google.maps.Geocoder();            
  //       var locations  = new google.maps.LatLng(localStorage.getItem('hdaaeq_map_user_lat'),
  //       localStorage.getItem('hdaaeq_map_user_lng'));
  //       localStorage.setItem('hdaaeq_user_map_lat',localStorage.getItem('hdaaeq_map_user_lat'))
  //       localStorage.setItem('hdaaeq_user_map_lng',localStorage.getItem('hdaaeq_map_user_lng'))
  //       geocoder.geocode({'latLng': locations}, (results, status) =>{
  //         if(status == google.maps.GeocoderStatus.OK) {
  //           var add=results[0].formatted_address;
  //           localStorage.setItem('hdaaeq_map_user_address',add)
  //           this.event.publish('hdaaeq_user_address_done')
  //         }
  //       });

  //       this.model.city = localStorage.getItem('hdaaeq_map_user_address')

  //       //show map
  //       var crosshairShape = {coords:[0,0,0,0],type:'rect'};
  //       const location = new google.maps.LatLng(localStorage.getItem('hdaaeq_map_user_lat'),
  //       localStorage.getItem('hdaaeq_map_user_lng'));
  //       const options = google.maps.MapOptions = {
  //         center: {lat: 30.0596185, lng: 31.1884236},
  //         zoom: 13,
  //       }
  //       this.map = new google.maps.Map(this.mapElement.nativeElement,options);
        
  //       //end of show map

  //       //marker
  //       var marker = new google.maps.Marker({
  //         position: location,
  //         draggable: true,
  //         icon: 'assets/imgs/map.png',
  //         animation: 'DROP',
  //         shape: crosshairShape
  //       });
  //       marker.setMap(this.map);
  //       marker.bindTo('position', this.map, 'center'); // floating marker

  //         //get lat lng when moveing map
  //         google.maps.event.addListener(this.map, 'center_changed', () => {
  //         var location = this.map.getCenter();
  //         this.model.lat = location.lat();
  //         this.model.lng = location.lng();
  //         //get address from lat and lng
  //         var geocoder  = new google.maps.Geocoder();            
  //         var locations  = new google.maps.LatLng(location.lat(), location.lng());
  //         geocoder.geocode({'latLng': locations}, (results, status)=> {
  //           if(status == google.maps.GeocoderStatus.OK) {         
  //             var add=results[0].formatted_address;
  //             this.model.address = add;
  //             this.event.publish('hdaaeq_user_address_done')
  //           }
  //         })
  //       });
      
  //   })
  // }

  initMap(){

    var uluru = {lat:this.lating, lng: this.luging};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru,
    mapTypeId: google.maps.MapTypeId.roadmap, scaleControl: true,
    });


    var input = document.getElementById('search');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var contentString =
    '<div id="content">'+
    '<p></p>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var image = 'assets/imgs/map.png';


    var marker = new google.maps.Marker({
    position: {lat: this.lating, lng: this.luging},
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Hello site',
    icon: image,
    label: {
    color: 'white',
    fontSize: '12px'
    }
    });


    var google_maps_geocoder = new google.maps.Geocoder();
    google_maps_geocoder.geocode(
    {'latLng': marker.getPosition()},
    ( results, status) => {
    if (results[0]){
      var add = results[0].formatted_address;
      localStorage.setItem('hdaaeq_map_Provider_address',JSON.stringify(add))
    }

    }
    );


    var geocoder = new google.maps.Geocoder();

    google.maps.event.addListener(marker, 'dragend', function() {

    geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
    if (results[0]) {
    var add = results[0].formatted_address;
    localStorage.setItem('hdaaeq_map_Provider_address',JSON.stringify(add))
    infowindow.setContent(results[0].formatted_address);
    infowindow.open(map, marker);
    }
    }
    }.bind(this));
    }.bind(this));

  }

  dismiss() {
    this.api.editprofile(this.model).subscribe(
      response =>  {

        const toast = this.toastCtrl.create({
        message: response.message,
        duration: 3000
        });
        toast.present();
        if(response.key == "1"){
          // localStorage.setItem('hdaaeq_user_Data',JSON.stringify(response.data));
          this.navCtrl.push("EditProfilePage");
        }else if(response.key == "3"){
          this.navCtrl.push("LoginPage");
        }
    }, error =>{
      // loading.dismiss();
    },()=>{
      // loading.dismiss();
    });
  }

}
