import {Component, OnInit} from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Users', routerLink: ['/user']},
      {label: 'Stuffs', routerLink: ['/stuff']}
    ];
  }

}
