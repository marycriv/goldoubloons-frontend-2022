import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import ReusableCard from "../components/ReusableCard";

import { CoinsContext } from "../contexts/CoinsContext";
import { PressingsContext } from "../contexts/PressingsContext";

import '../styling.css';

export default function AuctionContainer(){

    const { coins } = useContext(CoinsContext);
    const { pressings } = useContext(PressingsContext);

    if (pressings === null) {
        const n = 9;
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

        const takenPressings = pressings.filter((pressingInfo) => pressingInfo.relationships.coins.data.length >= 1 && pressingInfo.attributes.coins[0].for_sale);

        return(
            <>
                <h3>Current Auctions:</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {takenPressings.map((e, i) =>
                            <ReusableCard 
                            variant="rectangular" 
                            width={350} 
                            height={300} 
                            key={i} 
                            pressingData={takenPressings[i].attributes} 
                            pressingId={takenPressings[i].id} 
                            userId={takenPressings[i].attributes.coins[0].user_id} 
                            location={"auction"}
                            />
                        )}
                    </Grid>
                </Box>
            </>
        )
    }
}