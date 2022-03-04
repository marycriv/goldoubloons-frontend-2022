import React, { useContext } from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CoinsContext } from "../contexts/CoinsContext";
import { PressingsContext } from "../contexts/PressingsContext";
import { UserContext } from '../contexts/UserContext';
import ReusableCard from '../components/ReusableCard';

function WalletContainer() {

    const { coins } = useContext(CoinsContext);
    const { pressings } = useContext(PressingsContext);
    const { user } = useContext(UserContext);

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

        console.log("hello from wallet", coins)

        const userCoins = coins.filter(coinInfo => coinInfo.attributes.user_id === user.id)
        console.log("usercoins", userCoins)
        
        return(
            <>
                <h3>NFT Portfolio</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {userCoins.map((e, i) =>
                            <ReusableCard 
                            variant="rectangular" 
                            width={350} 
                            height={300} 
                            key={i} 
                            pressingData={userCoins[i].attributes.pressing} 
                            originalCoin={userCoins[i]} 
                            location={"wallet"}
                            />
                        )}
                    </Grid>
                </Box>
            </>
        )
    }
}

export default WalletContainer;