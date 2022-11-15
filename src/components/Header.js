import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../img/logo.svg';
import logout from '../services/LogoutService';
import { Link } from 'react-router-dom';
import CustomMenuItem from './CustomMenuItem';

const pages = ['Home', 'Trilhas', 'Parceiros', 'Newsletter', 'Login'];

function Header(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [logged, setLogged] = React.useState(localStorage.getItem('logged'));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = (e) => {
        logout();
        props.setLogged('false');
    };

    return (
        <AppBar position="fixed" color="secondary">
            <Container maxWidth="100vw">
                <Toolbar>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src={Logo} alt="logotipo Orange Juice" width="54px" />
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            p={0}
                            m={0}
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                width: '100vw',
                            }}
                        >
                            {/* {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    p={0}
                                    m={0}
                                    sx={{ minWidth: '100vw' }}
                                >
                                    <Typography textAlign="start" variant="h6" fontWeight={700}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))} */}
                            <CustomMenuItem
                                propsFunction={handleCloseNavMenu}
                                name="Home"
                                link="/"
                            />
                            <CustomMenuItem
                                propsFunction={handleCloseNavMenu}
                                name="Trilhas"
                                link="/"
                            />
                            <CustomMenuItem
                                propsFunction={handleCloseNavMenu}
                                name="Parceiros"
                                link="/"
                            />
                            <CustomMenuItem
                                propsFunction={handleCloseNavMenu}
                                name="Newsletter"
                                link="/"
                            />
                            <CustomMenuItem
                                propsFunction={handleCloseNavMenu}
                                name="Login"
                                link="/login"
                            />
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                            <SearchIcon />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <img src={Logo} alt="logotipo Orange Juice" width="32px" />
                    </Box>
                    <div style={{ flexGrow: 1 }}></div>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'end',
                        }}
                    >
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                        <Link to="/">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Trilhas
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Parceiros
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Newsletter
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Login
                            </Button>
                        </Link>
                    </Box>

                    {logged === 'true' && (
                        <>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} px={3}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/2.jpg"
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleLogout}>
                                        <Link to="/login">
                                            <Typography
                                                display="flex"
                                                flex-end
                                                variant="h6"
                                                fontWeight={700}
                                            >
                                                Sair
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
