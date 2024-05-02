import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketAssignerComponent } from './components/ticket-assigner/ticket-assigner.component';
import { DettaglioTicketComponent } from './components/dettaglio-ticket/dettaglio-ticket.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{ path: 'assegna', component: TicketAssignerComponent }],
  },
  {path: 'dettaglio-ticket', component: DettaglioTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
