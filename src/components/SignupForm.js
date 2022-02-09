import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { CoinsContext } from '../CoinsContext';

import { signup } from '../signup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

function LoginForm(){

    const API = 'http://localhost:3010/api/v1/';

    const { user, setUser } = useContext(UserContext);
    const { coins, setCoins } = useContext(CoinsContext);
    const [details, setDetails] = useState({username: "", display_name:"", password: "", icon: "", wallet: 1000});

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
                        id="outlined-required-username"
                        label="Username"
                        onChange={e => setDetails({...details, username: e.target.value})}
                        value={details.username || ""}
                    />
                    <br/>
                    <br/>
                    <TextField
                        required
                        id="outlined-required-display-name"
                        label="Display name"
                        onChange={e => setDetails({...details, display_name: e.target.value})}
                        value={details.display_name || ""}
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
                    <TextField
                        required
                        id="outlined-required-icon"
                        label="Icon"
                        onChange={e => setDetails({...details, icon: e.target.value})}
                        value={details.icon || ""}
                    />
                    <br/>
                    <br/>
                    <TextField
                        required
                        id="outlined-required-wallet"
                        label="$$$"
                        onChange={e => setDetails({...details, wallet: e.target.value})}
                        value={details.wallet || ""}
                    />
                    <br/>
                    <br/>
                    <Button 
                        variant="outlined"
                        disableElevation
                        onClick={async () => {
                            const signupInfo = await signup(details);
                            console.log("signup INFO", signupInfo)
                            // setUser(signupInfo.signupInfo.user);
                            // setCoins(signupInfo.signupInfo.relationships)
                            navigate(`/`)
                        }}
                    >Signup</Button>
                </Box>
            </Box>
        </>
    )
}

export default LoginForm;