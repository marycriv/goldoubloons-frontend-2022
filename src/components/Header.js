import React from 'react';
import Account from './Account'; 
import Grid from '@mui/material/Grid';

import '../styling.css';

function Header() {
        return(
            <>
                <div className="header">
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <img src={process.env.PUBLIC_URL + "logo.png"} width="20px" alt="app-logo" />
                        </Grid>
                        <Grid item xs={6}>
                            <div className="site-title">Jeff Golddoubloons</div>
                        </Grid>
                        <Grid item xs={4}>
                            <Account />
                        </Grid>
                    </Grid>
                </div>
            </>
        )
}

export default Header;