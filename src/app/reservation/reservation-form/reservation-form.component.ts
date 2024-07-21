import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { StrongPasswordRegx } from 'src/app/shared/constants/regex';
import { Reservation } from 'src/app/shared/models/reservation';
import Validation from 'src/app/shared/utils/validation';
import { ReservationService } from './../reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup(
    {
      checkInDate: new FormControl(''),
      checkOutDate: new FormControl(''),
      guestName: new FormControl(''),
      guestEmail: new FormControl(''),
      guestPassword: new FormControl(''),
      guestPasswordConfirm: new FormControl(''),
      guestPhone: new FormControl(''),
      guestRoom: new FormControl(''),
      acceptTerms: new FormControl(false),
    },
  );
  submitted = false;
  idUrlParam?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
  ) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group(
      {
        checkInDate: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
            Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
          ]
        ],
        checkOutDate: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
            Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
          ]
        ],
        guestName: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
            Validators.minLength(3),
          ]
        ],
        guestEmail: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.nullValidator
          ],
        ],
        guestPassword: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
            Validators.minLength(6),
            Validators.maxLength(40),
            Validators.pattern(StrongPasswordRegx),
          ]
        ],
        guestPasswordConfirm: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
            Validators.minLength(6),
            Validators.maxLength(40),
            Validators.pattern(StrongPasswordRegx),
          ],
        ],
        guestPhone: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
            // Validators.pattern('^[- +()0-9]{6,}+$'),
          ],
        ],
        guestRoom: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
          ],
        ],
        acceptTerms: [
          false,
          [
            // Validators.required,
            Validators.requiredTrue,
          ]
        ],
      },
      {
        validators: [
          Validation.match('guestPassword', 'guestPasswordConfirm'),
          // dateRangeValidator('checkInDate', 'checkOutDate')
        ],
      }
    );

    this.idUrlParam = this.activatedRoute.snapshot.paramMap.get('id')!;

    if (this.idUrlParam) {
      let reservation: Reservation | undefined = this.reservationService.getReservation(this.idUrlParam);

      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reservationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.reservationForm.valid) {
      // console.log('Form is valid', JSON.stringify(this.reservationForm.value, null, 2));
      let reservation: Reservation = this.reservationForm.value;
      console.log(reservation);

      // if (reservation) {
      //   reservation.id = this.idUrlParam!;
      //   this.reservationService.updateReservation( reservation.id,reservation);
      // } else {
      //   this.reservationService.addReservation(reservation);
      // }
      this.reservationService.addReservation(reservation)
      this.onReset();
      this.router.navigate(['reservation/list']);
    }
    else {
      console.log('Form is invalid', JSON.stringify(this.reservationForm.value, null, 2));
    }

  }

  onReset(): void {
    this.submitted = false;
    this.reservationForm.reset();
  }

}
