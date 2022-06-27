import { Time } from "@angular/common";

export interface Reservation {
    id: number;
    name: string;
    email: string;
    phone: string;
    note: string;
    Date: Date;
    Time: Time;
    smoking: boolean;
    table_c_id: string;
  }