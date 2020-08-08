import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ConstantPool } from '@angular/compiler';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  busNumber: string;
  @ViewChild(MapInfoWindow, { static: true }) infoWindow: MapInfoWindow;
  constructor(public router: Router, private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.getBusInfo()
  }



  center = { lat: 12.9716, lng: 77.5946 };
  markerOptions = {
    draggable: false,
    labelClass: 'marker_labels', labelAnchor: '12 60', labelContent: 'title',
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  };
  markerPositions = [{ lat: 12.9716, lng: 77.5946, title: 'hello' }, { lat: 12.2958, lng: 76.6394 }, { lat: 12.9716, lng: 77.5946 }];
  zoom = 8;
  display?: google.maps.LatLngLiteral;

  getBusInfo() {
    let url = '/assets/JSON/busInfo.json'
    this.commonService.doAsyncTask('GET', url,).subscribe(
      result => {
        this.markerPositions = result.map((eachBus) => {
          return {
            ...eachBus,
            lat: parseFloat(eachBus.Lat.replace('° N', '')),
            lng: parseFloat(eachBus.Long.replace('° E', ''))
          }
        });

        console.log(this.markerPositions);

      },
      error => {
      });
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker, details) {
    console.log(details);
    this.commonService.setcacheData(details);
    this.busNumber = details.BusName;
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  BusDetails() {
    this.router.navigate(['/details']);
  }

}
