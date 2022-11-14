import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Header from "../components/Header";


function Dashboard() {
    
    return(
        <div>
            <Header />
            <Box mt={10} ms={2} px={5} display="flex" flexDirection="column">
                <Box mb={5}>
                    <Typography variant="h6" fontWeight={700}>Olá, Admin.</Typography>
                    <Typography>Seja Bem vindo</Typography>
                </Box>
                <Box>
                    <Typography py={2}>Atividades</Typography>
                    <Box >
                        <Button variant="contained" color='inherit' fullWidth p={3}><Typography color="#000000" textTransform="none">Adicionar Conteúdo</Typography></Button>                     

                    </Box>
                    <Box py={4}>                    
                        <Button variant="contained" color='inherit' fullWidth ><Typography color="#000000" textTransform="none">Arquivar Conteúdo</Typography></Button>

                    </Box>
                </Box>
            </Box>  
        </div>
    );
}

export default Dashboard;