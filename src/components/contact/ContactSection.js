import './Contact.css'
import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Button,
} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ContactUs() {
    return (
        <div className="contact-section grapping" id="contact-sec">
            <Container>
                <div className="title-box">
                    <center>
                        <Typography variant="h2">
                            <b>Contact Us</b>
                        </Typography>
                        <br /><br />
                        <Typography variant='h6'>
                            Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        </Typography>
                    </center>
                </div>
                <br /><br />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Card className="address-box media">
                            <LocationOnIcon className="box-icon" />
                            <CardContent className="media-body">
                                <Typography variant="h5">
                                    <b>Address</b>
                                </Typography>
                                <div style={{ height: '1vh' }}></div>
                                <Typography>
                                    Exercisplan 4, 111 49 Stockholm, Sweden
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Card className="email-box media">
                            <EmailIcon className="box-icon" />
                            <CardContent className="media-body">
                                <Typography variant="h5">
                                    <b>Email</b>
                                </Typography>
                                <div style={{ height: '1vh' }}></div>
                                <a href="mailto:info@Soxolo.com">Info@soxolo.com</a>
                                <br />
                                <a href="mailto:support@Soxolo.com">support@soxolo.com</a>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Card className="phone-box media">
                            <PhoneIcon className="box-icon" />
                            <CardContent className="media-body">
                                <Typography variant="h5">
                                    <b>Phone</b>
                                </Typography>
                                <div style={{ height: '1vh' }}></div>
                                <a href="tel:+44 8888 888">+44 8888 888</a>
                                <br />
                                <a href="tel:+44 5555 458">+44 5555 458</a>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br /><br />
                <Grid container spacing={3} className='form-container'>
                    <Grid item md={4}>
                        <Typography variant="h4">Get In Touch</Typography>
                        <hr />
                        <br />
                        <Typography>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the system, and expound the actual teachings of the
                            great explorer praising I will give you a complete.
                        </Typography>
                        <br />
                        <div className='contact-links'>
                            <a href="/"><FacebookIcon /></a>
                            <a href="/"><TwitterIcon /></a>
                            <a href="/"><InstagramIcon /></a>
                            <a href="/"><LinkedInIcon /></a>
                            <a href="/"><YouTubeIcon /></a>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7.5}>
                        <form action="" className='contact-form'>
                            <div>
                                <TextField fullWidth label="Name" className='name-inp' />
                                <TextField fullWidth label="Email" className='email-inp' />
                            </div>
                            <br />
                            <TextareaAutosize
                                minRows={10}
                                placeholder="Your Message"
                                style={{ padding: '10px', width: '100%' }}
                            />
                        </form>
                        <br />
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: '#f6994b'
                            }}
                        >
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ContactUs;
