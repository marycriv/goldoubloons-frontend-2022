import React, { useState, useEffect } from 'react';
import Coin from '../components/Coin';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function WalletContainer() {
    const API = 'http://localhost:3010'

    let [pressingData, getPressingData] = useState(null);

    useEffect(() => {
        fetch(API + `/api/v1/pressings`)
        .then(response => response.json())
        .then(pressingResponse => getPressingData(pressingResponse.data))
    },[])



    if (pressingData === null) {
        const n = 27;
        return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {[...Array(n)].map((e, i) =>
                    <Skeleton variant="rectangular" width={345} height={300} key={i} />
                )}
            </Grid>
        </Box>
        )
      }
    
        return(
            <>
                <h3>Coin Container/Wallet</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {pressingData.map((e, i) =>
                            <Coin variant="rectangular" width={350} height={300} key={i} pressData={pressingData[i].attributes} />
                        )}
                    </Grid>
                </Box>
            </>
        )
}

export default WalletContainer;