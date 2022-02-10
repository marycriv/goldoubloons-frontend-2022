import React, { useContext } from "react";
import AuctionCard from "../components/AuctionCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import { UserContext } from "../UserContext";
import { CoinsContext } from "../CoinsContext";
import { PressingsContext } from "../PressingsContext";

import '../styling.css';

export default function AuctionContainer(){

    const { user, setUser } = useContext(UserContext);
    const { coins, setCoins } = useContext(CoinsContext);
    const { pressings, setPressings } = useContext(PressingsContext);

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
        console.log(pressings[0].attributes.coins[0].for_sale)
    
        return(
            <>
                <h3>Current Auctions:</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {takenPressings.map((e, i) =>
                            <AuctionCard variant="rectangular" width={350} height={300} key={i} pressData={takenPressings[i].attributes} pressId={takenPressings[i].id} usrId={takenPressings[i].attributes.coins[0].user_id} />
                        )}
                    </Grid>
                </Box>
            </>
        )
    }
}