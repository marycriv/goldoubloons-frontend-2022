import React from 'react';
import PressingContainer from './PressingContainer';
import WalletContainer from './WalletContainer';
import LoginFormContainer from './LoginFormContainer';

function MainContainer(props) {

    return(
        <div>
            {/* <LoginFormContainer /> */}
            {/* <WalletContainer /> */}
            <PressingContainer pressingData={props.pressings} />
        </div>
    )
}

export default MainContainer;