import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models';

@Component({
  selector: 'app-appoinment-details',
  templateUrl: './appoinment-details.component.html',
  styleUrls: ['./appoinment-details.component.css']
})
export class AppoinmentDetailsComponent implements OnInit {

  @Input()
  appointment: Appointment;

  constructor(
    private appointmentService: AppointmentService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('appointment_id')),
        switchMap(id => this.appointmentService.getAppointmentByID(id))
      )
      .subscribe(appointment => (this.appointment = appointment));
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this Appointment?') === true) {
      this.appointmentService
        .getAppointmentByID(id)
        .subscribe((response: any) => {
          this.appointmentService.deleteAppointment(id).subscribe((appointment: Appointment) => {
              this.router.navigateByUrl('/');
            });
        });
    }
  }

}
