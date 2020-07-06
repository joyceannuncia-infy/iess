import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editMode: boolean = false;
  editProfileForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editProfileForm = new FormGroup({
      "phoneNumber": new FormControl(),
      "email": new FormControl("abc@gmail.com"),
      "primaryLanguage": new FormControl(),
      "secondaryLanguage": new FormControl(),
      "thirdLanguage": new FormControl(),
      "startTime": new FormControl(),
      "endTime": new FormControl(),
      "timeZone": new FormControl(),
      "weeklyOffDays": new FormControl(),
      "address1": new FormControl(),
      "address2": new FormControl(),
      "city": new FormControl(),
      "state": new FormControl(),
      "zip": new FormControl()
    });
  }

  editProfile(){
    this.editMode = true;
  }


}
