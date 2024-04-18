import '../App.css'
import { useState, useEffect } from 'react';


function Artist({artist}) {

  return (
    <div className="Artist">
      {!artist ? <></> :
        <div>
          <p>{artist.name}</p>
          <img src={artist.images[0].url}></img>
          <p>{artist.followers.total.toLocaleString() } followers</p>
        </div>
      }   
    </div>
  )
}

export default Artist
