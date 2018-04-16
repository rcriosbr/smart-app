import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'app-deal-upload',
  templateUrl: './deal-upload.component.html',
  styleUrls: ['./deal-upload.component.css']
})
export class DealUploadComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService, private route: ActivatedRoute, private router: Router) {
    this.breadcrumbService.setItems([
      { label: 'Deal', routerLink: '/deal-list' },
      { label: 'Import' }
    ]);
  }

  ngOnInit() {
  }

  onUpload(event) {
    this.router.navigate(['/deal-list']);
  }
}
