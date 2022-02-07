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
                            <img src={process.env.PUBLIC_URL + "logo.png"} width="20px" alt="app-logo" />
                        </Grid>
                        <Grid item xs={6}>
                            <div className="site-title"
                                onClick={ () => {
                                    navigate('/main');
                                }}
                            >Jeff Golddoubloons</div>
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