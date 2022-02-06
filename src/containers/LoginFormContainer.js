import React, { useContext, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from '../login';
import { UserContext } from '../UserContext';
import Modal from '@mui/material/Modal';

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

function LoginFormContainer() {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState("");

    const [details, setDetails] = useState({username: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Login = (details) => {
        console.log(details)
        const user = {
            user: {
                username: details.username,
                password: details.password
            }
        }
        console.log(user)
        axios.post('http://localhost:3010/api/v1/login', user)
        .then(response => console.log(response.data.user));
        setUser(user);
    }

    const Logout = (e) => {
        e.preventDefault();

        console.log("logout")
        axios.post('http://localhost:3010/api/v1/logout')
        .then(response => console.log(response));
        setUser(null);
    }

        return(
            <>
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
                            { user ? <Button variant="contained" onClick={e => Logout(e)} >Logout</Button> : 
                                <Button variant="contained" onClick={e => submitHandler(e)} >Login</Button>
                            }
                        </Box>
                    </Box>
                </Modal>
            </>
        )
}

export default LoginFormContainer;