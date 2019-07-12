import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models';

@Component({
  selector: 'app-appoinment-new',
  templateUrl: './appoinment-new.component.html',
  styleUrls: ['./appoinment-new.component.css']
})
export class AppoinmentNewComponent implements OnInit {
  appointment = new Appointment();
  err = '';

  @Output()
  createNew = new EventEmitter<Appointment>();

  constructor(
    private readonly appointmentService: AppointmentService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    this.appointment.name = form.value.name;
    this.appointment.time = form.value.time;
    this.appointment.complaint = form.value.complaint;
    event.preventDefault();

    // if (this.appointment.time ) {
    //   console.log('Please make sure that the values are valid.');
    //   this.err = 'Please make sure that the values are valid.';
    // }

    this.appointmentService.createAppointment(this.appointment)
    .subscribe((appointment: Appointment) => {
      console.log(appointment);
      console.log('Appt ID', appointment._id);
      this.createNew.emit(this.appointment);
      this.router.navigateByUrl('/');
      });
    form.reset();
  }

}
