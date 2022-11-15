import { MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomMenuItem = (props) => {
    return (
        <MenuItem onClick={props.propsFunction} p={0} m={0} sx={{ minWidth: '100vw' }}>
            <Link to={props.link}>
                <Typography textAlign="start" variant="h6" fontWeight={700}>
                    {props.name}
                </Typography>
            </Link>
        </MenuItem>
    );
};

export default CustomMenuItem;
