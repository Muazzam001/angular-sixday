import { FormControl } from "@angular/forms";

export interface UserRegistration {
  checkInDate: FormControl<Date>;
  checkOutDate: FormControl<Date>;
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  phone: FormControl<string>;
  room: FormControl<number>;
  acceptTerms: FormControl<boolean>;

}
