import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {
  API_KEY: string;
  API_URL: string;
  constructor(private http: Http) {
    this.API_KEY = '';
    this.API_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${this.API_KEY}&address=`;
  }

  findFromAddress(address: string): Observable<any> {
    const compositeAddress = [address];
    const url = `${this.API_URL}${compositeAddress}`;
    return this.http.get(url).map(response => <any> response.json());
  }
}
