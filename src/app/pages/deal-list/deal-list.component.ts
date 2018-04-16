import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../../breadcrumb.service';

import { Deal } from '../../shared/deal';
import { DealService } from '../../shared/deal.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
  deals: Deal[];
  cols: any[];

  constructor(private breadcrumbService: BreadcrumbService, private dealService: DealService) {
    this.breadcrumbService.setItems([
      { label: 'Deal' },
      { label: 'List' }
    ]);
  }

  ngOnInit() {
    this.dealService.getAll().subscribe(data => { this.deals = data; });
  }

}
