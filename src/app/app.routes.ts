import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './demo/view/dashboard.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { UtilsDemoComponent } from './demo/view/utilsdemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';

import { PortfolioListComponent } from './pages/portfolio-list/portfolio-list.component';
import { PortfolioAddComponent } from './pages/portfolio-add/portfolio-add.component';
import { DealListComponent } from './pages/deal-list/deal-list.component';
import { DealDoComponent } from './pages/deal-do/deal-do.component';
import { DealUploadComponent } from './pages/deal-upload/deal-upload.component';
import { PortfolioUploadComponent } from './pages/portfolio-upload/portfolio-upload.component';
import { DealJournalComponent } from './pages/deal-journal/deal-journal.component';
import { BenchmarkUploadComponent } from './pages/benchmark-upload/benchmark-upload.component';
import { BenchmarkListComponent } from './pages/benchmark-list/benchmark-list.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'sample', component: SampleDemoComponent },
    { path: 'forms', component: FormsDemoComponent },
    { path: 'data', component: DataDemoComponent },
    { path: 'panels', component: PanelsDemoComponent },
    { path: 'overlays', component: OverlaysDemoComponent },
    { path: 'menus', component: MenusDemoComponent },
    { path: 'messages', component: MessagesDemoComponent },
    { path: 'misc', component: MiscDemoComponent },
    { path: 'empty', component: EmptyDemoComponent },
    { path: 'charts', component: ChartsDemoComponent },
    { path: 'file', component: FileDemoComponent },
    { path: 'utils', component: UtilsDemoComponent },
    { path: 'documentation', component: DocumentationComponent },
    { path: 'portfolio-list', component: PortfolioListComponent },
    { path: 'portfolio-add', component: PortfolioAddComponent },
    { path: 'portfolio-add/:id', component: PortfolioAddComponent },
    { path: 'deal-list', component: DealListComponent },
    { path: 'deal-journal', component: DealJournalComponent },
    { path: 'deal-do', component: DealDoComponent },
    { path: 'deal-do/:id', component: DealDoComponent },
    { path: 'deal-upload', component: DealUploadComponent },
    { path: 'portfolio-upload', component: PortfolioUploadComponent },
    { path: 'benchmark-list', component: BenchmarkListComponent },
    { path: 'benchmark-upload', component: BenchmarkUploadComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
