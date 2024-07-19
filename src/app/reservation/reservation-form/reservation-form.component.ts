import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', [Validators.required, Validators.nullValidator]],
      checkOutDate: ['', [Validators.required, Validators.nullValidator]],
      guestName: ['', [Validators.required, Validators.nullValidator, Validators.minLength(3)]],
      guestEmail: ['', [Validators.required, Validators.email, Validators.nullValidator]],
      guestPhone: ['', [Validators.required, Validators.nullValidator]],
      guestRoom: ['', [Validators.required, Validators.nullValidator]],
    });
  }

  onReservationSubmit() {
    if (this.reservationForm.valid) {
      console.log('valid');
    }
  }

}
