import React from 'react';
import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
    {
        name: 'Home',
        id: '#home'
    }, {
        name: 'About Us',
        id: '#about-sec'
    }, {
        name: 'Services',
        id: '#service-sec'
    }, {
        name: 'Portfolio',
        id: '#portfolio-sec'
    }, {
        name: 'Contact Us',
        id: '#contact-sec'
    }
];

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
                {pages.map((page) => (
                    <a href={page.id}>
                        <Button style={{ color: '#f6994b' }} key={page.name} sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page.name}
                        </Button>
                    </a>
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
                    <MenuItem key={page.name} onClick={handleCloseMenu}>
                        <a href={page.id} style={{ color: '#f6994b' }}>
                            <Typography textAlign="center">
                                {page.name}
                            </Typography>
                        </a>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default Navbar;
