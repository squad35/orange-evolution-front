const logout = () => {
    localStorage.setItem('first_name', '');
    localStorage.setItem('role', '');
    localStorage.setItem('email', '');
    localStorage.setItem('password', '');
    localStorage.setItem('logged', 'false');
};

export default logout;
