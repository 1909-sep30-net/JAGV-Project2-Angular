import { Component, AfterViewInit} from
  '@angular/core';
import {environment} from "src/environments/environment";
declare var google: any;


function calculateAndDisplayRoute() {
  let directionsService = new google.maps.DirectionsService;
  let directionsRenderer = new google.maps.DirectionsRenderer;
  directionsRenderer.setOptions({
    map: new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: { lat: 35.85, lng: -87.65 }
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

function deliverPizzas() {
  let deliveries = [];
  let customers = document.getElementById('waypoints');
  let houses = customers.getElementsByTagName('option');
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].selected) {
      deliveries.push({
        orders: houses[i].value,
      });
    }
  }
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  stops = [
    { name: "Liv+", value: "1001 S Center St, Arlington, TX 76010" },
    { name: "Bakersfield", value: "bakersfield, ca" }
  ];

  ngAfterViewInit() {
    window.document.head.appendChild(environment.s);
    calculateAndDisplayRoute();
  }
  deliverPizzas() {
    console.log("success");
  }

}
