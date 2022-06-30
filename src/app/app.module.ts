import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { FormsModule } from '@angular/forms';
import { Form4Component } from './form4/form4.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { Form5Component } from './form5/form5.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AddairlineComponent } from './addairline/addairline.component';
import { BlockairlineComponent } from './blockairline/blockairline.component';
import { ScheduleairlineComponent } from './scheduleairline/scheduleairline.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
 import { MatButtonModule } from '@angular/material/button';
 import { MatIconModule} from '@angular/material/icon';
 import { MatDividerModule } from '@angular/material/divider';
 import { MatTabsModule } from '@angular/material/tabs';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';

@NgModule({
  
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    WeatherComponent,
    Form5Component,
    RegisterComponent,
    LoginComponent,
    AddairlineComponent,
    BlockairlineComponent,
    ScheduleairlineComponent,
    AdminmenuComponent,
    UsermenuComponent,
    BookflightComponent,
    SearchflightComponent,
    ModelpopComponent,
    SearchTicketComponent,
    CancelTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
