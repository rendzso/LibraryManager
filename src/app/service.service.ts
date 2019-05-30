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
    return throwError(error.message || 'Server Error!');
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
        // @ts-ignore
        alert(res.restext);
      }, (err) => {
        reject(err);
        alert(err.error.restext);
      });
  });
}

deleteUser(filter) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/users/delete', {userID: filter})
        .subscribe(res => {
          resolve(res);
          // @ts-ignore
          alert(res.restext);
        }, (err) => {
          reject(err);
          alert(err.error.restext);
        });
    });
  }

  updateUser(obj) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/users/update', obj)
        .subscribe(res => {
          resolve(res);
          // @ts-ignore
          alert(res.restext);
        }, (err) => {
          reject(err);
          alert(err.error.restext);
        });
    });
  }

  rentStuff(filter) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/users/rent', filter)
        .subscribe(res => {
          resolve(res);
          // @ts-ignore
          alert(res.restext);
        }, (err) => {
          reject(err);
          alert(err.error.restext);
        });
    });
  }

  backStuff(filter) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/users/back', filter)
        .subscribe(res => {
          resolve(res);
          // @ts-ignore
          alert(res.restext);
        }, (err) => {
          reject(err);
          alert(err.error.restext);
        });
    });
  }

  listLateness(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/users/late')
        .subscribe(res => {
          resolve(res);
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

  rented(filter): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = new HttpParams().set('userID', filter);
      this.http.get('http://localhost:8080/users/rented', {params})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllStuffs(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/stuffs/open')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

