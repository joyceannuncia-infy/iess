import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule} from './modules/app-material.module';
import { AppPluginsModule} from './modules/app-plugins.module';

import  { LoginComponent } from './login/login.component';
import { TracerComponent } from './tracer/tracer.component'
import { ProfileComponent } from './profile/profile.component';
import { WorkStatsComponent } from './work-stats/work-stats.component';
import { InvestigationComponent } from './investigation/investigation.component';
import { MonitoringComponent } from './monitoring/monitoring.component';


const routerOptions: ExtraOptions = {
    useHash: true,
    enableTracing: true,
    //scrollPositionRestoration: 'enabled',
    //anchorScrolling: 'enabled',
   // scrollOffset: [0, 64]
     
};


const innerpageRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tracer', component: TracerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'work-stats', component: WorkStatsComponent },
  { path: 'investigate', component: InvestigationComponent },
  { path: 'monitor', component: MonitoringComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];


@NgModule({
  declarations: [
   
  ],
  imports: [
   CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AppMaterialModule,
    AppPluginsModule,
    RouterModule.forRoot( innerpageRoutes, routerOptions )
  ],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AppMaterialModule, 
    AppPluginsModule,
    RouterModule
  ],
  entryComponents: [],

})
export class AppRoutingModule { }