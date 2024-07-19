import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortPipe } from './pipes/sort.pipe';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { AlphabetOnlyDirective } from './directives/alphabet-only.directive';
import { AlphaNumericOnlyDirective } from './directives/alpha-numeric-only.directive';
import { ReplaceNullWithDashPipe } from './pipes/replace-null-with-dash.pipe';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { DomChangedDirective } from './directives/dom-changed.directive';
import { LocalizedTimePipe } from './pipes/localized-time.pipe';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';
import { LocalizedDateTimePipe } from './pipes/localized-date-time.pipe';
import { LocalizedNumberPipe } from './pipes/localized-number.pipe';


@NgModule({
  declarations: [
    SortPipe,
    NumberOnlyDirective,
    AlphabetOnlyDirective,
    AlphaNumericOnlyDirective,
    ReplaceNullWithDashPipe,
    NavigationComponent,
    DomChangedDirective,
    LocalizedTimePipe,
    LocalizedDatePipe,
    LocalizedDateTimePipe,
    LocalizedNumberPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    SortPipe
  ],
})
export class SharedModule { }
