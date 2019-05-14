import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  count: any;

  constructor(private UserHandlerService: ServiceService) { }

  async getData() {
    this.users = await this.UserHandlerService.getAllUser();
    return this.users; }

    async getCount(filter) {
    this.count = await this.UserHandlerService.count(filter);
    console.log(this.count)
    return this.count;
    }

    ngOnInit() {
  }

}
