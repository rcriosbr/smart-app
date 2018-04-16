import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

import { DealService } from '../../shared/deal.service';
import { Journal } from '../../shared/journal';

@Component({
  selector: 'app-deal-journal',
  templateUrl: './deal-journal.component.html',
  styleUrls: ['./deal-journal.component.css']
})
export class DealJournalComponent implements OnInit {
  events: Journal[];

  constructor(private breadcrumbService: BreadcrumbService, private dealService: DealService) {
    this.breadcrumbService.setItems([
      { label: 'Deal' },
      { label: 'Journal' }
    ]);
  }

  ngOnInit() {
    this.events = [];

    this.dealService.getAll().subscribe(data => {
      data.forEach(eachObj => {
        var j = new Journal();
        j.title = eachObj.portfolio.name;
        j.start = eachObj.date;
        j.allDay = false;
        j.displayEventTime = false;

        if (eachObj.type === "BUY") {
          j.color = "#0000FF";
        }

        if (eachObj.type === "SELL") {
          j.color = "#008000";
        }

        this.events.push(j);
      });
    });
  }
}
