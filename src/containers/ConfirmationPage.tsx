import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

import { UserContext } from "../contexts/UserContext";

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

function ConfirmationPage(){

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return(
    <>
      <Box sx={style}>
        <Box>
          <p>Success! </p>
          <br/>
          <Button 
            variant="outlined"
            disableElevation
            onClick={() => {
              navigate(`/${user.username}`)
            }}
          >
            Click here to return to your wallet
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default ConfirmationPage;