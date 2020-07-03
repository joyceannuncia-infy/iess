import {Component, OnInit, ElementRef, HostListener, ViewChild ,AfterViewInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AppUtilServices } from './services/app-util.services';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _eref: ElementRef, 
    private codeCp: AppUtilServices,
    public router: Router
  ) {

  }


  //hide menu on click of body
  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    document.getElementById('mainNav').classList.add('DSA_navHide');
  }
  
  setActiveCls(eventObj){    
    this.codeCp.setActiveClass(eventObj);
  }

  clickactive(eventObj){    
    this.codeCp.clickactiveClass(eventObj);
  }
  

  ngOnInit() {

  
  this.codeCp.middleHeight();
}
ngAfterViewInit(){
  this.notificationHt();
}


DSA_mainHamburger(eventObj){
 this.codeCp.DSA_mainHamburger_Click(eventObj);
}

DSA_mainMenu(){
 this.codeCp.DSA_mainMenu_Click();
}

DSA_mainSearch(){
 this.codeCp.DSA_mainSearch_Click();
}
fullView(){
 this.codeCp.fullView_Click();
}

setCrossLink(thisUrl){
  this.codeCp.setCrossLinkUrl(thisUrl);
}

ripcolor=this.codeCp.ripcolor;         

       codeView=false;
       designView=true;
       
       codeCopy(thisElement){
         this.codeCp.codeCopyFunc(thisElement);
       }

       changeView(thisElement,designViewParam){
        this.codeCp.changeViewService(thisElement,designViewParam );    
        }

        selectCard(eventObj)   {
          this.codeCp.selectCardService(eventObj)
          }
        public scrollConfig: PerfectScrollbarConfigInterface = {
          suppressScrollX: true,
          wheelSpeed :4,
          minScrollbarLength: 20,
          maxScrollbarLength: 80
        };
      
        locations: location[] = [
          {value: 'Informations', viewValue: 'Informations'},
          {value: 'Actions', viewValue: 'Actions'}
          ];
        selectedLocation = 'Informations';
      
        setpreference(){
          this.tabs.realignInkBar();
          document.getElementById("NotificationCtr").style.display='none';
          document.getElementById("PreferenceCtr").style.display='block';
        }
        backtoNotification(){
          document.getElementById("NotificationCtr").style.display='block';
          document.getElementById("PreferenceCtr").style.display='none';
      
        }
      
        DSA_toggleRightpanel(){
          this.codeCp.DSA_toggleRightpanel_Click();
        }

      @ViewChild('tabs', {static: false}) tabs;
      selectedIndex: number;

      isHidden: boolean = true;

      notificationHt(){
   
        var windowHeight2 = window.innerHeight;
        var windowWidth2 = window.innerWidth;
        var footerHeight2= 40;
        var headerOuterHeight2;
        headerOuterHeight2 =72;
        var contentHt2=(windowHeight2)-(headerOuterHeight2+footerHeight2+100);
        var scrollElement=document.querySelectorAll('.DSA_wb-notificationScroll');
        scrollElement.forEach(function(eachList) {
          (eachList as HTMLElement).style.height = (contentHt2)+'px';
        });
      
       }


}
      
export interface location {
  value: string;
  viewValue: string;
}



export interface Cityname {
 value: string;
 viewValue: string;
}
