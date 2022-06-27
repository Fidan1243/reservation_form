import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  providers: [ReservationService]
})
export class ReservationsComponent implements OnInit {

  res: Reservation[] = [];

  constructor(private resService: ReservationService
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.resService.getReservations().subscribe(data => {
        this.res = data;
      }, error => {
      });
    });
  }

}
