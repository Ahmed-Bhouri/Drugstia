import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProtocolsPageComponent } from './pages/protocols-page/protocols-page.component';
import { ProtocolPageComponent } from './pages/protocol-page/protocol-page.component';
import { DciPageComponent } from './pages/dci-page/dci-page.component';
import { MedicamentPageComponent } from './pages/medicament-page/medicament-page.component';
import { EtablissementPageComponent } from './pages/etablissement-page/etablissement-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EtablissementStockPageComponent } from './pages/etablissement-stock-page/etablissement-stock-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    ProtocolsPageComponent,
    ProtocolPageComponent,
    DciPageComponent,
    MedicamentPageComponent,
    EtablissementPageComponent,
    NavbarComponent,
    EtablissementStockPageComponent,
    ReportPageComponent,
    ReportsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
