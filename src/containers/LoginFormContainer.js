import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from '../login';
import { UserContext } from '../UserContext';

import '../styling.css';

function LoginFormContainer() {
    const { user, setUser } = useContext(UserContext);

        return(
            <>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    width={500}
                    className="login-form"
                >
                    <pre>{JSON.stringify(user, null, 2)}</pre>

                    <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Username"
                        />
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        />
                    </div>
                    { user ? <Button variant="contained"
                        onClick={() => {
                            setUser(null);
                        }}
                        >Logout</Button> : 
                        <Button variant="contained"
                        onClick={async () => {
                            const user = await login();
                            setUser(user);
                        }}
                    >Login</Button>
                    }
                </Box>
            </>
        )
}

export default LoginFormContainer;