import { AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {ServiceService} from './service.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { StuffComponent } from './stuff/stuff.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'stuff', component: StuffComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StuffComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    TabMenuModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
