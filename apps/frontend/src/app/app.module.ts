import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TechnologyTemplateComponent } from './technology-template/technology-template.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, TechnologyTemplateComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
