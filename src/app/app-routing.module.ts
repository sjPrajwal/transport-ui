import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BusDetailsComponent } from './components/bus-details/bus-details.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent
},
{
  path: 'details',
  component: BusDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
