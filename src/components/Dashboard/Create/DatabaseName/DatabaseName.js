import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CustomCard from '../CustomCard/CustomCard';
import CardHeader from '@mui/material/CardHeader';
import {  CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import DialogBox from '../DialogBox/DialogBox';
import DatabaseForm from '../Form/DatabaseForm';
function DatabaseName()
{
    var arr=['1st database','2nd database','3rd database','4th database'];
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };
    return(
        <div>
        <Container>
            <Grid container spacing={3}>
                {
                arr.map((item)=>(
                    <Grid item xs={12} md={6} lg={4}>
                        <CustomCard name={item}></CustomCard>
                    </Grid>
                ))
                }
                <Grid item xs={12} md={6} lg={4}>
                        
                <Card elevation={3}>
                    <CardActionArea onClick={handleClickOpen}>
                    <CardHeader
                    title='Add database'
                    />
                    </CardActionArea>
                </Card>

                </Grid>
            </Grid>
        </Container>
        <DialogBox open={open} handleClose={handleClose}>
            <DatabaseForm></DatabaseForm>
        </DialogBox>
        </div>
    )
}
export default DatabaseName;