import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  fullName = (localStorage.getItem('userName')) ? localStorage.getItem('userName') : null;
  isLogin = (localStorage.getItem('userToken')) ? true : false ;
  constructor(private http : HttpClient) {
    console.log(this.fullName)
   }


  
  }


