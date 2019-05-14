import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(protected http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error!");
  }

getAllUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/users/list')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}

addUser(obj) {
  return new Promise((resolve, reject) => {
    this.http.post('http://localhost:8080/users/add', obj)
      .subscribe(res => {
        resolve(res);
        console.log(res);
      }, (err) => {
        reject(err);
      });
  });
}

deleteUser(filter) {
    return new Promise((resolve, reject) => {
      const params = new HttpParams().set('filter', filter);
      this.http.post('http://localhost:8080/users/delete', {params: {param: JSON.stringify(filter)}})
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateUser(obj) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/users/update', obj)
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  rentStuff(filter) {
    return new Promise((resolve, reject) => {
      const params = new HttpParams().set('filter', filter);
      this.http.post('http://localhost:8080/users/rent', {params: {param: JSON.stringify(filter)}})
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  backStuff(filter) {
    return new Promise((resolve, reject) => {
      const params = new HttpParams().set('filter', filter);
      this.http.post('http://localhost:8080/users/back', {params: {param: JSON.stringify(filter)}})
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  listLateness(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/users/late')
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  count(filter): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = new HttpParams().set('userID', filter);
      this.http.get('http://localhost:8080/users/count', {params})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
          });
    });
  }

}

