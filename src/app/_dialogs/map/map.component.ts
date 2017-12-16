import {Component, Inject, Input, OnInit} from '@angular/core';
import {MapService} from '../../../providers/MapService';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: string;
  lng: string;
  @Input() address: string;
  replacedAddress: string;
  constructor(public geocodingAPIService: MapService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<MapComponent>) {
    this.address = data.item;
    this.replacedAddress = this.replaceLineBreak(this.address);
    this.updateLatLngFromAddress();
  }

  ngOnInit() {
    this.replacedAddress = this.replaceLineBreak(this.address);
    this.updateLatLngFromAddress();
  }

  replaceLineBreak(s: string) {
    return s && s.replace(' ', '%20');
  }

  updateLatLngFromAddress() {
    this.geocodingAPIService
      .findFromAddress(this.replacedAddress)
      .subscribe(response => {
        if (response.status === 'OK') {
          this.lat = response.results[0].geometry.location.lat;
          this.lng = response.results[0].geometry.location.lng;
        } else if (response.status === 'ZERO_RESULTS') {
          console.log('geocodingAPIService', 'ZERO_RESULTS', response.status);
        } else {
          console.log('geocodingAPIService', 'Other error', response.status);
        }
      });
  }

}
