import React from 'react'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Accounts = () => {
    return (
      <Container>
        {/* <Typography
         variant='h5'
         gutterBottom
         component='div'
         align='left'
         >
         Username
        </Typography> */}
        <h3>Username</h3>
        <Divider />
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Riddham"
          margin='normal'
          //sx={{alignContent: 'flex-start'}}

        />

        {/* <Typography
         variant='h5'
         gutterBottom
         component='div'
         align='left'>
         API Key
        </Typography> */}
        <h3>API Key</h3>
        <Divider />

        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="6mkmcke57jfhJDM23rceuvJJkLMOsc"
          margin='normal'
          //label=""
          //sx={{alignContent:'left'}}
        />
        {/* <Typography
         variant='h5'
         gutterBottom
         component='div'
         align='left'>
         Change Password
        </Typography> */}
        <h3> Change Password</h3>
        <Divider />
        <Button
        type="submit"
        color="primary"
        variant="contained"
        sx={{
          m : 2
        }}
        style={{textAlign: 'left'}}
        onClick={()=>console.log("Change Password Modal")}
        >
        Change Password
        </Button>

        {/* <Typography
        variant='h5'
        color='error'
        align='left'
        gutterBottom
        >
          Delete Account
        </Typography> */}
        <h3>Delete Account</h3>
        <Divider />
        <Button
        color='error'
        variant='outlined'
        sx={{
          m: 2,
        }}
        >
          Delete Account
        </Button>
        

      </Container>  
        
    );
}
 
export default Accounts;
