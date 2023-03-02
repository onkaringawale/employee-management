import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { MainComponent } from './main/main.component';
import { NavaboutusComponent } from './navbar/navaboutus/navaboutus.component';
import { NavclientComponent } from './navbar/navclient/navclient.component';
import { NavcontactusComponent } from './navbar/navcontactus/navcontactus.component';
import { NavemployComponent } from './navbar/navemploy/navemploy.component';
import { NavhomeComponent } from './navbar/navhome/navhome.component';
import { NavjobsComponent } from './navbar/navjobs/navjobs.component';

const routes: Routes = [
  {
    component :MainComponent,
    path :'home'
  },
  {
    component :NavaboutusComponent,
    path :'aboutus'
  }
  ,
  {
    component :NavclientComponent,
    path :'client'

  }
  ,
  {
    component :NavcontactusComponent,
    path :'contactus'
  }
  ,
  {
    component :EmployeeDashboardComponent,
    path :'employ'
  }
  ,
  {
    component :NavjobsComponent,
    path :'jobs'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
