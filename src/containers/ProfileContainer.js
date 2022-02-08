import React, { useContext } from 'react';

import { UserContext } from '../UserContext';

import WalletContainer from './WalletContainer';


export default function ProfileContainer() {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="user-profile">
        <p>Welcome back, <b>{user.user.display_name}</b></p>
        <p>Take a look at your portfolio</p>
        <WalletContainer />
      </div>
    </>
  );
}