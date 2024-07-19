import { DecimalPipe, formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { CultureCode, Locale } from '../constants/culture-code';
import { customDateFormats } from '../constants/date-formats';
import { LocalStorageKey } from '../constants/local-storage-keys';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  format: string = "###,##0.00";

  currentLocale: any = "gb";
  currentLanguage: any = "en";
  userCulture: string = CultureCode.en;

  seprator: any = {
    "decimal": ".",
    "thousand": ""
  };

  constructor(
    private decimalPipe: DecimalPipe,
  ) { }

  toCultureDate(date: Date): any {
    return new Intl.DateTimeFormat(this.userCulture).format(date);
  }
  toCultureCurrency(number: number): any {
    let rounded = Math.round((number + Number.EPSILON) * 100) / 100;
    return rounded;
    // new Intl.NumberFormat(this.userCulture).format(rounded);
  }

  transformDecimal(number: number, format: string = '1.2-2', isPercent: boolean = false): string {
    if (number == undefined)
      return isPercent ? "0.00%" : "0.00";
    if (isPercent)
      return this.decimalPipe.transform(number, format)! + "%";
    else
      return this.decimalPipe.transform(number, format)!;
  }

  transformDecimalNumber(number: number, format: string = '1.2-2'): number {
    if (number == undefined)
      return 0;

    return Number(this.decimalPipe.transform(number, format)!.replace(/,/g, ''));
  }

  getNumber(value: any): number {
    if (value?.length > 0) {
      let val: string = value.replace(this.seprator.minusSign, '-').replace(this.seprator.thousand, ',').replace(this.seprator.decimal, '.').trim();
      let cValue: number = Number(val);
      return cValue
    }
    return 0;
  }



  isNullOrWhitespace(input: any) {
    if (typeof input === 'undefined' || input == null) return true;
    return input.replace(/\s/g, '').length < 1;
  }

  isNullOrZero(input: any) {
    if (typeof input === 'undefined' || input == null) return true;
    return false;
  }

  divideIfNotZero(numerator: any, denominator: any) {
    if (denominator === 0 || isNaN(denominator)) {
      return 0;
    }
    else {
      return numerator / denominator;
    }
  }
  formatNumberString(value: string): string {
    const search = '\\' + this.seprator.thousand;
    const searchRegExp = new RegExp(search, 'g'); // Throws SyntaxError
    const result = value.replace(searchRegExp, '').replace(this.seprator.decimal, '.');
    return result;
  }

  setSeparators(): void {
    // default
    var res = {
      "decimal": ".",
      "thousand": "",
      "minusSign": "-"
    };
    var num = -1234.56;
    // convert a number formatted according to locale
    var str = num.toLocaleString(this.currentLocale);

    // if the resulting number does not contain previous number
    // (i.e. in some Arabic formats), return defaults
    if (!str.match("1"))
      this.seprator = res;

    this.seprator.minusSign = str[0];
    // get decimal and thousand separators
    this.seprator.decimal = str.replace(/.*4(.*)5.*/, "$1");

    this.seprator.thousand = str.replace(/.*1(.*)2.*/, "$1");
  }

  getWeekID(value: Date): number {
    return Number(moment(value).year() + '' + moment(value).format('WW'));
  }

  getMonthID(value: Date): number {
    return Number(moment(value).year() + '' + moment(value).format('MM'));
  }

  calculateAge(date: Date): string { // birthday is a date
    return moment.duration(moment().diff(date)).humanize() + " ago";
  }

  addDatePrototype() {
    let dateObj = new Date();
    if (!Function.prototype.isPrototypeOf((dateObj as any).YYYYMMDDHHMMSS)) {
      Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
        value: function () {
          function pad2(n: any) {  // always returns a string
            return (n < 10 ? '0' : '') + n;
          }
          return this.getFullYear() +
            pad2(this.getMonth() + 1) +
            pad2(this.getDate()) +
            pad2(this.getHours()) +
            pad2(this.getMinutes()) +
            pad2(this.getSeconds());
        }
      });
    }

  }

  getFullDate(date: Date) {
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = (date.getDate()).toString();
    if (Number(month) < 10) {
      month = 0 + '' + month
    }
    if (Number(day) < 10) {
      day = 0 + '' + day
    }
    return year + "-" + month + "-" + day;
  }

  addOffsetInDateRange(sourceArray: Date[], offset: any): Date[] {
    const dates = [
      new Date(new Date(sourceArray[0]).setDate(sourceArray[0].getDate() + offset.start)),
      new Date(new Date(sourceArray[1]).setDate(sourceArray[1].getDate() + offset.end))
    ];
    return dates;
  }

  countMonthsBetweenDates(firstDate: any, secondDate: any): any {
    const from = moment(String(firstDate), "YYYYMMDD");
    const to = moment(String(secondDate), "YYYYMMDD");
    return Math.ceil(Math.abs(to.diff(from, 'months', true)));
  }

  countWeeksBetweenDates(firstDate: any, secondDate: any): any {
    const from = moment(String(firstDate), "YYYYMMDD");
    const to = moment(String(secondDate), "YYYYMMDD")
    return Math.abs(to.diff(from, 'weeks', false));
  }

  countDaysBetweenDates(firstDate: any, secondDate: any): any {
    const from = moment(String(firstDate), "YYYYMMDD");
    const to = moment(String(secondDate), "YYYYMMDD")
    return Math.abs(to.diff(from, 'days', false)) + 1;
  }

  setDateFormat(value: any, format: string = 'YYYY-MM-DD'): any {
    if (value != null) {
      var a = moment(String(value), "YYYYMMDD");

      //let currentLocale = JSON.parse(localStorage.getItem(LocalStorageKey.currentLocale) ?? Locale.default);
      //format = customDateFormats.find((item => item.locale === currentLocale))?.format
      return a.format(format);
      //  if(format==undefined)
      //  {
      //format="YYYY-MM-DD";
      //  }
      //  let datePipe = new DatePipe(currentLocale);
      //  return datePipe.transform(val,format);
      //return formatDate(val, format, currentLocale);
    }
    else {
      return value;
    }
  }

  setDateTimeFormatDisplay(value: any, format: string): any {
    if (value != null) {
      format = customDateFormats.find((item => item.locale === this.currentLocale))?.format
      let dt = formatDate(value, format + " hh:mm:ss", this.currentLocale);
      return dt;
    }
    else {
      return value;
    }
  }

  setDateFormatDisplay(value: any, format: string = 'YYYY-MM-DD'): any {
    if (value != null) {
      var a = moment(String(value), "YYYYMMDD");
      let val = a.format(format);

      let currentLocale = JSON.parse(localStorage.getItem(LocalStorageKey.currentLocale) ?? Locale.default);
      format = customDateFormats.find((item => item.locale === currentLocale))?.format
      return formatDate(val, format, currentLocale);
    }
    else {
      return value;
    }
  }

  setDateFormatToNumber(value: any): any {
    if (value != null) {
      const d = new Date(value);
      return Number(moment(d).format('YYYYMMDD'));
    }
    else {
      return value;
    }
  }

  setDateFormatOneDayPlus(value: any): any {
    if (value != null) {
      var a = moment(String(value), "YYYYMMDD");
      a = a.add(1, "days");
      return a.format('YYYY-MM-DD');
    }
    else {
      return value;
    }
  }

  setDateFormatOneDayMinus(value: any): any {
    if (value != null) {
      var a = moment(String(value), "YYYYMMDD");
      a = a.subtract(1, "days");
      return a.format('YYYY-MM-DD');
    }
    else {
      return value;
    }
  }

  getMonthName(value: any): any {
    if (value != null) {
      var a = moment(String(value), "YYYYMMDD",);
      return formatDate(a.toDate(), 'MMM', this.currentLocale);
    }
  }

  toPascalCase(str: string) {
    return str.replace(/(\w)(\w*)/g,
      function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
  }

  exportJSONArrayToCSV(objArray: any, fileName: string, delimiter: string) {
    var arr = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    var str =
      `${Object.keys(arr[0])
        .map((value) => `"${value}"`)
        .join(delimiter)}` + '\r\n';
    var csvContent = arr.reduce((st: any, next: any) => {
      st +=
        `${Object.values(next)
          .map((value) => `"${value}"`)
          .join(delimiter)}` + '\r\n';
      return st;
    }, str);
    var element = document.createElement('a');
    element.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    element.target = '_blank';
    element.download = fileName;
    element.click();
  }

  public exportJSONArrayToExcel(json: any[], excelFileName: string): void {
    var worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    this.formatColumn(worksheet, this.format);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'Data': worksheet }, SheetNames: ['Data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  formatColumn(worksheet: XLSX.WorkSheet, fmt: string) {
    const range = XLSX.utils.decode_range(worksheet['!ref'] ? worksheet['!ref'] : "")
    // note: range.s.r + 1 skips the header row
    Array.from({ length: range.e.c + 1 }, (v, i) => i).forEach(element => {
      for (var i = range.s.r + 1; i <= range.e.r; ++i) {
        var refname = XLSX.utils.encode_cell({ r: 0, c: element });
        var ref = XLSX.utils.encode_cell({ r: i, c: element });

        // if(refname == "C1")
        //   worksheet[refname].v = "Pl Type";
        // else if(refname == "D1")
        //   worksheet[refname].v = "Data Source";

        if (worksheet[ref] && worksheet[ref].t === 'n' && worksheet[refname].v != 'Month') {
          worksheet[ref].z = fmt;
        }

        // if(worksheet[ref] && worksheet[ref].t === 's' && worksheet[ref].v.toString().indexOf("%") > 0 && worksheet[refname].v == 'Value')
        // {
        //   worksheet[ref].z = "0.00%";
        // }
      }
    });
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }

}
