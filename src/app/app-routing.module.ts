import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { AddairlineComponent } from './addairline/addairline.component';
import { BlockairlineComponent } from './blockairline/blockairline.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { ScheduleairlineComponent } from './scheduleairline/scheduleairline.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { SearchflightComponent } from './searchflight/searchflight.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'add',
    component: AddairlineComponent
  },
  {
    path: 'block',
    component: BlockairlineComponent
  }  ,
  {
    path: 'adminmenu',
    component: AdminmenuComponent
  }  ,
  {
    path: 'sc',
    component: ScheduleairlineComponent
  }  ,
  {
    path: 'Usermenu',
    component: UsermenuComponent
  }  ,
  {
    path: 'book',
    component: SearchflightComponent
  }
  ,
  {
    path: 'search',
    component: SearchTicketComponent
  }
  ,
  {
    path: 'cancel',
    component: CancelTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
