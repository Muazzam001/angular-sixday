import { Component, OnInit } from '@angular/core';
import { appConstants } from '../../shared/constants/app-constants';
import { StorageService } from '../../shared/services/storage.service';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = []

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    let hasAppointments = this.storageService.getlocalStorage(appConstants.appointments);

    this.appointments = hasAppointments ? hasAppointments : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.storageService.setlocalStorage(appConstants.appointments, this.appointments);

      this.newAppointmentTitle = '';

      this.newAppointmentDate = new Date();

    } else {
      alert("Please enter in the fields");
    }
  }

  deletAppointment(index: number) {
    this.appointments.splice(index, 1);
    this.storageService.setlocalStorage(appConstants.appointments, this.appointments);
  }
}
