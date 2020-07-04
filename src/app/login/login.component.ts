import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ContactTracingService } from '../services/contact-tracing.service';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: any;
  public userRole: String;
  loginForm: FormGroup;
  submitted = false;
  sessionId: any;
  showPassError: boolean = false;
  showEmailError: boolean = false;
  username : string;
  password : string;
  loginData:any;
  // loginData : {userName : String, role : String};
  firstName : string;
  lastName : string;
  // userRole : string;


  public constructor(
    private router: Router, 
    private http: Http, 
    private location: Location,
    private formBuilder: FormBuilder,
    private service: ContactTracingService) {
    this.loginData = {loginSuccess:false, userName : String , role : String};

  }

  @Output() valueChange = new EventEmitter();
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


  }

  //Register functionality not needed
  // public registerhere() {
  //   this.router.navigate(["register"]);
  // }

  public forgotPassword() {
    this.router.navigate(["forgot"]);
  }

  public signin() {
    console.log("Sign in");
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let headers = new Headers({ "content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    // this.router.navigate(["home"]);

    this.username = this.loginForm.value.userName;
    this.password = this.loginForm.value.password;
    console.log(this.username)
    // this.username ='C0001'
    // this.password = 'Password';

    // this.router.navigate(["tracer"]);
    
     
    this.setData(this.username)

    this.service.getLoginDetails(this.username,this.password).subscribe(result => {
      console.log("Sigin")
       console.log("result---->", result)
      this.userRole = result['role'][0];
      console.log("userRole---->", this.userRole)
      this.firstName = result['firstName'];
      this.lastName = result['lastName'];
      this.username = this.firstName +" "+ this.lastName;
      this.valueEmit(this.userRole,this.username)
      console.log("userRole---->", this.userRole)

      if(this.userRole == "Manager" || this.userRole == "M"){
        // this.router.navigate(["home"]);
      }
      else{
     
        this.router.navigate(["tracer"]);
      }
    }, error => {
              if (error.status == '501') {
                this.showPassError = true;
                this.showEmailError = false;
              }
              if (error.status == '502') {
                this.showEmailError = true;
                this.showPassError = false;
      
              }
            }
            );
  }
  setData(username: string) {
    this.service.sharedData = username;
  }

  public valueEmit(role: String,username: String){
    console.log("role----->", role)
    this.loginData.loginSuccess = true;
    this.loginData.role = role;
    this.loginData.userName = username;
    this.valueChange.emit(this.loginData)
  }

}
