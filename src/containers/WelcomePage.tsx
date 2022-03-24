import React from 'react';
import Button from '@mui/material/Button';
import PreviewCoins from '../components/PreviewCoins';

import { useNavigate } from 'react-router-dom';

import '../styling.css';

function WelcomePage() {
  
  const navigate = useNavigate();

  return(
    <>
      <div className="welcome-page-header">
        <h1>An NFT marketplace that meets your needs</h1>
        <h2>Discover, collect, and sell your own Golddoubloons right now</h2>
        <div className="welcome-btns">
          <div className="login-btn">
            <Button 
              disableElevation
              variant="contained" 
              onClick={() =>
                navigate('/login')
              }
            >Login</Button>
          </div>
          <div className="signup-btn">
            <Button 
              disableElevation
              variant="outlined" 
              onClick={() =>
                navigate('/signup')
              }
              >Signup
            </Button>
          </div>
        </div>
      </div>
      <div className="welcome-page-coins">
        <PreviewCoins />
      </div>
    </>
  )
}

export default WelcomePage;