import { NgModule } from '@angular/core';
import { AdduserComponent } from './adduser/adduser.component';
import { Routes, RouterModule } from '@angular/router';


//This is my case 
const routes: Routes = [
    {
        path: '',
        component: AdduserComponent
    },
    {
        path: 'about',
        component: AdduserComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }