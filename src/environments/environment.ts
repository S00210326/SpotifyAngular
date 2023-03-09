export const environment = {
    production: false
};

// export const SpotifyConfiguration ={
//     clientId: 'c4cd5531ce004764a2ef3a24bcb776b4',
//     authEndpoint: 'https://accounts.spotify.com/authorize',
//     redirectUrl: 'http://localhost:4200/login/',
//     scopes:[
//         "user-read-currently-playing", 
//     "user-read-recently-played", 
//     "user-read-playback-state", 
//     "user-top-read", 
//     "user-modify-playback-state", 
//     "user-library-read", 
//     "playlist-read-private", 
//     "playlist-read-collaborative" 
//     ]

// }
export const SpotifyConfiguration = {
    clientId: 'c4cd5531ce004764a2ef3a24bcb776b4',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectUrl: 'http://localhost:4200/login/',
    scopes: [
      "user-read-currently-playing", // musica tocando agora.
      "user-read-recently-played", // ler musicas tocadas recentemente
      "user-read-playback-state", // ler estado do player do usuario
      "user-top-read", // top artistas e musicas do usuario
      "user-modify-playback-state", // alterar do player do usuario.
      "user-library-read", // ler biblioteca dos usuarios
      "playlist-read-private", // ler playlists privads
      "playlist-read-collaborative" // ler playlists colaborativas
    ]
  }