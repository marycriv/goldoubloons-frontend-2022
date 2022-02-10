import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Account from '../components/Account';

export default function AccountContainer() {

  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
        {!user ? null : <Account />}
    </React.Fragment>
  );
}