import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import '../styling.css';

const ffmpeg = createFFmpeg({corePath: "/ffmpeg-core-dist/ffmpeg-core.js", log: true,});

function VideoPage() {
  const [ready, setReady] = useState();
  const [video, setVideo] = useState();
  const [overlay, setOverlay] = useState()
  const [gif, setGif] = useState();

  // only if ffmpeg.isLoaded() false
  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])

  const convertToGif = async () => {
    ffmpeg.FS('writeFile', 'temp_vid.mp4', await fetchFile(video));
    ffmpeg.FS('writeFile', 'overlay.png', await fetchFile(overlay));

    // '-i', `${process.env.PUBLIC_URL + "coin.png"}`, `-filter_complex`, `[0]overlay=x=0:y=0[out]`,
    await ffmpeg.run(
      '-i', 'temp_vid.mp4', 
      '-i', 'overlay.png', 
      '-filter_complex', 'crop=248:248,scale=-1:248,format=argb,pad=350:350:175:175:color=white@0,overlay', 
      '-t', '7', 
      '-f', 'gif', 'jeff.gif');

    const data = ffmpeg.FS('readFile', 'jeff.gif');

    const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}))
    setGif(url)
  }

  return ready ? (
    <>
      <div className="vid-box">
        {video && <video
          controls
          height="250"
          src={URL.createObjectURL(video)}
          ></video>}
          <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))}/>
          <br/>
          <br/>
          <input type="file" onChange={(e) => setOverlay(e.target.files?.item(0))}/>
          {overlay && <img src={URL.createObjectURL(overlay)} alt="overlay" />}
          <h3>Result</h3>
          <button onClick={convertToGif}>Convert</button>

          { gif && <img src={gif} alt="your-gif"/> }
      </div>
    </>
  ) : (<div className="vid-box"><p>Loading...</p></div>)
}

export default VideoPage;