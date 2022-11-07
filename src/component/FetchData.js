import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';

function FetchData() {
    const[users, setUsers] = useState([]);
    const currentDate = new Date().toLocaleDateString();

    const recuperaDados = async(url)=>{
        const response = await fetch(url)
        const data = await response.json()

        setUsers(data)
        console.log(users)
    }
    
    useEffect(() => {
        const url = 'https://orange-evolution-squad35.herokuapp.com/users'
        recuperaDados(url)
    },[])

    return (
        
            <div className='FetchData'>
                {users.map((user) =>
                <Box display='flex' justifyContent='center' >
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem sx={{ p: 2, background:'#0a5483', border: '1px solid #0a5483', borderRadius: '16px', boxShadow:2, color: 'white'}}>
                        <ListItemAvatar>
                            <Avatar>
                            <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.name} secondary={currentDate} />
                        </ListItem>
                    </List>
                </Box>
                )}             
            </div>

    )

}

export default FetchData;