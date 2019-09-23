import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumerCatalougeService } from '../consumer-catalouge.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profileInfo: FormGroup;
  constructor(private values: ConsumerCatalougeService)  {

  }

ngOnInit() {
    this.profileInfo = new FormGroup({
      FirstName : new FormControl(),
      LastName : new FormControl(),
      Email  : new FormControl(),
      Address  : new FormControl(),
      PhoneNumber : new FormControl(),
      ZipCode  : new FormControl(),
      City  : new FormControl(),
      state: new FormControl(),
      Location: new FormControl()
  });

  }
saveuser() {
    // tslint:disable-next-line:max-line-length
 // tslint:disable-next-line:max-line-length
    this.values.updateProfile(this.profileInfo.get('FirstName').value, this.profileInfo.get('LastName').value, this.profileInfo.get('Email').value, this.profileInfo.get('Address').value, this.profileInfo.get('PhoneNumber').value, this.profileInfo.get('ZipCode').value,this.profileInfo.get('City').value, this.profileInfo.get('state').value, this.profileInfo.get('Location').value).subscribe(response => console.log(response));
    }
}
