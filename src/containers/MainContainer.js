import React from 'react';
import PressingContainer from './PressingContainer';
import WalletContainer from './WalletContainer';
import LoginFormContainer from './LoginFormContainer';

function MainContainer() {

    return(
        <>
            {/* <LoginFormContainer /> */}
            <WalletContainer />
            <PressingContainer />
        </>
    )
}

export default MainContainer;