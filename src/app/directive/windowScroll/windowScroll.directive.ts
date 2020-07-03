import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appwindowScroll]'
})
export class WindowscrollDirective {

  constructor(el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
  
 }


 @HostListener('window:scroll', ['$event'])
 public onWindowScroll(e) {
   
      if (window.pageYOffset > 100) {
        let element = document.getElementById('scrollHeader');
        element.classList.add('DSA_stickyHeader');
      } else {
       let element = document.getElementById('scrollHeader');
         element.classList.remove('DSA_stickyHeader'); 
      }
   }


}
