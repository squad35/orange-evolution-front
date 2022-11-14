import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AddContent from './pages/AddContent'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SearchContent from './pages/SearchContent';



class App extends Component {
  render(){

    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/addcontent" element={<AddContent/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/search" element={<SearchContent/>}/>
        </Routes>

      </Router>
      
      // <Box>
      //   {/* <Grid container display='flex'justifyContent='center' spacing={2} mt={5}>
      //     <Grid item display='flex' justifyContent='center' xs={12} px={3}>
        
      //         <Button>Save</Button>
      //         <Button lg='12' variant="contained">Testando</Button>
            
      //     </Grid>
      //     <Grid item display='flex' justifyContent='center' xs={12} >
    
      //       <ButtonGroup color="success" spacing="3" variant="contained" aria-label="outlined primary button group">
      //         <Button >One</Button>
      //         <Button>Two</Button>
      //         <Button>Three</Button>
      //       </ButtonGroup>
    
      //     </Grid>
      //   </Grid>
        
      //   <FetchData /> */}
      //   <Header />
      //   <Login />
  
      // </Box> 
  )
  }
        
}
export default App;