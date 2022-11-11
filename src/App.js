import React, {Component} from 'react';
import Box from '@mui/material/Box';
import Login from './component/Login';
import Header from './component/Header';



class App extends Component {
  render(){

    return (
      <Box>
        {/* <Grid container display='flex'justifyContent='center' spacing={2} mt={5}>
          <Grid item display='flex' justifyContent='center' xs={12} px={3}>
        
              <Button>Save</Button>
              <Button lg='12' variant="contained">Testando</Button>
            
          </Grid>
          <Grid item display='flex' justifyContent='center' xs={12} >
    
            <ButtonGroup color="success" spacing="3" variant="contained" aria-label="outlined primary button group">
              <Button >One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
    
          </Grid>
        </Grid>
        
        <FetchData /> */}
        <Header />
        <Login />
  
      </Box> 
  )
  }
        
}
export default App;