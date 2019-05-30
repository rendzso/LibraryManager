import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  stuffs: [];
  inputBody = {
    type: '',
    author: '',
    title: '',
    date: '',
    stuffID: ''
  };

  displayAdd = false;

  constructor(private StuffService: ServiceService) { }

  async getStuffs() {
    this.stuffs = await this.StuffService.getAllStuff();
  }

  showAdd() {
    this.displayAdd = true;
  }

  async addStuff(filter) {
    await this.StuffService.addStuff(filter);
    this.getStuffs();
  }

  ngOnInit() {
    this.getStuffs();
  }

}
