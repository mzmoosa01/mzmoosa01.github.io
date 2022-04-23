import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  exports: [FlexLayoutModule, MatIconModule, MatButtonModule, MatToolbarModule, MatChipsModule, MatCardModule, MatProgressBarModule]
})
export class SharedModule { }
