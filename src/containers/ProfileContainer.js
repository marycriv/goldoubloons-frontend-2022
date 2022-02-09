import React, { useContext } from 'react';
import { Button } from '@mui/material';

import { UserContext } from '../UserContext';

import WalletContainer from './WalletContainer';

import { useNavigate } from 'react-router-dom';


export default function ProfileContainer() {

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="user-profile">
        <p>Welcome back, <b>{user.display_name}</b></p>
        <div className="marketplace-button">
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
                navigate(`/main`)
            }}>
            visit the marketplace
          </Button>
        </div>
        <p>Take a look at your portfolio</p>
        <WalletContainer />
      </div>
    </>
  );
}