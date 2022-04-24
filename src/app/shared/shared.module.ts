import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  exports: [
    FlexLayoutModule, 
    MatIconModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatChipsModule, 
    MatCardModule, 
    MatProgressBarModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSnackBarModule,
    MatSidenavModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }
