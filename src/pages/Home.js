import { Box, Divider, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import Header from '../components/Header';
import Background from '../img/background.jpg';
import fetchService from '../services/fetchService';
import trailImageDefault from '../assets/Trails.png';

function Home() {
    const [logged, setLogged] = useState(localStorage.getItem('logged'));
    const [trails, setTrails] = useState([]);

    const FetchTrails = async (url) => {
        const response = await fetchService(url, 'GET');
        const data = await response.json();
        setTrails(data);
    };

    useEffect(() => {
        FetchTrails('https://orange-evolution-squad35.herokuapp.com/trails');
    }, []);

    return (
        <div className="Home">
            <Header setLogged={setLogged} />
            <Box               
                display="flex"
                flexDirection="column"
                justifyContent="center"                
                width="100vw"
                height="50vh"
                sx={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'none',                    
                }}
                >
                <Box>
                    <Typography variant="h3" fontWeight={700} mt={4} px={5}>
                        Orange
                    </Typography>
                    <Typography variant="h3" fontWeight={700} mt={0} px={5}>
                        Evolution
                    </Typography>
                    <Typography fontWeight={700} pt={1}></Typography>
                </Box>
            </Box>
            <Box
                mt={5}                
                px={{ sm: 10, xs: 5 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                
                <Typography variant="h5" fontWeight={700} mb={5}>
                    Trilhas
                </Typography>
                <Grid container spacing={3} px={{ xs: 0, md: 1, sm: 2 }} maxWidth="xl">
                    {trails.map((trail) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <CourseCard
                                name={trail.name}
                                image={trail.image ? trail.image : trailImageDefault}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default Home;
