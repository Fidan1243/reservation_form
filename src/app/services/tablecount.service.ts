import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError ,tap} from "rxjs";
import { Reservation } from "../models/reservation";
import { TableCount } from "../models/tablecount";

@Injectable()
export class TableService {
    url = "http://localhost:3000/table_counts";
    constructor(private http: HttpClient) {

    }

    getTable(): Observable<TableCount[]> {
        let newUrl = this.url;
        
        return this.http.get<TableCount[]>(newUrl)
            .pipe(
                tap(data => console.log(data)),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            //client or network
            console.log("Error : " + error.error.message);
        }
        else {
            switch (error.status) {
                case 404:
                    console.log("Not Found");
                    break;
                case 403:
                    console.log("Access Denied");
                    break;
                case 500:
                    console.log("Internal server");
                    break;
                default:
                    console.log("some unknow error happened");
            }
        }
        return throwError(() => new Error("some error happened"));
    }
}
