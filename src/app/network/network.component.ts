import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {


  usersData:object[] =[];
  constructor(_UsersService:UsersService) { 

   // let _UsersService = new UsersService();
    this.usersData = _UsersService.users;
  }

  ngOnInit(): void {
  }

}
