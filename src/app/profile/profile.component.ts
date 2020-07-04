import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editMode: boolean = false;
  constructor() { }
disabled : true;
  ngOnInit() {
  }

  editProfile(){
    this.editMode = true;
  }

}
