import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ContactTracingService } from '../services/contact-tracing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styleUrls: ['./tracer.component.scss']
})
export class TracerComponent implements OnInit {
  userrole: String;
  username: String;
  casemanagedata: {}[] = [];

  caseId: any;
  tracerId: any;
  age: any;
  page: number = 1;
  modelPage: number = 1;
  contactPage: number = 1;
  tracersData: any = [];
  case: string[] = [];
  calling = false;
  showImageModal: boolean;
  callingMessage: string;
  traceName: string;
  tracerGender: string;
  tracerAge: number;
  tracerImage: any;
  tracerLanguage: any;
  tracerDob: any;
  tracerPrimaryContactNumber: any;
  dateOfBirth: any;
  dateB: any;
  tracerCountry: any;
  tracerAddress: any;
  tracerZip: any;


  constructor(public router: Router, private activatedroute: ActivatedRoute, private modalService: NgbModal, private contactService: ContactTracingService, private http: Http) { }


  ngOnInit() {
    this.userrole = this.role;
    this.username = this.contactService.sharedData
    this.showmyCases();
  }
  showmyCases() {
    this.contactService.getMyCases(this.username).subscribe(result => {
      console.log(result)

      this.casemanagedata = [];
      result.forEach(element => {
        if (element.classification == "Confirmed") {
          console.log("Element---->", element)
          let cases: any = {};
          let name: any = {};
          cases.contactId = element.contactId;
          cases.firstName = element.firstName;
          cases.lastName = element.lastName;
          cases.middleName = element.middleName;
          name.firstName = cases.firstName;
          name.lastName = cases.lastName;
          name.middleName = cases.middleName
          cases.name = name.firstName + ' ' + name.lastName + ' ' + name.middleName;
          cases.dateOfBirth = element.dob;
          cases.address = element.address;
          var dob = element.dob;
          var date = new Date();
          // var year = date.get;
          // console.log("year---->", year)
          var timeDiff = Math.abs(Date.now() - dob);
          cases.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
          console.log(cases.age)
          cases.gender = element.gender;
          cases.location = element.address.city;
          cases.language = element.languageSkills.primaryLanguage;
          cases.tracerID = element.tracerId;
          cases.zipcode = element.address.zip;
          cases.phone = element.phoneNumber;
          if (cases.tracerID == "")
            this.casemanagedata.push(cases)
          // console.log("in show all case method",this.casemanagedata)
        }
      });

      result.forEach(element => {
        // console.log(element)
        if (element.classification != "Confirmed") {
          let cases: any = {};
          let name: any = {};
          cases.contactId = element.contactId;
          cases.firstName = element.firstName;
          cases.lastName = element.lastName;
          cases.middleName = element.middleName;

          name.firstName = cases.firstName;
          name.lastName = cases.lastName;
          name.middleName = cases.middleName
          cases.name = name.firstName + ' ' + name.lastName + ' ' + name.middleName;
          cases.dateOfBirth = element.dob;
          cases.address = element.address;
          var dob = element.dob;
          var date = new Date();
          // var year = date.get;
          // console.log("year---->", year)
          var timeDiff = Math.abs(Date.now() - dob);
          cases.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
          console.log(cases.age)
          cases.gender = element.gender;
          //cases.location = element.address.city;
          var county = element.address;
          cases.location = county.city;
          cases.language = element.languageSkills.primaryLanguage;
          cases.tracerID = element.tracerId;
          cases.zipcode = element.address.zip;
          cases.phone = element.phoneNumber;
          cases.investigationStatus = element.investigationStatus;
          console.log("location " + cases.location);
          console.log("zipcode " + cases.zipcode);
          cases.county = cases.location + '' + cases.zipcode;
          if (cases.tracerID != "")
            this.casemanagedata.push(cases)
        }
      });

    });
  }
  @Input('role') role: String;
  @Input('username') userName: string;

  public openInvestigate() {
    this.router.navigate(["investigate"]);
  }

  openModal(modalContent: any, rowData: any) {
    this.modalService.open(modalContent, {
        windowClass: 'web_custom_modal DSA_modal-sm'
      });
      console.log(rowData);
      this.tracerImage = 'assets/images/avatar-mini-01.png';
      this.traceName = rowData.name;
      this.tracerGender = rowData.gender;
      this.tracerLanguage = rowData.language;
      this.tracerDob = rowData.dateOfBirth;
      this.tracerCountry = rowData.address.country;
      this.tracerAddress = rowData.address.address1;
      this.tracerZip = rowData.zipcode
      this.tracerPrimaryContactNumber = rowData.phone;
  }

}
