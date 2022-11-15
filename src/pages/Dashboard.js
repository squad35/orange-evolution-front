import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import { Link, Navigate } from 'react-router-dom';

function Dashboard() {
    const [logged, setLogged] = useState(localStorage.getItem('logged'));
    const [userName, setUserName] = useState(
        localStorage.getItem('first_name').replace('"', '').replace('"', '')
    );

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
                        <Box maxWidth={400}>
                            <Typography py={2}>Atividades</Typography>
                            <Box>
                                <Link to="/addContent">
                                    <Button
                                        variant="contained"
                                        color="inherit"
                                        fullWidth
                                        size="large"
                                        p={3}
                                    >
                                        <Typography color="#000000" textTransform="none">
                                            Adicionar Conteúdo
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                            <Box py={4}>
                                <Link to="/search">
                                    <Button
                                        variant="contained"
                                        color="inherit"
                                        fullWidth
                                        size="large"
                                    >
                                        <Typography color="#000000" textTransform="none">
                                            Arquivar Conteúdo
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}

            {logged === 'false' && <Navigate to="/login" replace={true} />}
        </div>
    );
}

export default Dashboard;
