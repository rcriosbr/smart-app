import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-benchmark-upload',
  templateUrl: './benchmark-upload.component.html',
  styleUrls: ['./benchmark-upload.component.css']
})
export class BenchmarkUploadComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private route: ActivatedRoute, private router: Router) {
    this.breadcrumbService.setItems([
      { label: 'Benchmark', routerLink: '/portfolio-list' },
      { label: 'Import' }
    ]);
  }

  ngOnInit() {
  }

  onUpload(event) {
    this.router.navigate(['/benchmark-list']);
  }
}
