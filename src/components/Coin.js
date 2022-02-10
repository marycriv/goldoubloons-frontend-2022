import React, { useContext } from 'react'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';

import CryptoCompare from "react-crypto-compare";

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { CoinsContext } from '../contexts/CoinsContext';
import { PressingsContext } from '../contexts/PressingsContext';

import { sellCoin } from '../actions/sellCoin';
import { updateCoin } from '../actions/updateCoin';

import '../styling.css';

const APIkey = "bc55a72d6dbc877359d7bef56d7d183547ab835e9099e7a5fb6b2041d0301ccd"

function Coin(props) {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const { setCoins } = useContext(CoinsContext);
    const { setPressings } = useContext(PressingsContext);
    
        return(
            <Grid item>
                <Card sx={{ width: 350 }} elevation={0} variant="outlined">
                    <CardMedia
                        component="img"
                        image={process.env.PUBLIC_URL + props.coinDataToCoin.slug + `.gif`}
                        alt={props.coinDataToCoin.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="coin-titles">
                                {props.coinDataToCoin.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div">
                                <p dangerouslySetInnerHTML={{__html: props.coinDataToCoin.description}} />
                            </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <CryptoCompare from="ETH" to="USD" amount={props.coinDataToCoin.cost} apikey={APIkey} />
                            </Grid>
                            <Grid item xs={2}>
                                Ξ {props.coinDataToCoin.cost}
                            </Grid>
                            <Grid item xs={3}>
                            <Switch
                                checked={props.coinsOriginal.for_sale}
                                onChange={async () => {
                                   const auctionCoinOff = await updateCoin({ for_sale: !props.coinsOriginal.for_sale}, user.id, props.coinsOriginal.id);
                                   console.log(auctionCoinOff);
                                   setCoins(auctionCoinOff.coinsInfo);
                                   setPressings(auctionCoinOff.pressingInfo);
                                   // navigate('/success');
                                }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />For sale?
                            </Grid>
                            <Grid item xs={4}>
                                {/* <FontAwesomeIcon icon={faEthereum} /> */}
                                <Button
                                    onClick={async () => {
                                        const coinPurchaseInfo = await sellCoin(props.coinsOriginal.id, user.id);
                                        console.log(coinPurchaseInfo)
                                        setUser(coinPurchaseInfo.userInfo)
                                        setCoins(coinPurchaseInfo.coinsInfo)
                                        setPressings(coinPurchaseInfo.pressingInfo)
                                        navigate(`/success`)
                                    }}
                                >  Sell now</Button>
                            </Grid>
                        </Grid>
                    </CardActions> 
                </Card>
        </Grid>
        )
}

export default Coin;