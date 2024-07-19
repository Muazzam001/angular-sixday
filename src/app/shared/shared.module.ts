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
import { PlaceholderImgComponent } from '../components/placeholder-img/placeholder-img.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    // Pipes
    SortPipe,
    NumberOnlyDirective,
    AlphabetOnlyDirective,
    AlphaNumericOnlyDirective,
    ReplaceNullWithDashPipe,
    DomChangedDirective,
    LocalizedTimePipe,
    LocalizedDatePipe,
    LocalizedDateTimePipe,
    LocalizedNumberPipe,
    // Components
    PlaceholderImgComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    // Components
    PlaceholderImgComponent,
    NavigationComponent,
  ],
  providers: [
    SortPipe
  ],
})
export class SharedModule { }
