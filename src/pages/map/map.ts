import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, Events } from 'ionic-angular';

declare var google;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement
  map: any;
  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public event        : Events,
    public plt          : Platform,
    public viewCtrl     : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap();
  }

  initMap(){

    this.plt.ready().then(() => {
        
        //get address from lat and lng
        var geocoder  = new google.maps.Geocoder();            
        var locations  = new google.maps.LatLng(localStorage.getItem('hdaaeq_user_default_lat'),
        localStorage.getItem('hdaaeq_user_default_lng'));
        localStorage.setItem('hdaaeq_user_map_lat',localStorage.getItem('hdaaeq_user_default_lat'))
        localStorage.setItem('hdaaeq_user_map_lng',localStorage.getItem('hdaaeq_user_default_lng'))
        geocoder.geocode({'latLng': locations}, (results, status) =>{
          if(status == google.maps.GeocoderStatus.OK) {         
            var add=results[0].formatted_address;
            localStorage.setItem('hdaaeq_user_map_address',add)
            this.event.publish('hdaaeq_user_address_done')
          }
        })

        //show map
        var crosshairShape = {coords:[0,0,0,0],type:'rect'}; // floating marker
        const location = new google.maps.LatLng(localStorage.getItem('hdaaeq_user_default_lat'),localStorage.getItem('hdaaeq_user_default_lng'));
        const options = google.maps.MapOptions = {
          center: {lat: 30.0596185, lng: 31.1884236},
          zoom: 13,
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement,options);
        
        //end of show map

        //marker
        var marker = new google.maps.Marker({
          position: location,
          draggable: true,
          icon: 'assets/imgs/map.png',
          animation: 'DROP',
          shape: crosshairShape
        });
        marker.setMap(this.map);
        marker.bindTo('position', this.map, 'center'); // floating marker

          //get lat lng when moveing map
          google.maps.event.addListener(this.map, 'center_changed', () => {
          var location = this.map.getCenter();
          localStorage.setItem('hdaaeq_user_map_lat',location.lat())
          localStorage.setItem('hdaaeq_user_map_lng',location.lng())
          //get address from lat and lng
          var geocoder  = new google.maps.Geocoder();            
          var locations  = new google.maps.LatLng(location.lat(), location.lng());
          geocoder.geocode({'latLng': locations}, (results, status)=> {
            if(status == google.maps.GeocoderStatus.OK) {         
              var add=results[0].formatted_address;
              localStorage.setItem('hdaaeq_user_map_address',add)
              this.event.publish('hdaaeq_user_address_done')
            }
          })
        });
      
    })
  }

  goDone(){
    this.navCtrl.push("DonePage");
  }

}
