import { OperatorFunction } from "rxjs";

export interface Reservation {
  pipe(arg0: OperatorFunction<unknown, unknown>): unknown;
  id: string,
  checkInDate: Date,
  checkOutDate: Date,
  guestName: string,
  guestEmail: string,
  guestPassword: string,
  guestPhone: string,
  guestRoom: string
}
