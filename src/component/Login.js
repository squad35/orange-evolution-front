import React from 'react';
import {Box, TextField, Typography, InputLabel, OutlinedInput, IconButton, Button, FormControl, Grid, Hidden} from '@mui/material';
import {Visibility, VisibilityOff, Lock, Mail, ArrowRight} from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from "../logo.svg"

function Login() {


  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    
    return(
        <div className='Login'>
        <Box width="100vw" height="100vh" color='#ffffff' display='flex' justifyContent='center' alignItems='center'>
          <Box maxWidth='400px'  display='flex' flexDirection='column' justifyContent="center" gap={0.5}>
            <Box display="flex" justifyContent="center" mb={2} >
              <img src={Logo} alt="logotipo Orange Juice" width="144px" />
            </Box>
            <Hidden mdDown>
              <Typography breakpo variant='h5' fontWeight={700} textAlign="center" >Evolua sua carreira</Typography>
            </Hidden>

            <Typography variant='h5' fontWeight={700} mt={4}>Login</Typography>
            <Typography fontWeight={400} pt={1}>Insira suas informações</Typography>
            <InputLabel >
              <Typography 
                color="#ffffff" variant='subtitle2' fontWeight={400} pt={1}>E-mail
              </Typography>
            </InputLabel>
            
            <TextField  
              size="small"
              color="primary"
              fullwidht
              focused
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <Mail sx={{ color: "#ffffff", fontSize: 20 }} />
                </InputAdornment>,
              }}           
            />
            <InputLabel htmlFor="outlined-adornment-password">
              <Typography 
                  color="#ffffff" variant='subtitle2' fontWeight={400} pt={1}>Senha
                </Typography>
                </InputLabel>
            <FormControl color='secondary' focused>
              <OutlinedInput
                color="primary"
                focused 
                required
                fullwidht
                size='small'

                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                startAdornment={
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#ffffff", fontSize: 20 }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: "#ffffff" }}
                    >
                      {values.showPassword ? <VisibilityOff sx={{ color: "#ffffff", fontSize: 20 }}/> : <Visibility sx={{ color: "#ffffff", fontSize: 20 }}/>}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
              <Typography fontWeight={500} mb={2}>Esqueceu a senha</Typography>
              <Button variant='outlined' size='large'><Typography fontWeight={500} color="#ffffff" textTransform="none">Entrar</Typography></Button>
              <Typography fontWeight={500} my={2} textAlign="center">Ou entre com</Typography>
              <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <Button fullwidht size="large" variant='outlined' sx={{color:"#D95946", border: "1px solid #D95946"}} startIcon={<Mail />}>
                      <Typography fontWeight={700} px={1} textTransform="none">Google</Typography>
                    </Button>
                  </Grid> 
                  <Grid item sm={6}>
                    <Button fullwidht variant='outlined' size="large" sx={{color:"#2196F3", border: "1px solid #2196F3"}} startIcon={<Mail />}>
                      <Typography fontWeight={700} px={1} textTransform="none">Outlook</Typography>
                    </Button>
                  </Grid>
              </Grid>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>

                
                <Typography className="Cadastrar" fontWeight={500}  >Não tem uma conta?<b fontWeight={700}> Cadastre-se </b></Typography><ArrowRight/>
              </Box>
              

          </Box>
        </Box>
        </div>
    )

}

export default Login;