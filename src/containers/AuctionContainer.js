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

      console.log(coins)

      const takenPressings = coins.filter((coinInfo) => coinInfo.attributes.for_sale === true);

      console.log(takenPressings.map((coinInfo) => coinInfo.id))
        
      return(
        <>
          <h3>Current Auctions:</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {takenPressings.map((pressing, i) =>
                      <ReusableCard 
                        variant="rectangular" 
                        width={350} 
                        height={300} 
                        key={i} 
                        pressingData={pressing.attributes.pressing}
                        coinId={pressing.id}
                        userId={pressing.attributes.user_id} 
                        location={"auction"}
                      />
                    )}
                </Grid>
            </Box>
        </>
        )
    }
}