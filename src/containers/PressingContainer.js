import React, { useContext } from 'react';
import Pressing from '../components/Pressing';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CoinsContext } from "../contexts/CoinsContext";
import { PressingsContext } from "../contexts/PressingsContext";

function PressingContainer() {

    const { coins } = useContext(CoinsContext);
    const { pressings } = useContext(PressingsContext);

    if (pressings === null) {
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

      if (coins && pressings) {

        const availablePressings = pressings.filter((pressingInfo) => pressingInfo.relationships.coins.data.length < 1)

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