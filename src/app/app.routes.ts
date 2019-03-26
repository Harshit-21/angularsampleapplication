import { NgModule } from '@angular/core';
import { AdduserComponent } from './adduser/adduser.component';
import { Routes, RouterModule } from '@angular/router';
import { AdduserreactiveComponent } from './adduserreactive/adduserreactive.component';
import { ListofuserComponent } from './listofuser/listofuser.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';


//This is my case 
const routes: Routes = [
    
   {
       path:'',
       redirectTo:'/addusertemplate',
       pathMatch:'full'
   },
    {
        path: 'addusertemplate',
        component: AdduserComponent
    },
    {
        path: 'adduserreactive',
        component: AdduserreactiveComponent
    },
    {
        path: 'userlist',
        component: ListofuserComponent,
        children:[
            {path:'detail',component:UserdetailComponent}
        ]

    },  {
        path: '**',
        component: NotfoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdduserComponent, AdduserreactiveComponent, ListofuserComponent,NotfoundComponent,UserdetailComponent]