import '../App.css'
import { useState, useEffect, useRef } from 'react';


function Tracks({ tracks }) {
  
  const [nowPlaying, setNowPlaying] = useState('');  
  const [audio, setAudio] = useState(new Audio());
  if (audio) audio.play();

  const playTrack = async (e) => {
    if (audio) audio.pause();
    setAudio(new Audio(e.target.id));
    setNowPlaying(e.target.innerHTML);
  }

  tracks = tracks.slice(0, 5);

  return (
    <div className="tracks">
      <h3>Tracks</h3>
      {tracks.length === 0 ? <></> :
        <div >
          {tracks.map((track) => <p className={track.name == nowPlaying ? "track-selected" : "track-name"} onClick={playTrack} id={track.preview_url} key={track.id}>{track.name}</p>)}
        </div>
      }   
    </div>
  )
}

export default Tracks
