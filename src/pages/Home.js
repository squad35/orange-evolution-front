import { Box, Divider, Grid, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";
import Header from "../components/Header";
import Background from "../img/background.jpg"

function Home() {
    return(
        <div className='Home'>
        <Header/>
        <Box mt={10} ms={2} px={{sm:10, xs:5}} display='flex' flexDirection="column" justifyContent='center'>     

            <Box maxWidth={230} height="50vh" sx={{backgroundImage: `url(${Background})`, backgroundSize: "",
                width: "100vw"}}>
                <Typography variant='h3' fontWeight={700} mt={4}>Orange Evolution</Typography>
                <Divider sx={{background:'#ffffff', pt: 0.5}}/>
                <Typography fontWeight={700} pt={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna elementum, aliquet neque quis, accumsan ex. Suspendisse vel eleifend tortor.</Typography>
            </Box>
            <Typography variant="h5" fontWeight={700} mb={5}>Trilhas</Typography>
            <Grid container spacing={3} px={{xs:0, md:1,sm:2}} maxWidth="xl">
                <Grid item xs={12} sm={6} md={4}>
                    <CourseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CourseCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CourseCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CourseCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CourseCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CourseCard/>
                </Grid>
            </Grid>
              
        </Box>
        </div>
    );
}

export default Home;
