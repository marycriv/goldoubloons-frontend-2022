import React, { useState, useEffect, useContext } from 'react';
import Pressing from '../components/Pressing';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { UserContext } from "../UserContext";
import { CoinsContext } from "../CoinsContext";

function PressingContainer(props) {

    const { user, setUser } = useContext(UserContext);
    const { coins, setCoins } = useContext(CoinsContext);

    if (props.pressingData === null) {
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

      if (coins && props.pressingData) {

        const availablePressings = props.pressingData.filter((pressingInfo) => pressingInfo.relationships.coins.data.length < 1)

        console.log("availablePressings", availablePressings)
    
        return(
            <>
                <h3>Coins for Sale:</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {availablePressings.map((e, i) =>
                            <Pressing variant="rectangular" width={350} height={300} key={i} pressData={availablePressings[i].attributes} pressId={availablePressings[i].id} />
                        )}
                    </Grid>
                </Box>
            </>
        )
    }
}

export default PressingContainer;