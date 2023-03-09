import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(private router: Router){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // const test =  new Promise((res) => {
    //   setTimeout(()=>{
    //     res(false);
    //   }, 5000)
    // });
    // const cris = await test();

    const token = localStorage.getItem('token');
//this checks here if there is a token in the local storage which there should be, from login and authenticating
//and then if there is no token it takes you back to login.
    if(!token){
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
