import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, InputAdornment, InputBase, TextField, Typography } from '@mui/material';
import Header from '../components/Header';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate } from 'react-router-dom';
import fetchService from '../services/fetchService';
import ContentCard from '../components/ContentCard/ContentCard';

function SearchContent() {
    const [logged, setLogged] = useState(localStorage.getItem('logged'));
    const [contents, setContents] = useState([]);
    const [searchParams, setSearchParams] = useState('');
    const [userName, setUserName] = useState(
        localStorage.getItem('first_name').replace('"', '').replace('"', '')
    );

    const FetchContents = async (url) => {
        const response = await fetchService(url, 'GET');
        const data = await response.json();

        console.log(response.status);
        if (response.status === 200) setContents(data);
        else setContents([]);
    };

    const handleSearch = () => {
        if (searchParams !== '' || searchParams !== null)
            FetchContents(
                `https://orange-evolution-squad35.herokuapp.com/contents/find-by-name/${searchParams.toLocaleLowerCase()}`
            );
        else FetchContents('https://orange-evolution-squad35.herokuapp.com/contents');
    };

    useEffect(() => {
        FetchContents('https://orange-evolution-squad35.herokuapp.com/contents');
    }, []);

    return (
        <div>
            {logged === 'true' && (
                <>
                    <Header setLogged={setLogged} />
                    <Box mt={10} ms={2} px={5} display="flex" flexDirection="column">
                        <Box mb={5}>
                            <Typography variant="h6" fontWeight={700}>
                                Olá, {userName}.
                            </Typography>
                            <Typography>Seja Bem vindo</Typography>
                        </Box>
                        <Box>
                            <Typography py={2}>Filtrar por:</Typography>

                            <Box maxWidth={400}>
                                <TextField
                                    size="small"
                                    color="primary"
                                    fullWidth
                                    value={searchParams}
                                    onChange={(e) => setSearchParams(e.target.value)}
                                    focused
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon
                                                    sx={{ color: '#ffffff', fontSize: 32 }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>

                            <Box py={4} maxWidth={400}>
                                <Button
                                    onClick={handleSearch}
                                    variant="contained"
                                    color="inherit"
                                    fullWidth
                                    size="large"
                                >
                                    <Typography color="#000000" textTransform="none">
                                        Buscar
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>

                        <Grid container spacing={3} px={{ xs: 0, md: 1, sm: 2 }} maxWidth="xl">
                            {contents.map((content) => (
                                <Grid item xs={12} sm={6} md={4}>
                                    <ContentCard
                                        title={content.name}
                                        type={content.content_type}
                                        description={content.description}
                                        author={content.author_name}
                                        duration={content.duration}
                                        image={content.image}
                                        link={content.link}
                                        id={content.id ? content.id : 0}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}

            {logged === 'false' && <Navigate to="/login" replace={true} />}
        </div>
    );
}

export default SearchContent;
