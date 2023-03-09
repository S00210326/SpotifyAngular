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
  // https://accounts.spotify.com/en/authorize?client_id=c4cd5531ce004764a2ef3a24bcb776b4&redirect_uri=http://localhost:4200/login/&scopes=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state%20user-library-read%20playlist-read-private%20playlist-read-collaborative&response_type=token&show_dialog=true
 }
