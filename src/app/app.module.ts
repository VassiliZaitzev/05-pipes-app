import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//configuración de locale de la app
import localeEsHn from '@angular/common/locales/es-HN';
import localeFrCa from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHn);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID, useValue: 'fr-CA'
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
