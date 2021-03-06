import { Component, AfterViewInit } from
  '@angular/core';
import { MapService } from '../services/map.service';
import UserModel from '../models/UserModel';
import { environment } from "src/environments/environment.prod";
import AddressModel from '../models/AddressModel';
import { Router } from '@angular/router';
declare var google: any;



function deliverPizzas() {
  // let deliveries = [];
  // let customers = document.getElementById('waypoints');
  // let houses = customers.getElementsByTagName('option');
  // for (let i = 0; i < houses.length; i++) {
  //   if (houses[i].selected) {
  //     deliveries.push({
  //       orders: houses[i].value,
  //     });
  //   }
  // }
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor(
    private api: MapService,
    private router: Router
  ) { }

  usersList: AddressModel[] = [];


  stops = [
    { name: "Liv+", value: "1001 S Center St, Arlington, TX 76010" },
    { name: "Bakersfield", value: "bakersfield, ca" }
  ];

  ngAfterViewInit() {
    window.document.head.appendChild(environment.s);
    this.calculateAndDisplayRoute();
  }

  
  loadAdresses() {
    this.api.getAdresses(4).then(users => {
      this.usersList = users;
      for (let i = 0; i < users.length; i++) {
      this.stops.push({
        name: `${this.usersList[i].street} ${this.usersList[i].city}, ${this.usersList[i].state} ${this.usersList[i].zipCode}`,
        value: `${this.usersList[i].street} ${this.usersList[i].city}, ${this.usersList[i].state} ${this.usersList[i].zipCode}`
        
      });
      console.log("value ->", this.usersList);
    }
    });

  }

  redirect()
  {
    this.router.navigate([""])
  }


  calculateAndDisplayRoute() {
    let directionsService = new google.maps.DirectionsService;
    let directionsRenderer = new google.maps.DirectionsRenderer;
    directionsRenderer.setOptions({
      map: new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 35.85, lng: -87.65 },
        mapTypeId: 'hybrid'
      })
    });
    var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    var points = checkboxArray.getElementsByTagName('option');
    for (var i = 0; i < points.length; i++) {
      if (points[i].selected) {
        waypts.push({
          location: points[i].value,
          stopover: true
        });
      }
    }
  
    directionsService.route({
      origin: "1430 S Cooper St, Arlington, TX 76013",
      destination: "1430 S Cooper St, Arlington, TX 76013",
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    }, (response, status) => {
      if (status === 'OK') {
        document.getElementById("directions-panel").innerHTML = '';
        directionsRenderer.setDirections(response);
        directionsRenderer.setPanel(document.getElementById('directions-panel'));
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  
  }

}
