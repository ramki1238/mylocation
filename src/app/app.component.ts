import { Component,OnInit  } from '@angular/core';
import {  RootObject } from './Models/LocationData';
import { LocationproviderService } from './providers/locationprovider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

ResultentData:RootObject
spinnercss="";
cheskerr=false;
  constructor(private locationService:LocationproviderService){}
  ngOnInit() { this.getLatlong(); }

  getLatlong(){
    this.locationService.getPosition().then(pos=>
    {
       console.log(`Positon: ${pos.lng} ${pos.lat}`);
       this.getLatData(pos.lat,pos.lng);
    });
  }

  getLatData(lat,lng){ 
    this.locationService.getPosition2(lat,lng).subscribe(pos=>{
      this.ResultentData=pos;
      this.spinnercss="d-none";
      this.cheskerr=false;

    },(err)=>{

      console.log(err);
      this.cheskerr=true;
      this.getLatlong();
    })
  }
 

}
