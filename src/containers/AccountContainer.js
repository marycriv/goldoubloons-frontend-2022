import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../UserContext';

import Account from '../components/Account';
import LoggedOutAccount from '../components/LoggedOutAccount';

export default function AccountContainer() {

  const { user, setUser } = useContext(UserContext);

  return (
    <React.Fragment>
        {!user ? null : <Account />}
    </React.Fragment>
  );
}