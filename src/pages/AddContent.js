import React from 'react';
import Header from '../components/Header';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {Box, Grid, Hidden, IconButton, TextField, Autocomplete, Typography, FormControl, Input, TextareaAutosize, Button} from "@mui/material"

function AddContent() {
  const tipos = ['UX Design', 'QA', 'FullStack' ]
  const parceiros =['Alura', 'Cubos Academy', 'Curso em Vídeo', 'Udemy']
    
  return(
    <div>
      <Header />
      <Box mt={10} ms={2} px={5} display="flex" flexDirection="column">
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            color='inherit'>            
            <ArrowBack/>
          </IconButton>
        </Box>
        <Typography mt={2}>Adição de conteúdo:</Typography>
        <Grid container width="100vw" maxWidth="100%" spacing={2} display="flex" alignItems="center">
          <Grid item xs={3}><Typography>Tipo</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
                  <Autocomplete
                  disablePortal
                  focused                
                  options={tipos}
                  fullWidth
                  renderInput={(params) => <TextField focused {...params} />}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}><Typography>Nome</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
                  <TextField focused fullWidth type="text" id='nameContent'></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={3}><Typography>Parceiros</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
                  <Autocomplete
                  disablePortal
                  focused                
                  options={parceiros}
                  fullWidth
                  renderInput={(params) => <TextField focused {...params} />}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}><Typography>Duração</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
                  <TextField focused fullWidth type="text" id='timeContent'></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={3}><Typography>Tags</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
                  <TextField focused fullWidth type="text" id='tagsContent'></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={3}><Typography>Imagem</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
                  <TextField focused fullWidth type="image" id='imgContent'></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={3}><Typography>Link</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
                  <TextField focused fullWidth type="url" id='linkContent'></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={3}><Typography>Descrição</Typography></Grid>
          <Grid item xs={9}>
            <FormControl color='primary' focused fullWidth>
              <TextareaAutosize
                minRows={3}
                focused
                id="descContent"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}><Button>Adicionar</Button></Grid>
          
          
        </Grid>
      </Box>
      </div>
    )

}

export default AddContent;