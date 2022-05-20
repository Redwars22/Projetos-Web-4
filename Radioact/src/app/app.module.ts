import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { BalanceMonitorComponent } from '../balance-monitor/balance-monitor.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    BalanceMonitorComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
