import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import {HttpHeaders } from '@angular/common/http';
// var cors = require('cors');

const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactTracingService {

  createTracerProfile(form: any, tracerId) {
    const apiUrl = environment.host_service + "/api/addTracerProfile/";
    let headers = new Headers({ "content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    let payload = {'_id': "USA:"+tracerId ,'type': "tracerProfile", 'weeklyOffDays' : "Monday", ...form}
    console.log("payload---->", payload);
    return this.http.post(apiUrl,payload,options).map(result => result.json());
  }

  getAllManagers() {
    const apiUrl = environment.host_service + "/api/getAllManagers";
    return this.http.get(apiUrl).map(result => result.json());
  }

  getMyCases(tracerId: String) {
    const apiUrl = environment.host_service + "/api/getMyCases/"+tracerId;
    return this.http.get(apiUrl).map(result => result.json());
  }
  // setData(username: string) {
  //   throw new Error("Method not implemented.");
  // }
  sharedData : String;

  contactCase() {
    const apiUrl = "https://twilio-app.us-south.cf.appdomain.cloud/";
    return this.http.get(apiUrl).map(result => result.json());
  }

  assignTracer(assignedCaseId: any, assignedTracerId: any) {
    const apiUrl = environment.host_service + "/api/updateAssignment/";
    let headers = new Headers({ "content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    let payload = {'contact': assignedCaseId,'tracer': assignedTracerId}
    console.log("payload--.", payload)
    // payload["feed_name"] = feed_name
    return this.http.post(apiUrl,payload,options).map(result => result.json());
  }

  getTracersList() {
    const apiUrl = environment.host_service + "/api/getTracers";
    return this.http.get(apiUrl).map(result => result.json());
  }
  
  getAllCasesForAdmin() {
    const apiUrl = environment.host_service + "/api/getAllCases";
    return this.http.get(apiUrl).map(result => result.json());
  }

  constructor(private http: Http) { }

  getLoginDetails(username,password){
    // const apiUrl = "http://localhost:3000/searchFeedStatus";
    const apiUrl = environment.host_service + "/api/getUserInfo/"+username+"/"+password;
    let headers = new Headers({ "content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    let payload = {'userName': username,'password': password}
    // payload["feed_name"] = feed_name
    return this.http.get(apiUrl).map(result => result.json());
  }
}
