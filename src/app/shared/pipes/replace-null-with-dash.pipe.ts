import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNullWithDash'
})
export class ReplaceNullWithDashPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
