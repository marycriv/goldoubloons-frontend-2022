import React from 'react';

import '../styling.css';

function WelcomePage() {
        return(
            <>
                <div className="welcome-page">
                    <h1>Welcome to Golddoubloons!</h1>
                    <h2><a href="/login">Login</a></h2>
                </div>
            </>
        )
}

export default WelcomePage;