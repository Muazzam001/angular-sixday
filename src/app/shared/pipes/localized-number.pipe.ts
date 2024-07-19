import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NumberFormats } from '../constants/number-formats';
import { LocalStorageKey } from '../constants/local-storage-keys';
import { Locale } from '../constants/culture-code';

@Pipe({
  name: 'localizedNumber'
})
export class LocalizedNumberPipe implements PipeTransform {

  transform(value: any, format: string) {
    if (value == null) { return ''; }
    if (!format) { format = NumberFormats.twoDecimalPoint; }
    let local = JSON.parse(localStorage.getItem(LocalStorageKey.currentLocale) ?? Locale.default);
    return formatNumber(value, local, format);
  }

}
