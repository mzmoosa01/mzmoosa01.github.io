import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from "./shared/shared.module";
import { AboutComponent } from './pages/about/about.component';
import { ExperianceComponent } from './pages/experiance/experiance.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ExperianceComponent,
    SkillsComponent,
    EducationComponent,
    TimelineComponent,
    HeaderComponent,
    ContactComponent,
    ImageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
