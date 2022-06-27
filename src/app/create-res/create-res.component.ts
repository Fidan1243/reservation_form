import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation';
import { TableCount } from '../models/tablecount';
import { ReservationService } from '../services/reservation.service';
import { TableService } from '../services/tablecount.service';


@Component({
  selector: 'app-create-res',
  templateUrl: './create-res.component.html',
  styleUrls: ['./create-res.component.css'],
  providers:[TableService,ReservationService]
})
export class CreateResComponent implements OnInit {
  tables: TableCount[]=[];

  constructor(private tableService: TableService,
    private reservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
    this.tableService.getTable().subscribe(data => {
      this.tables = data;
    });
  }
  reservForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(5)]),
    email: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    note: new FormControl("",[Validators.required]),
    Date: new FormControl(new Date(),[Validators.required]),
    Time: new FormControl(new Date().getTime(),[Validators.required]),
    smoking: new FormControl(false,[Validators.required]),
    table_c_id: new FormControl("",[Validators.required])
  });

  ClearForm(){
    this.reservForm.patchValue({
      name:'',
      email:'',
      phone:'',
      note:'',
      Date:new Date(),
      Time:new Date().getTime(),
      smoking:false,
      table_c_id:'-1'
    });
  }

  createMovie() {





    //console.log(form);
    // console.log(form.controls["categoryId"].value);
    // console.log(form.value);
    //console.log(this.model);

    // if(title.value==""){
    //   this.alertifyService.error("You should write title");
    //   return;
    // }
    // if(title.value.length<5){
    //   this.alertifyService.warning("you should write at least 5 characters");
    //   return;
    // }
    // if(description.value==""){
    //   this.alertifyService.error("You should write description");
    //   return;
    // }
    // if(imageUrl.value==""){
    //   this.alertifyService.error("You should write imageUrl");
    //   return;
    // }
    // if(categoryId.value=="-1"){
    //   this.alertifyService.error("You should write category");
    //   return;
    // }
    
    const reservation = {
      name:this.reservForm.value.name,
      email:this.reservForm.value.email,
      phone:this.reservForm.value.phone,
      note:this.reservForm.value.note,
      Date:this.reservForm.value.Date,
      Time:this.reservForm.value.Time,
      smoking:this.reservForm.value.smoking,
      table_c_id:this.reservForm.value.table_c_id
    };
    console.log(reservation);

    this.reservationService.createReservation(reservation)
    .subscribe(data=>this.router.navigate(['reservations']));
  }
}
