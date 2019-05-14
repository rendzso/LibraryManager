import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

/*{"name":"Erno Geza",
  "userID":"user01",
  "phone":"06-30-1234-567",
  "livingPlace":"Kukutyin 2",
  "personalID":"B12345"
}*/

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  count: any;
  inputBody = {
    name: '',
    userID: '',
    phone: ',',
    livingPlace: '',
    personalID: ''
  }

  constructor(private UserHandlerService: ServiceService) { }

  display: boolean = false;

  getInputfield(){
    console.log(this.inputBody);
  }

  showDialog() {
    this.display = true;
  }


  async getData() {
    this.users = await this.UserHandlerService.getAllUser();
    return this.users; }

    async getCount(filter) {
    this.count = await this.UserHandlerService.count(filter);
    console.log(this.count)
    return this.count;
    }

    async addUser() {
      await this.UserHandlerService.addUser(this.inputBody);
    }

    ngOnInit() {
  }

}
