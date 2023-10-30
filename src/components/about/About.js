import './About.css'
import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Paper,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    TextField,
    Button,
} from '@mui/material';

function AboutSection() {
    return (
        <section className="abt-section about-box" id="about-sec">
            <Container>
                <center>
                    <Typography variant="h3">
                        <b>ABOUT US</b>
                    </Typography>
                </center>
                <br /><br /><br />
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6}>
                        <div style={{ display: 'grid', rowGap: '20px' }}>
                            <div className="about-img">
                                <img
                                    src={require("../../assets/images/aboutus.jpg")}
                                    alt="About Us"
                                    width={'100%'}
                                />
                            </div>
                            <div className="expertise">
                                <Paper variant="outlined" style={{ padding: '1.5vw' }} >
                                    <Typography variant="h5" component="div">
                                        Our Expertise
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Avatar>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '70%' }}>
                                                        <path d="M128 160C128 142.3 142.3 128 160 128H288C305.7 128 320 142.3 320 160V256C320 273.7 305.7 288 288 288H160C142.3 288 128 273.7 128 256V160zM288 320C323.3 320 352 291.3 352 256V224H416C433.7 224 448 238.3 448 256V352C448 369.7 433.7 384 416 384H288C270.3 384 256 369.7 256 352V320H288zM48 115.8C38.18 106.1 32 94.22 32 80C32 53.49 53.49 32 80 32C94.22 32 106.1 38.18 115.8 48H460.2C469 38.18 481.8 32 496 32C522.5 32 544 53.49 544 80C544 94.22 537.8 106.1 528 115.8V396.2C537.8 405 544 417.8 544 432C544 458.5 522.5 480 496 480C481.8 480 469 473.8 460.2 464H115.8C106.1 473.8 94.22 480 80 480C53.49 480 32 458.5 32 432C32 417.8 38.18 405 48 396.2V115.8zM96 125.3V386.7C109.6 391.6 120.4 402.4 125.3 416H450.7C455.6 402.4 466.4 391.6 480 386.7V125.3C466.4 120.4 455.6 109.6 450.7 96H125.3C120.4 109.6 109.6 120.4 96 125.3z" />
                                                    </svg>
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary="Perfect Design" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Avatar>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '70%' }}>
                                                        <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                                                    </svg>
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary="Friendly Support" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Avatar>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '60%' }}>
                                                        <path d="M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z" />
                                                    </svg>
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary="Minimalistic Approach" />
                                        </ListItem>
                                    </List>
                                </Paper>
                            </div>
                            <div className="achievements">
                                <Paper variant="outlined" style={{ padding: '1.5vw' }} >
                                    <Typography variant="h5" component="div">
                                        Our Achievements
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Avatar>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ width: '70%' }}>
                                                        <path d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                                                    </svg>
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary="Expert Team" secondary="95%" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Avatar>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '80%', paddingTop: '5px', paddingLeft: '5px' }}>
                                                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM228 104c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104z" />
                                                    </svg>
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary="SEO & Marketing" secondary="95%" />
                                        </ListItem>
                                    </List>
                                </Paper>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper variant="outlined" style={{ padding: '15px', height: '96.3%' }} >
                            <div className="title-box">
                                <Typography variant="h4" component="div">
                                    Know About Our <b>Mission</b>
                                </Typography>
                                <br />
                                <Typography variant="subtitle1">We Are Digital Marketing & Branding</Typography>
                            </div>
                            <Typography textAlign={'justify'}>
                                Our company was founded on a simple idea: to make digital marketing accessible and effective
                                for all businesses. We've stayed true to this mission since day one. Design isn't just about
                                aesthetics. it's about making your brand stand out and function flawlessly. Our team specializes
                                in crafting designs that leave a lasting impact. In a world driven by technology, we believe in
                                the power of creative design. Our team of dedicated professionals works tirelessly to deliver
                                perfect designs that not only look great but also function flawlessly. Friendly and responsive support is at the core
                                of our customer service. Your success is our top priority, and we're here to help every step of
                                the way. Our approach to design and branding is all about uniqueness. We thrive on innovative
                                ideas that set you apart in a crowded marketplace.
                            </Typography>
                            <br /><br /><br />
                            <Typography variant="h5"><center>Get in Touch</center></Typography>
                            <form>
                                <TextField
                                    label="Your Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Your Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Your Message"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    margin="normal"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                >
                                    Send Inquiry
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default AboutSection;
