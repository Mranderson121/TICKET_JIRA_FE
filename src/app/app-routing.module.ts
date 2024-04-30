import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketAssignerComponent } from './components/ticket-assigner/ticket-assigner.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: 'assegna', component:TicketAssignerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
