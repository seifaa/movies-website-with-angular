import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor( private _HttpClient:HttpClient ) {

  }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f1aca93e54807386df3f6972a5c33b50`)
      
  }

  



  users = 
  [
   {name:'abdo' , age:26 , gender:'male' ,dateOfBirth:'1/1/2001'},
   {name:'mai' , age:26 , gender:'female' ,dateOfBirth:'9/10/2001'},
   {name:'alaa' , age:18 , gender:'female' ,dateOfBirth:'4/3/2001'},
   {name:'omar' , age:39 , gender:'male' ,dateOfBirth:'2/6/2001'},
   {name:'ali' , age:26 , gender:'male' ,dateOfBirth:'1/7/2001'},
   {name:'sayed' , age:36 , gender:'male' ,dateOfBirth:'1/1/2001'},

  ]


}
