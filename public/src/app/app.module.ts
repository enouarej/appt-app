import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppoinmentListComponent } from './appointments/appoinment-list/appoinment-list.component';
import { AppoinmentNewComponent } from './appointments/appoinment-new/appoinment-new.component';
import { AppoinmentDetailsComponent } from './appointments/appoinment-details/appoinment-details.component';
import { AppoinmentEditComponent } from './appointments/appoinment-edit/appoinment-edit.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AppoinmentListComponent,
    AppoinmentNewComponent,
    AppoinmentDetailsComponent,
    AppoinmentEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
