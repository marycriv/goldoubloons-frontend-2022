import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

import { update } from '../actions/update';

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

function UpdatePage(){

    const { user, setUser } = useContext(UserContext);
    const [details, setDetails] = useState({username: user.username, display_name: user.display_name, icon: user.icon, wallet: user.wallet});

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
                        id="outlined-required-username"
                        label="Username"
                        onChange={e => setDetails({...details, username: e.target.value})}
                        value={details.username || ""}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-required-display-name"
                        label="Display name"
                        onChange={e => setDetails({...details, display_name: e.target.value})}
                        value={details.display_name || ""}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-required-icon"
                        label="Icon"
                        onChange={e => setDetails({...details, icon: e.target.value})}
                        value={details.icon || ""}
                    />
                    <br/>
                    <br/>
                    <TextField
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
                            const updateResp = await update(details, user.id);
                            setUser(updateResp.updateInfo);
                            navigate(`/main`)
                        }}
                    >Update profile</Button>
                </Box>
            </Box>
        </>
    )
}

export default UpdatePage;