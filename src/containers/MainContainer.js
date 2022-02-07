import React from 'react';
import PressingContainer from './PressingContainer';
import WalletContainer from './WalletContainer';
import LoginFormContainer from './LoginFormContainer';

function MainContainer() {

    return(
        <div className="contents">
            {/* <LoginFormContainer /> */}
            <WalletContainer />
            <PressingContainer />
        </div>
    )
}

export default MainContainer;