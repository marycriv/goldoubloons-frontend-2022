import React from 'react';
import PreviewCoins from './PreviewCoins';

import '../styling.css';

function WelcomePage() {
        return(
            <>
                <div className="welcome-page-header">
                    <h1>Welcome to Golddoubloons!</h1>
                    <h2><a href="/login">Login</a></h2>
                </div>
                <div className="welcome-page-coins">
                    <PreviewCoins />
                </div>
            </>
        )
}

export default WelcomePage;