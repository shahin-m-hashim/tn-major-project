import React from 'react';
import './Footer.css'
import { Container, Grid, Typography } from '@mui/material';

function Footer() {
    return (
        <footer>
            <Container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2">
                            Copyright @ {new Date().getFullYear()}. All rights reserved
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ul className='footer-list'>
                            <li>
                                <a href="/">Terms &amp; Conditions&nbsp;&nbsp;&nbsp;|</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </footer >
    )
}

export default Footer;
