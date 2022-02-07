import React, { useContext } from 'react';

import { UserContext } from '../UserContext';

import WalletContainer from './WalletContainer';


export default function ProfileContainer() {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
        <p>Welcome to your account, {user.user.username}</p>
        <WalletContainer />
    </>
  );
}