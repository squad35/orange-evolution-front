import React from 'react';
import Header from '../components/Header';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {Box, Hidden} from "@mui/material"

function AddContent() {

    
    return(
      <div>
        <Header />
        <Box mt={5} p={5} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <ArrowBack  sx={{ color: "#ffffff" }}/>
        </Box>      
      </div>
    )

}

export default AddContent;