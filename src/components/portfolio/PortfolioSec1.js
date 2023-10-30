import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    List
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const portfolioData = [
    {
        name: 'Lucy Smith',
        image: require("../../assets/images/team/person1.jpg"),
        description: 'A seasoned digital marketing expert with a track record of successful campaigns. She specializes in social media marketing and content strategy.',
        socialIcons: [<Facebook />, <Twitter />, <Instagram />, <LinkedIn />],
    },
    {
        name: 'Alex Maxwell',
        image: require('../../assets/images/team/person2.jpg'),
        description: 'A creative digital marketer known for his innovative approach to advertising. He excels in designing compelling ad campaigns.',
        socialIcons: [<Facebook />, <Twitter />, <Instagram />, <LinkedIn />],
    },
    {
        name: 'Steven Doe',
        image: require('../../assets/images/team/person3.jpg'),
        description: 'An analytics guru with expertise in data-driven marketing. He leverages data to optimize campaigns and greatly drive results.',
        socialIcons: [<Facebook />, <Twitter />, <Instagram />, <LinkedIn />],
    },
    {
        name: 'Max Damon',
        image: require('../../assets/images/team/person4.jpg'),
        description: 'A digital marketing strategist who specializes in SEO and SEM. He has a proven track record of boosting website traffic and conversions.',
        socialIcons: [<Facebook />, <Twitter />, <Instagram />, <LinkedIn />],
    },
];

function PortfolioSec1() {
    return (
        <div className="portfolio-section expert-team grapping" id="portfolio-sec">
            <Container>
                <div className="title-box">
                    <center>
                        <Typography variant="h2">
                            <b>PORTFOLIO</b>
                        </Typography>
                        <br /><br />
                        <Typography variant='h4'>
                            <b>Expert Team</b>
                        </Typography>
                    </center>
                </div>
                <br />
                <Grid container spacing={3}>
                    {portfolioData.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={6} lg={3}>
                            <Card className='person-container'>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        alt={item.name}
                                        image={item.image}
                                        className='person-img'
                                    />
                                    <br />
                                    <Typography variant="h4" color="primary">
                                        {item.name}
                                    </Typography>
                                    <br />
                                    <Typography textAlign={'left'}>{item.description}</Typography>
                                    <br />
                                    <List
                                        component="nav"
                                        aria-label="portfolio item icons"
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px', // Adjust the gap as needed
                                        }}
                                    >
                                        {item.socialIcons.map((icon, i) => (
                                            <a key={i} href="/" className="list-group-item">
                                                {icon}
                                            </a>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default PortfolioSec1;
