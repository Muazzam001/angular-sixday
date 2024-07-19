import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { StrongPasswordRegx } from 'src/app/shared/constants/regex';
import Validation from 'src/app/shared/utils/validation';

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

  constructor(
    private formBuilder: FormBuilder,
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
            Validators.nullValidator],
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
          ]
        ],
        guestPhone: [
          '',
          [
            Validators.required,
            Validators.nullValidator,
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
            Validators.requiredTrue,
          ]
        ],
      },
      {
        validators: [Validation.match('guestPassword', 'guestPasswordConfirm')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reservationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.reservationForm.valid) {
      console.log('Form is valid');
      console.log(JSON.stringify(this.reservationForm.value, null, 2));
    }
    else {
      console.log('Form is not valid');
      console.log(JSON.stringify(this.reservationForm.value, null, 2));
    }

  }

  onReset(): void {
    this.submitted = false;
    this.reservationForm.reset();
  }

}
