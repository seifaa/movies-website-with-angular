import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'register' , pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard] , component:HomeComponent},
  {path:'movies', canActivate:[AuthGuard]  , component:MoviesComponent},
  {path:'tv', canActivate:[AuthGuard]  , component:TvComponent},
  {path:'network', canActivate:[AuthGuard]  , component:NetworkComponent},
  {path:'people', canActivate:[AuthGuard]  , component:PeopleComponent},
  {path:'gallery', canActivate:[AuthGuard]  , component:GalleryComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},

  {path:'**' , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
