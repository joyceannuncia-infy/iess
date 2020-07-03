import { NgModule } from '@angular/core';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { Ng5SliderModule } from 'ng5-slider';
 



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    minScrollbarLength: 20,
    maxScrollbarLength: 80
  };

@NgModule({
  declarations: [],
  imports: [
    BsDatepickerModule.forRoot(), 
    PopoverModule.forRoot(),
    PerfectScrollbarModule,
    NgbModule,
    CarouselModule,
    NgxMaterialTimepickerModule,
    Ng5SliderModule
  
   
  ],
  exports: [
    PerfectScrollbarModule,
    NgbModule,
    CarouselModule,
    NgxMaterialTimepickerModule,
    BsDatepickerModule,
    PopoverModule,
    Ng5SliderModule

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})


export class AppPluginsModule { 



  
}

