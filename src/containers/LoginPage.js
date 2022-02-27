import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { CoinsContext } from '../contexts/CoinsContext';
import { PressingsContext } from '../contexts/PressingsContext';

import { login } from '../actions/login';

import '../styling.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4, 
    outline: 0
  };

function LoginPage(){

    const { setUser } = useContext(UserContext);
    const { setCoins } = useContext(CoinsContext);
    const { setPressings } = useContext(PressingsContext);

    const [details, setDetails] = useState({username: "mike", password: "password"});

    const [errDisplay, setErrDisplay] = useState("error-alert")

    const navigate = useNavigate();

    return(
        <>
            <Box sx={style}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        onChange={e => setDetails({...details, username: e.target.value})}
                        value={details.username || ""}
                    />
                    <br/>
                    <br/>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={e => setDetails({...details, password: e.target.value})}
                        value={details.password}
                    />
                    <br/>
                    <br/>
                    <Button 
                        variant="outlined"
                        disableElevation
                        onClick={async () => {
                            const loginResponse = await login(details);
                              { if (loginResponse.loginInfo.status == 200) { 
                              console.log("LOGIN INFO", loginResponse.loginInfo.user, loginResponse.pressingInfo)
                              setUser(loginResponse.loginInfo.user)
                              setCoins(loginResponse.loginInfo.relationships)
                              setPressings(loginResponse.pressingInfo)
                              navigate(`/main`) 
                            } else {
                              console.log("loginError");
                              setErrDisplay("show-error")
                            }
                          }
                        }}
                    >Login</Button>
                    <div className={`${errDisplay}`}>
                      <Alert severity="error">Error, incorrect username or password.</Alert>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage;