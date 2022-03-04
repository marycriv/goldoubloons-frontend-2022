import React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GavelIcon from '@mui/icons-material/Gavel';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

import { useNavigate } from 'react-router-dom';

export default function LogoNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Navigate">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            className="user-icon"
                        >
                            <img src={process.env.PUBLIC_URL + "logo.png"} alt="logo" />
                        </IconButton>
                    </Tooltip>
                </Box><Menu
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
                            navigate(`/`);
                        }}>
                            <ListItemIcon>
                                <HomeIcon fontSize="small" />
                            </ListItemIcon>
                            Home
                        </MenuItem>
                        <Divider />
                        <MenuItem 
                            onClick={ () => {
                            navigate(`/main`);
                        }}>
                            <ListItemIcon>
                                <PaidIcon fontSize="small" />
                            </ListItemIcon>
                            Pressings Container
                        </MenuItem>
                        <Divider />
                        <MenuItem 
                            onClick={ () => {
                            navigate(`/auctions`);
                        }}>
                            <ListItemIcon>
                                <GavelIcon fontSize="small" />
                            </ListItemIcon>
                            Auction Container
                        </MenuItem>
                        <Divider />
                        <MenuItem 
                            onClick={ () => {
                            navigate(`/video`);
                        }}>
                            <ListItemIcon>
                                <OndemandVideoIcon fontSize="small" />
                            </ListItemIcon>
                            Video - WIP
                        </MenuItem>
                    </Menu>
    </React.Fragment>
  );
}