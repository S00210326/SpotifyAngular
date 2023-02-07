import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private spotifyService:SpotifyService){}

  ngOnInit(): void {
      // this.spotifyService.getUrlCallbackToken();
      this.verifyUrlCallbackToken();
  }

  verifyUrlCallbackToken(){
    const token = this.spotifyService.getUrlCallbackToken();
    console.log(token);
    if(!!token){
      this.spotifyService.defineAccessToken(token);
    }
    
  }
  //this when clicked will take you to the page where you can accept spotify permissions for your account.
  openLoginPage(){
   window.location.href =   this.spotifyService.getLoginUrl();
  }

}
