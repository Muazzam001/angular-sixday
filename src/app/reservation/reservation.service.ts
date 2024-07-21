import { Injectable } from '@angular/core';
import { Reservation } from '../shared/models/reservation';
import { StorageService } from '../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor(
    private storageService: StorageService,
  ) {
    let savedEeservations = this.storageService.getlocalStorage('reservation');
    this.reservations = savedEeservations ? savedEeservations : [];
  }

  // CRUD

  getReservations() {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id = id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    this.storageService.setlocalStorage('reservation', this.reservations)
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    this.storageService.setlocalStorage('reservation', this.reservations)
  }

  updateReservation(id: string, reservationUpdate: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === reservationUpdate.id);
    this.reservations[index] = reservationUpdate;
    this.storageService.setlocalStorage('reservation', this.reservations)
  }
}
