import React, { useContext } from 'react';
import { Button } from '@mui/material';

import { UserContext } from '../contexts/UserContext';

import WalletContainer from './WalletContainer';

import { useNavigate } from 'react-router-dom';


export default function ProfileContainer() {

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="user-profile">
        <img className="profile-img" src={user.icon} alt={user.display_name} />
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