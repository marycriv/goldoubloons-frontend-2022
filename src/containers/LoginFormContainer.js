import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { login, logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

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
    p: 4
  };

function LoginFormContainer() {
    // functionality for components
    const [details, setDetails] = useState({username: "", password: ""})
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // current user info
    const userInfo = useSelector(selectUser);

    // reducer stuff

    const dispatch = useDispatch();

    const loginHandler = e => {
        e.preventDefault();
        dispatch(login({
            username: details.username,
            password: details.password,
            loggedIn: true
        }))
    }
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

        return(
            <div className="contents">
            <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            // onSubmit={(e) => submitHandler(e)}
                        >
                                <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                onChange={e => setDetails({...details, username: e.target.value})}
                                value={details.username || ""}
                                />
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
                            { userInfo ? 
                                <Button 
                                    variant="contained" 
                                    onClick={e => logoutHandler(e)} 
                                >Logout</Button> : 
                                <Button 
                                    variant="contained" 
                                    onClick={(e) => loginHandler(e)}
                                >Login</Button>
                            }
                        </Box>
                    </Box>
                </Modal>
                </div>
        )
}

export default LoginFormContainer;