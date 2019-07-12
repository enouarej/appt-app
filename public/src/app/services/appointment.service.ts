import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private readonly http: HttpClient) { }
  private readonly base = 'http://localhost:8000/appointments';

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.base}`);
  }

  getAppointmentByID(id: string): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.base}/${id}`);
  }
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.base}/`, appointment);
  }

  editAppointment(data): Observable<Appointment> {
// tslint:disable-next-line: variable-name
    const appointment_id = data._id;
    console.log('lets see in service: ', data);
    return this.http.put<Appointment>(`${this.base}/${appointment_id}`, data);
  }

  deleteAppointment(id: string): Observable<Appointment> {
    return this.http.delete<Appointment>(`${this.base}/${id}`);
  }
}
