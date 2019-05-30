import {Component, OnInit} from '@angular/core';
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

  users: [];
  rented: [];
  update = {
    name: '',
    userID: '',
    phone: '',
    livingPlace: '',
    personalID: ''
  };
  count: any;
  inputBody = {
    name: '',
    userID: '',
    phone: '',
    livingPlace: '',
    personalID: ''
  };

  constructor(private UserHandlerService: ServiceService) {
  }

  displayRegister: boolean = false;
  displayUpdate: boolean = false;
  displayRented: boolean = false;


  showDialog() {
    this.displayRegister = true;
  }

  showUpdate(user) {
    this.update.name = user.name;
    this.update.userID = user.userID;
    this.update.phone = user.phone;
    this.update.livingPlace = user.livingPlace;
    this.update.personalID = user.personalID;
    this.displayUpdate = true;
  }

  async showRented(user) {
    this.rented = await this.UserHandlerService.rented(user);
    this.displayRented = true;
  }

  async getData() {
    this.users = await this.UserHandlerService.getAllUser();
  }

  async getCount(filter) {
    this.count = await this.UserHandlerService.count(filter);
    alert(this.count.asd);
  }

  async addUser() {
    await this.UserHandlerService.addUser(this.inputBody);
    this.getData();
  }

  async deleteUser(filter) {
    await this.UserHandlerService.deleteUser(filter);
    this.getData();
  }

  async updateUser(filter) {
    await this.UserHandlerService.updateUser(filter);
    this.getData();
  }

  async backStuff(filter) {
    await this.UserHandlerService.backStuff(filter);
  }

  ngOnInit() {
    this.getData();
  }

}
