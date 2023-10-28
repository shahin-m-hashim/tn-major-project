import './hero.css'
import React from 'react';
import Container from '@mui/material/Container';

function HeroSection() {
    return (
        <div id="home">
            <section className="hero-sec banner-one banner-img">
                <Container maxWidth="xl">
                    <div className="banner-text text-center">
                        <h1>THE BEST <span>DIGITAL MARKETING</span> &amp; BRANDING</h1>
                        <p>
                            Welcome to Digital Boost Pro, where we specialize in the art of digital marketing and branding. Our passion lies in helping businesses thrive in the digital landscape, driving growth, and achieving success. With a team of creative minds and marketing experts, we're here to elevate your brand and create memorable experiences for your audience.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default HeroSection;
