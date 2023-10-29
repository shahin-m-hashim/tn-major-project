import React from 'react';
import {
    Container,
    Grid,
    Card,
    CardMedia,
    Typography,
} from '@mui/material';

const portfolioData = [
    {
        image: require("../../assets/images/Portfolio/item1.jpg"),
        title: 'Product Design',
    },
    {
        image: require("../../assets/images/Portfolio/item2.jpg"),
        title: 'Branding',
    },
    {
        image: require("../../assets/images/Portfolio/item3.jpg"),
        title: 'Search Engine Optimization',
    },
    {
        image: require("../../assets/images/Portfolio/item4.jpg"),
        title: 'Social Media Marketing',
    },
    {
        image: require("../../assets/images/Portfolio/item5.jpg"),
        title: 'UI/UX Design',
    },
    {
        image: require("../../assets/images/Portfolio/item6.jpg"),
        title: 'Digital Marketing',
    },
];

function PortfolioSec2() {
    return (
        <Container>
            <Grid container spacing={3}>
                {portfolioData.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Card className="portfolio-box">
                            <CardMedia
                                component="img"
                                alt={item.title}
                                src={item.image}
                                width="350px"
                                height="261px"
                            />
                            <br />
                            <center>
                                <Typography variant="h5" component="div" className="mt-3">
                                    <b>{item.title}</b>
                                </Typography>
                            </center>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PortfolioSec2;
