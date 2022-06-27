import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateResComponent } from "./create-res/create-res.component";
import { ReservationsComponent } from "./reservations/reservations.component";

const routes:Routes=[
    {path:'reservations',component:ReservationsComponent},
    {path:'reservations/create',component:CreateResComponent},
    {path:'',redirectTo:'reservations',pathMatch:'full'},
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }