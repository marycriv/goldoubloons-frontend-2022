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
import { UserContext } from "../UserContext";
import { CoinsContext } from '../CoinsContext';

import { useNavigate } from 'react-router-dom';

import '../styling.css';

function Pressing(props) {

    const API = 'http://localhost:3010/api/v1/';
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    const { coins, setCoins } = useContext(CoinsContext);

    function handlePurchase(e, id) {
        e.preventDefault();
        console.log("id", props.pressId)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pressing_id: props.pressId, user_id: user.user.id, for_sale: true })
        };
        
        fetch(API + `coins`, requestOptions)
        .then(response => response.json())
        .then(purchaseResponse => console.log(purchaseResponse))
        navigate(`/${user.user.username}`);
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
                            <Grid item xs={8}>
                                <Button 
                                    size="small" 
                                    zindex={1}
                                    onClick={(e) => handlePurchase(e)}
                                ><FontAwesomeIcon icon={faEthereum} /> Buy Now</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <FavoriteBorderIcon />
                            </Grid>
                            <Grid item xs={2}>
                                Ξ 3
                            </Grid>
                        </Grid>
                    </CardActions> 
                </Card>
        </Grid>
        )
}

export default Pressing;