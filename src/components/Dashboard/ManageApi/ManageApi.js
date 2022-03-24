import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
function ManageApi() {


    function createData(route, databasename, tablename, columnname, type) {
        return { route, databasename, tablename, columnname, type };
    }

     // useEffect(() => {
  //   console.log(localStorage.getItem("id"));
  //   if(localStorage.getItem("isAuthenticated"))
  //   axios.post("https://backend-fyp.herokuapp.com/api/frontend/genAuthToken",{
  //       "id": localStorage.getItem("id"),
  //   }).then(
  //       response=>{
  //           console.log(response);
  //           localStorage.setItem("token",response.data.token);
  //           // localStorage.setItem('');
  //           // changeName(response.data.username);
  //           // changeApi(response.body.api);
  //           changeSending(true);
  //       }
  //   ).catch(error=>{console.log(error);changeSending(true)});
// },[])

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <div>
            <h3>Manage API</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Route</TableCell>
                            <TableCell align="right">Database Name</TableCell>
                            <TableCell align="right">Table Name</TableCell>
                            <TableCell align="right">Column Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row,index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.route}
                                </TableCell>
                                <TableCell align="right">{row.databasename}</TableCell>
                                <TableCell align="right">{row.tablename}</TableCell>
                                <TableCell align="right">{row.columnname}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );

}

export default ManageApi;