import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppoinmentListComponent } from './appointments/appoinment-list/appoinment-list.component';
import { AppoinmentNewComponent } from './appointments/appoinment-new/appoinment-new.component';
import { AppoinmentDetailsComponent } from './appointments/appoinment-details/appoinment-details.component';
import { AppoinmentEditComponent } from './appointments/appoinment-edit/appoinment-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AppoinmentListComponent,
  },
  {
    path: 'new',
    component: AppoinmentNewComponent,
  },
  {
    path: 'edit/:appointment_id',
    component: AppoinmentEditComponent,
  },
  {
    path: 'details/:appointment_id',
    component: AppoinmentDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
