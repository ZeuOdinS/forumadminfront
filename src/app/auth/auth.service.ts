import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {  Router } from '@angular/router';
import { AuthLoginInfo } from '../model/login';
import { JwtResponse } from '../model/JwtResponse';
import { User } from '../model/user';
 

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private loginUrl = 'https://forum-ensit-backend.herokuapp.com/ForumEnsit/signin';
  private signupUrl = 'https://forum-ensit-backend.herokuapp.com/ForumEnsit/signup';
 
  constructor(private http: HttpClient,private router:Router) {
    
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
 
  signUp(info: User): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}