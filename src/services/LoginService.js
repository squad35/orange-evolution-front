const login = (user) => {
    localStorage.setItem('first_name', user.first_name);
    localStorage.setItem('role', user.role);
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
    localStorage.setItem('logged', 'true');
};

export default login;
