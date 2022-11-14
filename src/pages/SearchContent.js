import React from "react";
import { Box, Button, InputAdornment, InputBase, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import SearchIcon from '@mui/icons-material/Search'


function SearchContent() {
    
    return(
        <div>
            <Header />
            <Box mt={10} ms={2} px={5} display="flex" flexDirection="column">
                <Box mb={5}>
                    <Typography variant="h6" fontWeight={700}>Olá, Admin.</Typography>
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
                                startAdornment: <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#ffffff", fontSize: 32 }} />
                                </InputAdornment>,
                        }}           
                        />              

                    </Box>
                                       

                    
                    <Box py={4} maxWidth={400}>                    
                        <Button variant="contained" color='inherit' fullWidth size="large"><Typography color="#000000" textTransform="none">Buscar</Typography></Button>
                    </Box>
                </Box>
            </Box>  
        </div>
    );
}

export default SearchContent;