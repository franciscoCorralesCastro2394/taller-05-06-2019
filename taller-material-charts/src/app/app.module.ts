import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PrincipalComponent } from './componentes/principal/principal.component';
import {MatCardModule} from '@angular/material/card';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule, MatTableModule,MatFormFieldModule,MatPaginatorModule,MatInputModule,
    MatSidenavModule,
    MatTooltipModule, 
    MatCardModule,
    MatIconModule, MatToolbarModule,MatSnackBarModule,MatListModule,NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
