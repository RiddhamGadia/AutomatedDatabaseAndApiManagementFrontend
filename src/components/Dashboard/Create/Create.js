import Divider from '@mui/material/Divider';
import DatabaseName from './DatabaseName/DatabaseName';
import TableName from './TableName/TableName';
function Create()
{
    var obj=[
        {
            dname: 'first database',
            tables:['table1','table2','table3','table4']
        },
        {
            dname: 'first database',
            tables:['table1','table2','table3','table4']
        },
        {
            dname: 'first database',
            tables:['table1','table2','table3','table4']
        }
    ];

    return(
        <div>
            <h3> Databases </h3>
            <DatabaseName data={obj}/>
            <br/><br/>
            <Divider/>
            <h3> Tables </h3>
            <TableName/>
        </div>
    )
}
export default Create;