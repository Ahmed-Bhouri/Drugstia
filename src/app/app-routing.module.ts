import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DciPageComponent } from './pages/dci-page/dci-page.component';
import { EtablissementPageComponent } from './pages/etablissement-page/etablissement-page.component';
import { EtablissementStockPageComponent } from './pages/etablissement-stock-page/etablissement-stock-page.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProtocolsPageComponent } from './pages/protocols-page/protocols-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'pharmacie/:id', component: EtablissementPageComponent },
  { path: 'grossiste/:id', component: EtablissementPageComponent },
  { path: 'dci/:id', component: DciPageComponent },
  { path: 'medicament/:id', component: DciPageComponent },
  { path: 'stock', component: EtablissementStockPageComponent }, // check self stock
  { path: 'report', component: ReportPageComponent },
  { path: 'reports', component: ReportsPageComponent },
  { path: 'protocols', component: ProtocolsPageComponent }, // Ineas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
