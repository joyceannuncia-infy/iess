import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-stats',
  templateUrl: './work-stats.component.html',
  styleUrls: ['./work-stats.component.scss']
})
export class WorkStatsComponent implements OnInit {
  currentDate : Date;
  constructor() { }

  ngOnInit() {
   this.currentDate = new Date();
  }

}
