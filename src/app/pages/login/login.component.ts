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
      
  }
  //making a method for when you click the button. Doesnt really do much at the moment
  openLoginPage(){
   window.location.href =   this.spotifyService.getLoginUrl();
  }

}
