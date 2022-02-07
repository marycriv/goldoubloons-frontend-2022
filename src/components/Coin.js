import React from 'react'; 
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

import '../styling.css';



function Coin(props) {
    console.log(props.coinsOriginal.attributes.for_sale)
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
                                {props.coinDataToCoin.name} | {props.coinsOriginal.attributes.for_sale.toString()}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div">
                                <p dangerouslySetInnerHTML={{__html: props.coinDataToCoin.description}} />
                            </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <CryptoCompare from="ETH" to="USD" amount={10} apikey={APIkey} />
                            </Grid>
                            <Grid item xs={2}>
                                <FavoriteBorderIcon />
                            </Grid>
                            <Grid item xs={2}>
                                Ξ {props.coinDataToCoin.cost}
                            </Grid>
                            <Grid item xs={2}>
                                <FontAwesomeIcon icon={faEthereum} />
                            </Grid>
                        </Grid>
                    </CardActions> 
                </Card>
        </Grid>
        )
}

export default Coin;