import React, { useState } from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [streamUrl, setStreamUrl] = useState("");
  const [playStream, setPlayStream] = useState(false);

  const handlePlay = () => {
    if (streamUrl) {
      setPlayStream(true);
    } else {
      alert("Please enter a valid stream URL!");
    }
  };

  return (
    <div className="App">
      {!playStream ? (
        <div className="input-container">
          <h1>Stream Your Video</h1>
          <input
            type="text"
            placeholder="Enter stream link here"
            value={streamUrl}
            onChange={(e) => setStreamUrl(e.target.value)}
          />
          <button onClick={handlePlay}>Play</button>
        </div>
      ) : (
        <VideoPlayer streamUrl={streamUrl} />
      )}
    </div>
  );
}

export default App;
