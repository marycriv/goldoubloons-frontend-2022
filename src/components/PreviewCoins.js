import React from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import CryptoCompare from "react-crypto-compare";

import '../styling.css';

const APIkey = "bc55a72d6dbc877359d7bef56d7d183547ab835e9099e7a5fb6b2041d0301ccd"

function PreviewCoins() {
    return(
        <>
            <h3>These could be yours! Sign up today!</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item>
                    <Card sx={{ width: 350 }} elevation={0} variant="outlined">
                        <CardMedia
                            component="img"
                            image={process.env.PUBLIC_URL + `placeholder.png`}
                            alt="placeholder image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="coin-titles">
                                    Visible to logged in users only
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div">
                                    <p>This is an extremely rare coin</p>
                                </Typography>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CryptoCompare from="ETH" to="USD" amount={8} apikey={APIkey} />
                                </Grid>
                                <Grid item xs={2}>
                                    <FavoriteBorderIcon />
                                </Grid>
                                <Grid item xs={2}>
                                    Ξ 7
                                </Grid>
                                <Grid item xs={2}>
                                    <FontAwesomeIcon icon={faEthereum} />
                                </Grid>
                            </Grid>
                        </CardActions> 
                    </Card>
                    </Grid>

                    <Grid item>
                    <Card sx={{ width: 350 }} elevation={0} variant="outlined">
                        <CardMedia
                            component="img"
                            image={process.env.PUBLIC_URL + `placeholder.png`}
                            alt="placeholder image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="coin-titles">
                                    Visible to logged in users only
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div">
                                    <p>This is an extremely rare coin</p>
                                </Typography>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CryptoCompare from="ETH" to="USD" amount={7} apikey={APIkey} />
                                </Grid>
                                <Grid item xs={2}>
                                    <FavoriteBorderIcon />
                                </Grid>
                                <Grid item xs={2}>
                                    Ξ 7
                                </Grid>
                                <Grid item xs={2}>
                                    <FontAwesomeIcon icon={faEthereum} />
                                </Grid>
                            </Grid>
                        </CardActions> 
                    </Card>
                    </Grid>

                    <Grid item>
                    <Card sx={{ width: 350 }} elevation={0} variant="outlined">
                        <CardMedia
                            component="img"
                            image={process.env.PUBLIC_URL + `placeholder.png`}
                            alt="placeholder image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="coin-titles">
                                    Visible to logged in users only
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div">
                                    <p>This is an extremely rare coin</p>
                                </Typography>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CryptoCompare from="ETH" to="USD" amount={2} apikey={APIkey} />
                                </Grid>
                                <Grid item xs={2}>
                                    <FavoriteBorderIcon />
                                </Grid>
                                <Grid item xs={2}>
                                    Ξ 7
                                </Grid>
                                <Grid item xs={2}>
                                    <FontAwesomeIcon icon={faEthereum} />
                                </Grid>
                            </Grid>
                        </CardActions> 
                    </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
        )
    }

export default PreviewCoins;