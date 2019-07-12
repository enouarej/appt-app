import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit, OnDestroy {
  appointments: Appointment[] = [];
  sub: Subscription;
  selectedAppointment: Appointment;

  constructor(
    private appointmentService: AppointmentService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    console.log(this.appointmentService);
    this.sub = this.appointmentService.getAppointments()
      .subscribe(appointments => {
        this.appointments = appointments;
      });
  }

  onSelect(appointment: Appointment) {
    console.log('Selecting Appointment', appointment);
    this.selectedAppointment = this.selectedAppointment === appointment ? null : appointment;
  }

  onCreate(appointment: Appointment) {
    console.log('Creating Appointment', appointment);
    this.appointmentService.createAppointment(appointment)
      .subscribe(createdAppointment => {
        console.log(createdAppointment);
        this.appointments.push(createdAppointment);
    });
  }

  onEdit(appointment: Appointment) {
  this.appointmentService.editAppointment(appointment).subscribe(updateAppointment => {
    console.log('updated', updateAppointment);
  });
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
      this.sub.unsubscribe;
      }

}
