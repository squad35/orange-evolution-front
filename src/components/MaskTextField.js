import { TextField } from '@mui/material';
import InputMask from 'react-input-mask';

const maskTextField = (props) => {
    return (
        <>
            <InputMask
                mask="99:59:59"
                value={props.duration}
                maskChar=" "
                onChange={(e) => props.function(e.target.value)}
                formatChars={{ 9: '[0-9]', 5: '[0-5]' }}
            >
                {() => <TextField size="small" focused fullWidth type="text" />}
            </InputMask>
        </>
    );
};

export default maskTextField;
