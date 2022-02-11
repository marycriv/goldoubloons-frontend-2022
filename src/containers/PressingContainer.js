import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CoinsContext } from "../contexts/CoinsContext";
import { PressingsContext } from "../contexts/PressingsContext";

import ReusableCard from '../components/ReusableCard';

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
                            <ReusableCard 
                            variant="rectangular" 
                            width={350} 
                            height={300} 
                            key={i} 
                            pressingData={availablePressings[i].attributes} 
                            pressingId={availablePressings[i].id} 
                            location={"marketplace"}
                            />
                        )}
                    </Grid>
                </Box>
            </>
        )
    }
}

export default PressingContainer;