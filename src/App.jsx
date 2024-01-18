import { useEffect, useState } from "react";
const API = '/assets/music/api.json'

function App() {
  const [songs, setSongs] = useState([]);

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
    <h1>Songs:</h1>
    <ul>
      {songs.map((song, index)=> (<li key={song.id}>
        {song.title} by {song.author}
      </li>))}
    </ul>
    </section>

</div>
  )
}

export default App
