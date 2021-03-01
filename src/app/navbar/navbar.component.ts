import{ Component} from '@angular/core';
import { AuthService } from '../auth.service';


@Component( {
    selector:'navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent
{

    isLogin:boolean = false;
    currentUser:any;
    constructor(private _AuthService:AuthService)
    {
        _AuthService.currentUserData.subscribe(()=>{


            if(_AuthService.currentUserData.getValue() == null)
            {
                this.isLogin = false;
            }
            else
            {
                this.currentUser = _AuthService.currentUserData.getValue();
                this.isLogin =true;
            }
    
        })
    }

 

}