import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import LoginForm from '../components/LoginForm';

import '../styling.css';

function LoginFormContainer() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className="contents">
        <LoginForm />
        {/* <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <LoginForm />
            </Modal> */}
        </div>
    )
}

export default LoginFormContainer;