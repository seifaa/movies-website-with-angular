import {Component , OnDestroy} from '@angular/core'
import { UsersService } from './../users.service';



@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnDestroy
{

    trendingMovie:any[] = [];
    trendingTv:any[] = [];
    term:string = "";
  imgPrefix:string = "https://image.tmdb.org/t/p/w500/";
   

      movieSubscribtion:any;
      tveSubscribtion:any;

    constructor(_UsersService:UsersService)
    {

      
    this.movieSubscribtion =   _UsersService.getTrending('movie').subscribe( (data )=>{

          this.trendingMovie =data.results.slice(0,10);

      } )

  this.tveSubscribtion=    _UsersService.getTrending('tv').subscribe( 
        //next
    (data )=>{

        this.trendingTv =data.results.slice(0,10);
        console.log(data.results);

      } ,
      (error)=>
      {
            console.log('CONNECTION ERROR '+error);
      },
      ()=>
      {
            
      })
          //  let _UsersService = new UsersService();
      //      this.usersData = _UsersService.users;

         
    }
      ngOnDestroy()
      {
        //console.log("component etdamaaaar");
          this.movieSubscribtion.unsubscribe();
          this.tveSubscribtion.unsubscribe();

      }
  
  
}
