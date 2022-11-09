import React from 'react';
import {Box, TextField, Typography, InputLabel, OutlinedInput, IconButton, Button, FormControl} from '@mui/material';
import {Visibility, VisibilityOff, Lock, Mail} from '@mui/icons-material';
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
          <Box  maxWidth='400px' display='flex' flexDirection='column' justifyContent="center">
          <Box display="flex" justifyContent="center" mb={6}>
            <img src={Logo} alt="logotipo Orange Juice" width="144px" />
          </Box>
          <Typography variant='h5' fontWeight={700}>Login</Typography>
          <Typography fontWeight={400} pt={1}>Insira suas informações</Typography>
          <InputLabel >
            <Typography 
              color="#ffffff" variant='subtitle2' fontWeight={400} pt={1}>Email
            </Typography>
          </InputLabel>
          
          <TextField  
          size="small"
          color="primary"
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
          <Typography fontWeight={400} mb={2}>Esqueceu a senha</Typography>
            <Button variant='outlined' size='large' color='secondary' >Entrar</Button>
          </Box>
        </Box>
        </div>
    )

}

export default Login;