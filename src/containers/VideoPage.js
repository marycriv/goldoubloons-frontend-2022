import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import { useNavigate } from 'react-router-dom';

import '../styling.css';

const ffmpeg = createFFmpeg({corePath: "/ffmpeg-core-dist/ffmpeg-core.js", log: true,});

function VideoPage() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const navigate = useNavigate();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])

  const convertToGif = async () => {
    ffmpeg.FS('writeFile', 'testy.mp4', await fetchFile(video));

    await ffmpeg.run('-i', 'testy.mp4', '-t', '7', '-f', 'gif', 'jeff.gif');

    const data = ffmpeg.FS('readFile', 'jeff.gif');

    const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}))
    setGif(url)
  }

  return ready ? (
      <>
        <div className="vid-box">
            {video && <video
                controls
                width="250"
                src={URL.createObjectURL(video)}
                >
              
              </video>}
            <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))}/>

            <h3>Result</h3>
            <button onClick={convertToGif}>Convert</button>

            { gif && <img src={gif}/> }
        </div>
      </>
  ) : (<div className="vid-box"><p>Loading...</p></div>)
}

export default VideoPage;