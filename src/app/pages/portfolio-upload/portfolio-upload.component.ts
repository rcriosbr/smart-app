import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-portfolio-upload',
  templateUrl: './portfolio-upload.component.html',
  styleUrls: ['./portfolio-upload.component.css']
})
export class PortfolioUploadComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private route: ActivatedRoute, private router: Router) {
    this.breadcrumbService.setItems([
      { label: 'Portfolio', routerLink: '/portfolio-list' },
      { label: 'Import' }
    ]);
  }

  ngOnInit() {
  }

  onUpload(event) {
    this.router.navigate(['/portfolio-list']);
  }
}
