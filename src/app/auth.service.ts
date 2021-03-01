import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



    currentUserData:any = new BehaviorSubject(null);
  constructor(private _httpClient:HttpClient) { 
    
  }


  register(formData:object):Observable<any>
  {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signup' ,formData )
  }
  
  login(formData:object):Observable<any>
  {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signin' ,formData )
  }



  saveCurrentUserData()
  {
    let encodedToken:any = localStorage.getItem('currentUser');

    let tokenReady  =  jwtDecode(encodedToken);

    this.currentUserData.next(tokenReady);
  }


}
