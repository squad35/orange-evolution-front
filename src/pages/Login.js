import React, { useEffect, useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    InputLabel,
    OutlinedInput,
    IconButton,
    Button,
    FormControl,
    Hidden,
} from '@mui/material';
import { Visibility, VisibilityOff, Lock, Mail, ArrowRight } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from '../img/logo.svg';
import fetchService from '../services/fetchService';
import login from '../services/LoginService';
import logout from '../services/LogoutService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        logout();
    }, []);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        const response = await fetchService(
            'https://orange-evolution-squad35.herokuapp.com/users/login',
            'POST',
            user
        );
        const data = await response.json();

        if (response.status === 200) {
            alert('logado com sucesso, redirecionando para a home page.');

            login(data[0]);
            setLogged(true);
        } else {
            alert(data.message);
            return;
        }
    };

    return (
        <div className="Login">
            <Box
                width="100vw"
                height="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    maxWidth="400px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    gap={0.5}
                >
                    <Box display="flex" justifyContent="center" mb={2}>
                        <img src={Logo} alt="logotipo Orange Juice" width="144px" />
                    </Box>
                    <Hidden mdDown>
                        <Typography variant="h5" fontWeight={700} textAlign="center">
                            Evolua sua carreira
                        </Typography>
                    </Hidden>

                    <Typography variant="h5" fontWeight={700} mt={4}>
                        Login
                    </Typography>
                    <Typography fontWeight={400} pt={1}>
                        Insira suas informa????es
                    </Typography>
                    <InputLabel>
                        <Typography color="#ffffff" variant="subtitle2" fontWeight={400} pt={1}>
                            E-mail
                        </Typography>
                    </InputLabel>

                    <TextField
                        size="small"
                        color="primary"
                        fullwidht
                        focused
                        required
                        background="transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Mail sx={{ color: '#ffffff', fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <InputLabel htmlFor="outlined-adornment-password">
                        <Typography color="#ffffff" variant="subtitle2" fontWeight={400} pt={1}>
                            Senha
                        </Typography>
                    </InputLabel>
                    <FormControl color="secondary" focused>
                        <OutlinedInput
                            color="primary"
                            focused
                            required
                            fullwidht
                            size="small"
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock sx={{ color: '#ffffff', fontSize: 20 }} />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        sx={{ color: '#ffffff' }}
                                    >
                                        {showPassword ? (
                                            <VisibilityOff
                                                sx={{ color: '#ffffff', fontSize: 20 }}
                                            />
                                        ) : (
                                            <Visibility sx={{ color: '#ffffff', fontSize: 20 }} />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Typography fontWeight={500} mb={2}>
                        Esqueceu a senha
                    </Typography>
                    <Button onClick={handleSubmit} variant="outlined" size="large">
                        <Typography fontWeight={500} color="#ffffff" textTransform="none">
                            Entrar
                        </Typography>
                    </Button>
                    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                        <Typography className="Cadastrar" fontWeight={500}>
                            N??o tem uma conta?<b fontWeight={700}> Cadastre-se </b>
                        </Typography>
                        <ArrowRight />
                    </Box>
                </Box>
                {logged && <Navigate to="/dashboard" replace={true} />}
            </Box>
        </div>
    );
}

export default Login;
