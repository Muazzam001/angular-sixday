import {
  AbstractControl
} from '@angular/forms';

export function requireIf(controlName: string) {
  return (x: AbstractControl) => {
    if (x?.parent?.get(controlName)?.value && !x.value) {
      return { required: true };
    }
    return null;
  };
}
export function equalsTo(controlName: string) {
  return (x: AbstractControl) => {
    const control = x?.parent?.get(controlName);
    if (control && control.value && control.value != x.value) {
      return { notMatch: true };
    }
    return null;
  };
}

export function checkControls(...controlNames: string[]) {
  return (x: AbstractControl) => {
    controlNames.forEach((name: string) => {
      const control = x?.parent?.get(name);
      if (control) control.updateValueAndValidity();
    });
    return null;
  };
}
