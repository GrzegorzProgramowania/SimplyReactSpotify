import React, { useEffect, useState } from "react";

const API = '/assets/api.json';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 className="bg-blue color-blue">SimplyReactSpotify</h1>
    </div>
  );
}

export default App;
