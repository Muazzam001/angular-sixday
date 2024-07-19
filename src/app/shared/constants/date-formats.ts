export class DateFormats {
  /* 'M/d/yy, h:mm a' (6/15/15, 9:03 AM) */
  public static short = 'short';
  /* 'MMM d, y, h:mm:ss a' (Jun 15, 2015, 9:03:01 AM) */
  public static medium = 'medium';
  /* 'MMMM d, y, h:mm:ss a z' (June 15, 2015 at 9:03:01 AM GMT+1) */
  public static long = 'long';
  /* 'EEEE, MMMM d, y, h:mm:ss a zzzz' (Monday, June 15, 2015 at 9:03:01 AM GMT+01:00) */
  public static full = 'full';
  /* 'M/d/yy' (6/15/15) */
  public static shortDate = 'shortDate';
  /* 'MMM d, y' (Jun 15, 2015) */
  public static mediumDate = 'mediumDate';
  /* 'MMMM d, y' (June 15, 2015) */
  public static longDate = 'longDate';
  /* 'EEEE, MMMM d, y' (Monday, June 15, 2015) */
  public static fullDate = 'fullDate';
  /* 'h:mm a' (9:03 AM) */
  public static shortTime = 'shortTime';
  /* 'h:mm:ss a' (9:03:01 AM) */
  public static mediumTime = 'mediumTime';
  /* 'h:mm:ss a z' (9:03:01 AM GMT+1) */
  public static longTime = 'longTime';
  /* 'h:mm:ss a zzzz' (9:03:01 AM GMT+01:00) */
  public static fullTime = 'fullTime';
}


export const customDateFormats: any[] = [
  { locale: 'us-en', name: 'English America', format: 'dd/MM/yyyy' },
  { locale: 'en-gb', name: 'English British', format: 'dd/MM/yyyy' },
  { locale: 'en-in', name: 'Indian', format: 'dd/MM/yyyy' },
  { locale: 'ru', name: 'Russian', format: 'dd.MM.yyyy' },
  { locale: 'dk', name: 'Danish', format: 'd.M.yyyy' },
  { locale: 'da', name: 'Danish', format: 'd.M.yyyy' },
  { locale: 'nb', name: 'Norwegian', format: 'dd.MM.yy' },
  { locale: 'se', name: 'Swedish', format: 'yyyy-MM-dd' },
  { locale: 'sv', name: 'Swedish', format: 'yyyy-MM-dd' },
  { locale: 'fi', name: 'Finnish', format: 'd.M.yyyy' },
  { locale: 'de', name: 'German', format: 'dd.MM.yy' },
  { locale: 'it', name: 'Italian', format: 'dd/MM/yyyy' },
  { locale: 'pl', name: 'Polish', format: 'dd.MM.yyyy' },
  { locale: 'ro', name: 'Romanian', format: 'dd.MM.yyyy' },
  { locale: 'sk', name: 'Slovak', format: 'd. M. yyyy' },
  { locale: 'sl', name: 'Slovenian', format: 'd. MM. yy' },
  { locale: 'bg', name: 'Bulgarian', format: 'd.MM.yy' },
  { locale: 'hr', name: 'Croatian', format: 'dd. MM. y.' },
  { locale: 'sr', name: 'Serbian', format: 'd.M.yy.' },
  { locale: 'mk', name: 'Macedonian', format: 'd.M.yy' },
];
