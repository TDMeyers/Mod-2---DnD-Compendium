import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Homepage() {
    return (
        <div>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100vh',
                            borderRadius: 2,
                            flexGrow: 1,
                        },
                    }}
                >
                    <Paper sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                    }} elevation={3}>
                        <Card sx={{
                            maxWidth: '85%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // Centering the content inside the Card
                        }}>
                            <CardMedia
                                sx={{ height: '100%', width:'100%' }}
                                component="img"
                                image="/src/Styles/DDLogo.png"
                                title="D & D Logo"
                            />
                            <Typography variant="body1">"Embark on an epic journey through the realms of Dungeons & Dragons with our comprehensive compendium website! Unravel the mysteries of forgotten lore, unearth powerful spells and magical artifacts, and discover a treasure trove of character options. Whether you're a seasoned adventurer or a curious novice, our complete resource collection will ignite your imagination and enhance your gaming experience. Delve into a world of boundless creativity and endless possibilities. Begin your quest now and let the D&D compendium be your ultimate companion in the realms of fantasy."</Typography>
                        </Card>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
}