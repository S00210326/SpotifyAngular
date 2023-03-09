import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from  'spotify-web-api-js';
import SpotifyWebApi from 'spotify-web-api-js';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //using the online spotify web api installed in package manager
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  constructor() {
    // this.spotifyApi = new Spotify();
    this.spotifyApi = new Spotify();

    
   }

  //this will be used as spotify service endpoint for getting a constant flow of info
  getLoginUrl(){
    const authEndPoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scopes=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUrl + scopes + responseType;
  }

  getUrlCallbackToken(){
    // console.log(window.location.hash)
    if (!window.location.hash)
    return '';

    //getting the access token params
    //MIGHT NEED TO FIX AND NOT SURE IF GETTING RIGHT PARAMS.
    const params =  window.location.hash.substring(1).split('&');
    // console.log(params);
    return params[0].split('=')[1];

    
  }

  defineAccessToken(token:string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token',token);
    //testing the skip to next method but mot working
    console.log(token);
    this.spotifyApi.skipToNext();
    
    
  }
  

  
}
