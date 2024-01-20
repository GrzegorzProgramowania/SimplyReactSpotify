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

  useEffect(() =>{
    if(audioRef.current){
      audioRef.current.src = songs[selectedSong].audio;
      audioRef.current.load();
    }
  }, [selectedSong, songs])

  if (songs.length < 1) {
    return (<div>Loader</div>)
  }

  return (
  <div className='bg-blue-950 min-h-screen bg-gray-100 text-gray-900 justify-center items-center flex-col m-auto'>
   <section className="bg-black p-8 text-center flex flex-col items-center">
  <h1 className="text-3xl font-bold text-white mb-4">SimplySpotify</h1>
  <img className="mx-auto mt-4 mb-6 w-64 h-64 object-contain object-cover shadow-lg rounded-full" src={songs[selectedSong].cover}/>
  <div className="flex space-x-2">
    <button className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded-full shadow-md" onClick={() => audioRef.current.play()}>Play</button>
    <button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded-full shadow-md" onClick={() => audioRef.current.pause()}>Pause</button>
  </div>
  <audio ref={audioRef}>
    <source src={songs[selectedSong].audio} />
  </audio>
</section>
    <section>
      <h1 className="text-2xl text-white font-bold mb-4 text-center pt-5">Songs:</h1>
    <ul className="flex flex-col space-y-2">
      {songs.map((song, index)=> (<li className={`text-center py-2 px-4 cursor-pointer rounded-full text-white ${songs[selectedSong].id === song.id ? 'bg-gray-700' : 'bg-gray-800'}`} key={song.id} onClick={()=> setSelectedSong(index)}>
        {song.title} by {song.author}
      </li>))}
    </ul>
    </section>

</div>
  )
}

export default App
