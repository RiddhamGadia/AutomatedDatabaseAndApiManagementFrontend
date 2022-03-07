import React from 'react'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import { useContext } from 'react';
import { UserName, ApiKey } from '../Dashboard';
const Accounts = () => {

  const name = useContext(UserName);
  const apikey = useContext(ApiKey);
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

    </Container>

  );
}

export default Accounts;
