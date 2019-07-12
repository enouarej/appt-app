import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map , switchMap } from 'rxjs/operators';

import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models';

@Component({
  selector: 'app-appoinment-edit',
  templateUrl: './appoinment-edit.component.html',
  styleUrls: ['./appoinment-edit.component.css']
})
export class AppoinmentEditComponent implements OnInit {
  @Output()
  updateAppointment = new EventEmitter<Appointment>();

  @Input()
  appointment: Appointment;

  constructor(
    private readonly appointmentService: AppointmentService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    console.log('Here');
    this.route.paramMap
      .pipe(
        map(params => params.get('appointment_id')),
        switchMap(id => this.appointmentService.getAppointmentByID(id))
      )
      .subscribe(appointment => (this.appointment = appointment));
    console.log('APP', this.appointment);
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('FORM HERE', form.value);
    this.appointment.name = form.value.name;
    this.appointment.time = form.value.time;
    this.appointment.complaint = form.value.complaint;
    console.log('Submitting appointment for edit', this.appointment);
    this.appointmentService.editAppointment(this.appointment)
      .subscribe(appointment => {
        this.appointment = appointment;
        console.log('Update appointment', appointment);
        this.router.navigateByUrl('/');
      });
  }
}
