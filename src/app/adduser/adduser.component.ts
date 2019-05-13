import { Component, OnInit } from '@angular/core';
import { UserModel } from './user-model/User';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  public user=new UserModel('harshit','madaan','harshit.madaan94@gmail.com','kurukshetra','haryana','india',24
  ,'male','option1');

  constructor() { }

  ngOnInit() {
  }


  public getcvalue(val:any){
    console.log(val);
    
    console.log("this is the value harshit");
    
  }

}
