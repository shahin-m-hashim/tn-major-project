import React from 'react';
import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'];

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit"
                sx={{ display: { xs: 'flex', md: 'none' } }}
                className='nav-toggler-ico'
            >
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='nav-menu'>
                {pages.map((page, index) => (
                    <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                        {page}
                    </Button>
                ))}
            </Typography>

            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default Navbar;
