import { useEffect, useState, useRef } from "react";
const API = '/assets/music/api.json'

function App() {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    fetch(API).then(response => {
      if (response.ok){
        response.json().then(response => setSongs(response));
      }
    })

  },[]);

  if (songs.length < 1) {
    return (<div>Loader</div>)
  }

  return (
<div>
  <section>
    <h1>SimplySpotify</h1>
  </section>
  <section>  
    <h1>Songs:</h1>
    <img src={songs[selectedSong].cover}/>
    <button onClick={() => audioRef.current.play}>Play</button>
    <button onClick={() => audioRef.current.pause}>Pause</button>
    <audio ref={audioRef}>
      <source src={songs[selectedSong].audio} />
    </audio>
    <ul>
      {songs.map((song, index)=> (<li key={song.id} onClick={()=> setSelectedSong(index)}>
        {song.title} by {song.author}
      </li>))}
    </ul>
    </section>

</div>
  )
}

export default App
