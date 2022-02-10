import React, { useContext } from 'react'; 
import Coin from '../components/Coin';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CoinsContext } from "../contexts/CoinsContext";
import { PressingsContext } from "../contexts/PressingsContext";

function WalletContainer() {

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

         const userCoinIds = coins.map(coinfo => coinfo.pressing_id.toString())

         const userWalletData = pressings.filter((pressingInfo) => 
             userCoinIds.includes(pressingInfo.id)
         )
        
        return(
            <>
                <h3>NFT Portfolio</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {userWalletData.map((e, i) =>
                            <Coin variant="rectangular" width={350} height={300} key={i} coinDataToCoin={userWalletData[i].attributes} coinsOriginal={coins[i]} />
                        )}
                    </Grid>
                </Box>
            </>
        )
    }
}

export default WalletContainer;