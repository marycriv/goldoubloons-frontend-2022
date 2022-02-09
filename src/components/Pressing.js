import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import Divider from '@mui/material/Divider';
import CryptoCompare from "react-crypto-compare";

import { UserContext } from "../UserContext";
import { CoinsContext } from '../CoinsContext';

import { useNavigate } from 'react-router-dom';

import '../styling.css';

const APIkey = "bc55a72d6dbc877359d7bef56d7d183547ab835e9099e7a5fb6b2041d0301ccd"

function Pressing(props) {

    const API = 'http://localhost:3010/api/v1/';
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    const { coins, setCoins } = useContext(CoinsContext);

    function handlePurchase(e, id) {
        e.preventDefault();
        console.log("id", props.pressId)
        console.log(user.id)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pressing_id: props.pressId, user_id: user.id, for_sale: true })
        };
        
        fetch(API + `coins`, requestOptions)
        .then(response => response.json())
        .then(purchaseResponse => console.log(purchaseResponse))
        navigate(`/success`);
    }

    console.log("props from pressing card", props)

        return(
            <Grid item>
            <Card sx={{ width: 350 }} elevation={0} variant="outlined">
                <CardMedia
                    component="img"
                    image={process.env.PUBLIC_URL + props.pressData.slug + `.gif`}
                    alt={props.pressData.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="coin-titles">
                            {props.pressData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            <p dangerouslySetInnerHTML={{__html: props.pressData.description}} />
                        </Typography>
                </CardContent>
            <Divider />
                    <CardActions>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button 
                                    size="small" 
                                    zindex={1}
                                    onClick={(e) => handlePurchase(e)}
                                ><FontAwesomeIcon icon={faEthereum} /> Buy Now</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <CryptoCompare from="ETH" to="USD" amount={props.pressData.cost} apikey={APIkey} />
                            </Grid>
                            <Grid item xs={2}>
                                Ξ {props.pressData.cost}
                            </Grid>
                        </Grid>
                    </CardActions> 
                </Card>
        </Grid>
        )
}

export default Pressing;