import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  constructor() { }

  today: Date = new Date(new Date().toDateString());
  // Week
  lastWeekStartDate = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7 - 6)).toDateString());
  lastWeekEndDate = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
  nextWeekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 6) % 7 + 7)).toDateString());
  nextWeekEnd: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 6) % 7 + 7 + 6)).toDateString());
  weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 6) % 7)).toDateString());
  weekEnd: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 6) % 7 + 6)).toDateString());

  // Month
  lastStart: Date = new Date(new Date(new Date().setDate(1)).setMonth(new Date(new Date().setDate(1)).getMonth() - 1));
  lastEnd: Date = new Date(new Date().setDate(new Date(new Date().setDate(1)).getDate() - 1));
  monthStart: Date = new Date(new Date(new Date().setDate(1)).toDateString());
  monthEnd: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  nextMonthStart: Date = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 1);
  nextMonthEnd: Date = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() + 2)).setDate(0)).toDateString());

  // Year
  yearStart: Date = new Date(new Date(new Date().getFullYear() - 1, 0, 1).toDateString());
  yearEnd: Date = new Date(new Date(new Date().getFullYear() - 1, 11, 31).toDateString());
  thisYearStart: Date = new Date(new Date(new Date().getFullYear(), 0, 1).toDateString());
  thisYearEnd: Date = new Date(new Date(new Date().getFullYear(), 11, 31).toDateString());
  nextYearStart: Date = new Date(new Date(new Date().getFullYear() + 1, 0, 1).toDateString());
  nextYearEnd: Date = new Date(new Date(new Date().getFullYear() + 1, 11, 31).toDateString());
}
