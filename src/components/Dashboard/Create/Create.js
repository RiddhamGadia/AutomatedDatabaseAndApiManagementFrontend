import Divider from '@mui/material/Divider';
import DatabaseName from './DatabaseName/DatabaseName';
import TableName from './TableName/TableName';
function Create()
{
    return(
        <div>
            <h3> Databases </h3>
            <DatabaseName/>
            <br/><br/>
            <Divider/>
            <h3> Tables </h3>
            <TableName/>
        </div>
    )
}
export default Create;