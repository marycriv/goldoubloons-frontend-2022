import React, { useContext } from 'react'; 

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { CoinsContext } from '../contexts/CoinsContext';
import { PressingsContext } from '../contexts/PressingsContext';

import { sellCoin } from '../actions/sellCoin';
import { updateCoin } from '../actions/updateCoin';
import { buyCoin } from '../actions/buyCoin';
import { auctionPurchase } from '../actions/auctionPurchase';

import '../styling.css';

function renderSwitch(props, user, setUser, setCoins, setPressings, navigate) {
    switch(props.location) {
      case 'wallet':
        return(
            <>
                <Grid item xs={3}>
                    <Switch
                        checked={props.originalCoin.attributes.for_sale}
                        inputProps={{ 'aria-label': 'controlled' }}
                        onChange={async () => {
                           const auctionCoinOff = await updateCoin({ for_sale: !props.originalCoin.attributes.for_sale}, user.id, props.originalCoin.id);
                           setCoins(auctionCoinOff.coinsInfo);
                           setPressings(auctionCoinOff.pressingInfo);
                        }}/>
                        For sale?
                </Grid>
                <Grid item xs={4}>
                    <Button
                        onClick={async () => {
                            const coinPurchaseInfo = await sellCoin(props.originalCoin.id, user.id);
                            setUser(coinPurchaseInfo.userInfo)
                            setCoins(coinPurchaseInfo.coinsInfo)
                            setPressings(coinPurchaseInfo.pressingInfo)
                            navigate(`/success`)
                        }}> 
                        Sell now
                    </Button>
                </Grid>
            </>
        );
      case 'preview':
        return(
            <Grid item xs={props.pressingData.cost}>
                <FontAwesomeIcon icon={faEthereum} />
            </Grid>
        );
      case 'marketplace':
        return(
            <>
                <Grid item xs={7}>
                    <Button 
                        size="small" 
                        zindex={1}
                        onClick={async () => {
                            const buyInfo = await buyCoin({pressing_id: props.pressingId, user_id: user.id, for_sale: false}, user.id);
                            setCoins(buyInfo.coinsInfo)
                            setUser(buyInfo.userInfo)
                            setPressings(buyInfo.pressingInfo)
                            navigate(`/success`)
                        }}>
                    <FontAwesomeIcon icon={faEthereum} /> Buy Now</Button>
                </Grid>
            </>
        );
      case 'auction':
        return(
          <>
            <Grid item xs={4}>
              {props.userId === user.id ? <b>You own this coin!</b> 
              : <Button 
                size="small" 
                zindex={1}
                onClick={async () => {
                  const auctionInfo = await auctionPurchase({pressing_id: props.pressingData.id, user_id: user.id, for_sale: false}, user.id, props.coinId);
                  setCoins(auctionInfo.coinsInfo)
                  setUser(auctionInfo.userInfo)
                  setPressings(auctionInfo.pressingInfo)
                  navigate(`/success`)
                }}>
                  <FontAwesomeIcon icon={faEthereum} /> Buy Now
              </Button>}
            </Grid>
            <Grid item xs={3}>
              <img className="footer-icon" src={process.env.PUBLIC_URL + props.userInfo.icon} title={props.userInfo.display_name} />
            </Grid>
          </>
        );
      case 'error':
        return(
            <div>Error</div>
        );
      default:
        return 'error';
    };
};

function CardFooter(props) {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const { setCoins } = useContext(CoinsContext);
    const { setPressings } = useContext(PressingsContext);

        return(
            <>
                {renderSwitch(props, user, setUser, setCoins, setPressings, navigate)}
            </>
        )
}

export default CardFooter;