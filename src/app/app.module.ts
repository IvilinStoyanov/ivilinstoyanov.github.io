import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/common/components/navbar/navbar.component';
import { HomeModule } from './modules/home/home.module';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#d09c91',
  bgsOpacity: 0.7,
  bgsPosition: 'center-center',
  bgsSize: 60,
  bgsType: 'folding-cube',
  blur: 0,
  delay: 0,
  fgsColor: '#d09c91',
  fgsPosition: 'center-center',
  fgsSize: 110,
  fgsType: 'folding-cube',
  gap: 20,
  logoPosition: 'bottom-right',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgb(255,255,255)',
  pbColor: '#d09c91',
  pbDirection: 'ltr',
  pbThickness: 4,
  hasProgressBar: true,
  maxTime: -1,
  minTime: 500
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
