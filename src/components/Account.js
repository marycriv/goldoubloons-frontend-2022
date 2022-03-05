import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Settings from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

import { logout } from '../actions/logout';

export default function Account() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="My portfolio">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            className="user-icon"
          >
            <img src={process.env.PUBLIC_URL + user.username + `.png`} alt={user.username} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={ () => {
            navigate(`/${user.username}`);
          }}
        >
          <AccountBalanceWalletIcon /> My portfolio
        </MenuItem>
        <Divider />
        <MenuItem 
          onClick={ () => {
          navigate(`/${user.username}/edit`);
        }}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
            Update profile
        </MenuItem>
        <MenuItem onClick={async () => {
          const logoutResp = await logout();
          console.log("LOGOUT STAT", logoutResp)
          setUser(null);
          navigate('/');
        }} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
            Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}