import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateRangeValidator(startDateKey: string, endDateKey: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const startDate = formGroup.get(startDateKey)?.value;
    const endDate = formGroup.get(endDateKey)?.value;

    if (!startDate || !endDate) {
      return null; // If either date is missing, don't validate yet
    }

    return startDate <= endDate ? null : { startDateEndDate: true };
  };
}
