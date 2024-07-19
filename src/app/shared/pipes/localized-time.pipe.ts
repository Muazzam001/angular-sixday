import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizedTime'
})
export class LocalizedTimePipe implements PipeTransform {

  transform(value: any, locale: any): any {
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return date.toLocaleDateString(locale, options);
  }

}
