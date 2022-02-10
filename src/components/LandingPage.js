import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../styling.css';

function LandingPage() {
        const navigate = useNavigate();

        return(
            <>
                <div className="mysterious-landing">
                    <div className="eyes"
                        onClick={() => navigate('/landing')}
                    >
                        <h1>Enter all ye who seek the blum</h1>
                    </div>
                </div>
            </>
        )
}

export default LandingPage;