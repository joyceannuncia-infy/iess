
import { Component, OnInit } from '@angular/core';
import { AppUtilServices } from '../services/app-util.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss']
})
export class InvestigationComponent implements OnInit {

  constructor(private codeCp: AppUtilServices,
    private _formBuilder: FormBuilder) {

  }
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }


}
