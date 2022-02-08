import React from 'react';
import Grid from '@mui/material/Grid';

import { useNavigate } from 'react-router-dom';

import AccountContainer from '../containers/AccountContainer';

import '../styling.css';

function Header() {
    const navigate = useNavigate();

        return(
            <>
                <div className="header">
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <img src={process.env.PUBLIC_URL + "logo.png"} width="32px" alt="app-logo" 
                                onClick={ () => {
                                    navigate('/main');
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <div className="site-title">Jeff Golddoubloons</div>
                        </Grid>
                        <Grid item xs={4}>
                            <AccountContainer />
                        </Grid>
                    </Grid>
                </div>
            </>
        )
}

export default Header;