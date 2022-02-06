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

import '../styling.css';

function Coin(props) {
    console.log(props)
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
                                <Button size="small" href={`link`} zindex={1}>Read More</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <FavoriteBorderIcon />
                            </Grid>
                            <Grid item xs={2}>
                                Ξ 3
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