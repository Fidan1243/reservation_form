import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError ,tap} from "rxjs";
import { Reservation } from "../models/reservation";

@Injectable()
export class ReservationService {
    url = "http://localhost:3000/reservations";
    constructor(private http: HttpClient) {

    }

    movieCount:Reservation[] =[];
    getReservations(): Observable<Reservation[]> {
        let newUrl = this.url;
        
        return this.http.get<Reservation[]>(newUrl)
            .pipe(
                tap(data => console.log(this.movieCount==data)),
                catchError(this.handleError)
            );
    }


    createReservation(movie: any): Observable<Reservation> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token' 
            })
        };
        movie.id = this.movieCount.length;
        return this.http.post<any>(this.url, movie,httpOptions)
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
