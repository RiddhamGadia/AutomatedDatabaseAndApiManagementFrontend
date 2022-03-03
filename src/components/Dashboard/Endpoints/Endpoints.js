import Container from '@mui/material/Container'
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';

const Endpoints = () => {
    const [database, setDatabase] = useState('')
    const handleChange = (event) => {
        setDatabase(event.target.value)
    }

    return (
        <Container sx={{ m: 3}}>
            {/* <Typography variant='h6'color='primary' align='left' gutterBottom>
                Select Database
            </Typography><br/> */}
            <h3>Select Database</h3>
            <TextField
                id='select'
                select
                label='select-database'
                value={database}
                onChange={handleChange}
                helperText="Please select the database"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'riddham/db1'}>db1</MenuItem>
                <MenuItem value={'riddham/db2'}>db2</MenuItem>
                <MenuItem value={'riddham/db3'}>db3</MenuItem>
            </TextField><br/><br/>

            {/* <Typography
                variant='h6'
                color='primary'
                align='left'
            >
                Enter Api Key
            </Typography><br /> */}
            {/* <h3> Enter Api Key</h3>
            <TextField id="standard-basic" label="Standard" variant="standard"
                margin='normal'
            /><br/> */}

            <TextField
                id="standard-read-only-input"
                label="Endpoints"
                //defaultValue="/riddham/database1"
                value={database}
                //onChange={}
                InputProps={{
                    readOnly: true,
                }}
                variant="standard"
            />

        </Container>
    );
}

export default Endpoints;
