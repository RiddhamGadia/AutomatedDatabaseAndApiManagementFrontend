import React from 'react'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import {useState} from 'react'

const Accounts = () => {

  const[name,setName]=useState("riddham");
  const [apikey, setApikey]= useState('3f32fsdf3434sf');
    return (
      
      <Container>
        <h3>Username</h3>
        <Divider />
        <TextField
          disabled
          id="outlined-disabled"
          value={name}
          margin='normal'
        />
        <h3>API Key</h3>
        <Divider />

        <TextField
          disabled
          id="outlined-disabled"
          value={apikey}
          margin='normal'
        />

        {/* <Typography
        variant='h5'
        color='error'
        align='left'
        gutterBottom
        >
          Delete Account
        </Typography> */}

        {/* <h3>Delete Account</h3>
        <Divider />
        <Button
        color='error'
        variant='outlined'
        sx={{
          m: 2,
        }}
        >
          Delete Account
        </Button> */}
        

      </Container>  
        
    );
}
 
export default Accounts;
