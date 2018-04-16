import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { SelectItem } from 'primeng/primeng';
import { BreadcrumbService } from '../../breadcrumb.service';

import { DealService } from '../../shared/deal.service';
import { Deal } from '../../shared/deal';
import { Portfolio } from '../../shared/portfolio';
import { PortfolioService } from '../../shared/portfolio.service';

@Component({
  selector: 'app-deal-do',
  templateUrl: './deal-do.component.html',
  styleUrls: ['./deal-do.component.css']
})
export class DealDoComponent implements OnInit {
  deal: Deal = new Deal();
  selectedPortfolio: Portfolio = new Portfolio();
  portfolios: SelectItem[] = [];
  types: SelectItem[] = [];
  sub: Subscription;

  constructor(private breadcrumbService: BreadcrumbService, private dealService: DealService, private portfolioService: PortfolioService, private route: ActivatedRoute, private router: Router) {
    this.breadcrumbService.setItems([
      { label: 'Deal' },
      { label: 'Do' }
    ]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.portfolioService.get(id).subscribe((p: Portfolio) => {
          if (p) {
            //this.portfolio = p;
          } else {
            console.log(`Portfolio with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });

    //this.portfolioService.getAll().subscribe(data => { this.portfolios = data; });
    this.initPortfolios();

    this.types = [
      { label: 'Select a Transaction Type', value: '' },
      { label: 'BUY', value: 'BUY' },
      { label: 'SELL', value: 'SELL' },
      { label: 'QUOTE_VALUE_UPDATE', value: 'QUOTE_VALUE_UPDATE' }
    ];
  }

  initPortfolios() {
    this.portfolios.push({ label: 'Select a Porfolio', value: null });
    this.portfolioService.getAll().subscribe(data => {
      for (let entry of <Array<any>>data) {
        this.portfolios.push({ label: entry.name, value: { id: entry.id, name: entry.name } });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/deal-list']);
  }

  save(form: NgForm) {
    this.dealService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
