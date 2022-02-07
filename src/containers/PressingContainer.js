import React, { useState, useEffect } from 'react';
import Pressing from '../components/Pressing';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function PressingContainer() {
    const API = 'http://localhost:3010/api/v1/'

    let [pressingData, getPressingData] = useState(null);

    useEffect(() => {
        fetch(API + `pressings`)
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
                <h3>PressingContainer</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {pressingData.map((e, i) =>
                            <Pressing variant="rectangular" width={350} height={300} key={i} pressData={pressingData[i].attributes} pressId={pressingData[i].id} />
                        )}
                    </Grid>
                </Box>
            </>
        )
}

export default PressingContainer;