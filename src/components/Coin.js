import React, { useContext } from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import CryptoCompare from "react-crypto-compare";

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

import { sellCoin } from '../sellCoin';

import '../styling.css';

const APIkey = "bc55a72d6dbc877359d7bef56d7d183547ab835e9099e7a5fb6b2041d0301ccd"

function Coin(props) {
    const API = 'http://localhost:3010/api/v1/coins/';
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    
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
                            <Grid item xs={5}>
                                <CryptoCompare from="ETH" to="USD" amount={props.coinDataToCoin.cost} apikey={APIkey} />
                            </Grid>
                            <Grid item xs={2}>
                                Ξ {props.coinDataToCoin.cost}
                            </Grid>
                            <Grid item xs={5}>
                                <FontAwesomeIcon icon={faEthereum} />
                                <Button
                                    onClick={async () => {
                                        const coinPurchaseInfo = await sellCoin(props.coinsOriginal.id);
                                        console.log("PURCHASE INFO", coinPurchaseInfo)
                                        // setCoins(coinsPostInfo);
                                        navigate(`/main`)
                                    }}
                                >  Sell coin</Button>
                            </Grid>
                        </Grid>
                    </CardActions> 
                </Card>
        </Grid>
        )
}

export default Coin;