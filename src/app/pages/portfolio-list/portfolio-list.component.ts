import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

import { Portfolio } from '../../shared/portfolio';
import { PortfolioService } from '../../shared/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  portfolios: Portfolio[];
  cols: any[];

  constructor(private breadcrumbService: BreadcrumbService, private portfolioService: PortfolioService) {
    this.breadcrumbService.setItems([
      { label: 'Portfolio' },
      { label: 'List' }
    ]);
  }

  ngOnInit() {
    this.portfolioService.getAll().subscribe(data => { this.portfolios = data; });
  }

}
