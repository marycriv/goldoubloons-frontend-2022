import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../styling.css';

function VideoPage() {
        const navigate = useNavigate();

        return(
            <>
              <div className="vid-box">
                  <p>Vid box</p>
              </div>
            </>
        )
}

export default VideoPage;