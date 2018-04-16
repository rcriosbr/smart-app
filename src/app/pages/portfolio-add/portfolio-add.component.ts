import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgModel, FormControl } from '@angular/forms';

import { SelectItem } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';

import { BreadcrumbService } from '../../breadcrumb.service';

import { PortfolioService } from '../../shared/portfolio.service';
import { Portfolio } from '../../shared/portfolio';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css']
})
export class PortfolioAddComponent implements OnInit, OnDestroy {
  portfolio: Portfolio = new Portfolio();
  masterPortfolio: Portfolio = new Portfolio();
  sub: Subscription;

  constructor(private breadcrumbService: BreadcrumbService, private portfolioService: PortfolioService, private route: ActivatedRoute, private router: Router) {
    this.breadcrumbService.setItems([
      { label: 'Portfolio' },
      { label: 'New' }
    ]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.portfolioService.get(id).subscribe((p: Portfolio) => {
          if (p) {
            this.masterPortfolio = p;
            this.portfolio.master = this.masterPortfolio;
          } else {
            console.log(`Portfolio with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/portfolio-list']);
  }

  save(form: NgForm) {
    this.portfolioService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
