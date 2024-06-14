import SpotifyWebApi from 'spotify-web-api-js';

//initialise new spotify api instance 
const spotifyApi = new SpotifyWebApi();

const apiService = {};

// set spotify access token
apiService.setAccessToken = (accessToken) => {
  try {
    spotifyApi.setAccessToken(accessToken);
  } catch (error) {
    console.error('Spotify API - failed to set access token') 
  }
}

// search for artist by name 
apiService.getArtist = (artistName, cb) => {
  try {
    spotifyApi.searchArtists(artistName).then((res) => {
      cb(res.artists.items[0])
    })
  } catch (error) {
    console.error('Spotify API - failed to search for artist by name')
  }
}

// apiService.getArtist2 = async (artistName) => {
//   return spotifyApi.searchArtists(artistName).then((res) => {
//     return res.artists.items[0];
//   });
// }

// get artist top tracks by spotify artist id 
apiService.getArtistTracks = (artistId, cb) => {
  try {
    spotifyApi.getArtistTopTracks(artistId).then((res) => {
      cb(res.tracks);
    })
  } catch (error) {
    console.error('Spotify API - failed to get artist top tracks')    
  }
}

// get artist related artists by spotify artist id
apiService.getRelatedArtists = (artistId, cb) => {
  try {
    spotifyApi.getArtistRelatedArtists(artistId).then((res) => {
      cb(res.artists);
    })
  } catch (error) {
    console.error('Spotify API - failed to get related artist info')    
  }
}

// get user top 100 tracks 
apiService.getTopArtists = async (cb) => {

  try {
     await spotifyApi.getMyTopArtists({ 'limit': '50' })
    .then((res) => {
      let tempTopArtists = [];
      res.items.forEach(artist => tempTopArtists.push(artist.name));
      return tempTopArtists;
    })
    .then((tempTopArtists) => {
    spotifyApi.getMyTopArtists({ 'limit': '50', 'offset': '50' }).then((res) => {
      res.items.forEach(artist => tempTopArtists.push(artist.name));
      return tempTopArtists;
    })
    .then((tempTopArtists) => {
    spotifyApi.getMyTopArtists({ 'limit': '50', 'offset': '100' }).then((res) => {
      res.items.forEach(artist => tempTopArtists.push(artist.name));
      cb([...tempTopArtists])
    })
    })
  }) 
  } catch (error) {
    console.error('Spotify API - failed to get user top tracks')
  }
}

// get user ID 
apiService.getUserId = async () => {
  try {
    return spotifyApi.getMe()
      .then((res) =>  res.id);
  } catch (error) {
    console.error('Spotify API - failed to get user ID')    
  }
}

// create new playlist for user 
apiService.createPlaylist = (userId, festivalName, festivalDescription) => {
  try {
    return spotifyApi.createPlaylist(userId,
      {
        'name': `${festivalName} 2024`,
        'description': `${festivalDescription}`,
        'public': false,
        'collaborative': true,
    })
      .then((res) => {
        return res
      });
  } catch (error) {
    console.error('Spotify API - failed to create new playlist')
  }
}

// add tracks to playlist for playlist with specific id 
apiService.addTracksToPlaylist = (playlistId, playlistURIs) => {
  try {
    const batches = Math.ceil(playlistURIs.length / 100);
    const remainder = playlistURIs.length % 100;

    for (let i = 0; i < batches; i++) {
      let limit = 100;
      let start = i * limit;
      let content = i === batches - 1 ? remainder : limit;
      let end = start + content;
      setTimeout(() => {
        spotifyApi.addTracksToPlaylist(playlistId, playlistURIs.slice(start, end))
          .then((res) => console.log(res))
      }, i * 200)
    }
  } catch (error) {
    console.error('Spotify API - failed to add tracks to playlist')
  }
}

// get festival line-up from db 
apiService.getFestival = async (festivalName, cb, cb2) => {
  const url = process.env.REACT_APP_FESTIFY_URL + "/festival";
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({festivalName})
  };
  
  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const body = await response.json();
      cb2(false)
      cb(body[0]);
    } else {
      if (response.status === 404) cb2('Festival cannot be found, please try again');
      if (response.status === 500) throw new Error('500, internal server error');
      throw new Error(response.status)
    }
  } catch (error) {
    console.error('Fetch', error)
  }
}


export default apiService;