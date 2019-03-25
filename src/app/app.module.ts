import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListofuserComponent } from './listofuser/listofuser.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ListofuserComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
