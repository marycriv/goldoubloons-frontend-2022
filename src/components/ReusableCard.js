import React, { useContext } from 'react'; 

import CardFooter from './CardFooter';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import CryptoCompare from "react-crypto-compare";

import { UserContext } from '../contexts/UserContext';

import '../styling.css';

function ReusableCard(props) {

  const { user } = useContext(UserContext);
    
    return(
      <Grid item>
        <Card sx={{ width: 350 }} elevation={0} variant="outlined">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + props.pressingData.slug + `.gif`}
            alt={props.pressingData.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="coin-titles">
              {props.pressingData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <p dangerouslySetInnerHTML={{__html: props.pressingData.description}} />
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <CryptoCompare from="ETH" to="USD" amount={props.pressingData.cost} apikey={`${process.env.REACT_APP_CRYPTOCOMPARE_API_KEY}`} />
              </Grid>
              <Grid item xs={2}>
                Ξ {props.pressingData.cost}
              </Grid>
              <CardFooter 
                user={user}
                location={props.location}
                pressingId={props.pressingId}
                walletCoin={props.walletCoin}
                originalCoin={props.originalCoin}
                pressingData={props.pressingData}
                userId={props.userId}
                coinId={props.coinId}
                userInfo={props.userInfo}
              />
            </Grid>
          </CardActions> 
        </Card>
      </Grid>
        )
}

export default ReusableCard;