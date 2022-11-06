import logo from './logo.svg';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function App() {
  return (
    <div>
        <div>
      <Button lg='12' variant="contained">Testando</Button>

        </div>
        <div>
      <ButtonGroup color="success" spacing="3" variant="contained" aria-label="outlined primary button group">
      <Button >One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

        </div>
    </div>
  );
}
