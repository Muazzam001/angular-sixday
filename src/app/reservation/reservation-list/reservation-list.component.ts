import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from 'src/app/shared/models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(
    private router: Router,
    private reservationService: ReservationService,
  ) {

  }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  newReservation(): void {
    this.router.navigate(['reservation/create']);
  }

  editReservation(id: string): void {
    // this.reservationService.updateReservation(id);
    this.router.navigate(['reservation/edit', id]);
  }

  deleteReservation(id: string): void {
    this.reservationService.deleteReservation(id);
  }
}
