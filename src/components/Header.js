import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import AccountContainer from '../containers/AccountContainer';
import LogoNav from './LogoNav';

import { UserContext } from '../contexts/UserContext';

import '../styling.css';

function Header() {
    const { user } = useContext(UserContext);

        return(
            <>
            {!user ? <div className="logged-out-header">
                <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <LogoNav />
                        </Grid>
                        <Grid item xs={4}>
                            <div className="site-title">Jeff Golddoubloons</div>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
            </div>
            
            : 
                <div className="header">

                
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <LogoNav />
                        </Grid>
                        <Grid item xs={4}>
                            <div className="site-title">Jeff Golddoubloons</div>
                        </Grid>
                        <Grid item xs={4}>
                            <AccountContainer />
                        </Grid>
                    </Grid>
            

                </div>
                }
            </>
        )
}

export default Header;