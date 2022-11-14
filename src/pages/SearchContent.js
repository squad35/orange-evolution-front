import React, { useState } from 'react';
import { Box, Button, InputAdornment, InputBase, TextField, Typography } from '@mui/material';
import Header from '../components/Header';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate } from 'react-router-dom';

function SearchContent() {
    const [logged, setLogged] = useState(localStorage.getItem('logged'));
    const [userName, setUserName] = useState(
        localStorage.getItem('first_name').replace('"', '').replace('"', '')
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(logged);
    };

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
                                    onClick={handleSubmit}
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
                    </Box>
                </>
            )}

            {logged === 'false' && <Navigate to="/login" replace={true} />}
        </div>
    );
}

export default SearchContent;
