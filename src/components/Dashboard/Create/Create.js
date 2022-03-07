import Divider from '@mui/material/Divider';
import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CustomCard from './CustomCard/CustomCard';
import Button from '@mui/material/Button';
function Create() {
    const [obj, changeObj] = React.useState(
        [
            {
                dname: 'first database',
                tables: ['table1', 'table2', 'table3', 'table4']
            },
            {
                dname: 'second database',
                tables: ['table11', 'table12', 'table13', 'table14']
            },
            {
                dname: 'third database',
                tables: ['table21', 'table2', 'table3', 'table4']
            }
        ]);
    const [displaytable, changetable] = React.useState([]);
    var databaseSelected="";
    var tableSelected="";

    const tableClicked= (name)=>{
        tableSelected=name;
        console.log(`table selected is ${tableSelected} and database selected is ${databaseSelected}`);
    }

    const tableDelete= (name)=>{
    }

    const databaseClicked = (name) => {
        
        databaseSelected=name;
        var tablename = "";
        for (var i = 0; i < obj.length; i++)
            if (obj[i].dname === name) {
                tablename = obj[i].tables;
                break;
            }
        changetable(tablename.map((name, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
                <CustomCard name={name} uponClick={tableClicked} onDelete={tableDelete}></CustomCard>
            </Grid>
        )));
    }

    const databaseDelete = (name) => {
        // var d= obj.filter((items)=>{return items.dname!==name});
        // changeObj(d);
        // changetable([]);
    }

    
    return (
        <div>
            <h3> Databases </h3>
            <Container>
                <Grid container spacing={3}>
                    {
                        obj.map((item, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <CustomCard name={item.dname} uponClick={databaseClicked} onDelete={databaseDelete}></CustomCard>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            <br /><br />
            <Divider />
            <h3> Tables </h3>
            <Container>
                <Grid container spacing={3}>
                    {displaytable}
                </Grid>
            </Container>
            <br/><br/>
            <Button variant="outlined">Add table</Button>
        </div>
    )
}
export default Create;