import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject} from '../Models/LocationData';
@Injectable({
  providedIn: 'root'
})
export class LocationproviderService {

  constructor(private http: HttpClient) { }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
  getPosition2(latitude,longitude):Observable<RootObject>{ 
    return this.http.get<RootObject>(`https://geocode.xyz/${latitude},${longitude}?json=1`);
  }
}
