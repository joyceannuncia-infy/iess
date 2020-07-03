import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule} from './modules/app-material.module';
import { AppPluginsModule} from './modules/app-plugins.module';
import { AppBootstrapModule} from './modules/app-bootstrap.module';


import { AppUtilServices } from './services/app-util.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
 
 

import { WindowscrollDirective } from './directive/windowScroll/windowScroll.directive';
import { CollapseMenuDirective } from './directive/collapseMenu/collapse-menu.directive';

import { ScrollSpyDirective } from './directive/scrollSpy/scrollSpy.directive';


import { LoginComponent } from './login/login.component';
import { TracerComponent } from './tracer/tracer.component';



 






@NgModule({
  declarations: [
    AppComponent,
    WindowscrollDirective,
    CollapseMenuDirective,
    ScrollSpyDirective,
    LoginComponent,
    TracerComponent
    
    


    
        
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppPluginsModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule
    
   // DocumentRoutingModule 
  ],
  providers: [
    AppUtilServices
    
      ],
  bootstrap: [AppComponent],
  exports:[CollapseMenuDirective]
})
export class AppModule { }