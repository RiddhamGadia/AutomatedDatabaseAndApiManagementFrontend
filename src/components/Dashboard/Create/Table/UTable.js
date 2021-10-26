import MaterialTable from "material-table";
import { useState } from 'react';

const UTable = () => {
    const got = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: 'Saslu', age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ]

    const columns=[
        {title: 'ID', field: 'id', editable: false},
        {title: 'First Name', field: 'firstName'},
        {title: 'Last Name', field: 'lastName'},
        {title: 'Age', field: 'age'},
    ]
    
    const [data, setData] = useState(got);

    return (  
        <div>
            <h1>User Table</h1>
            <MaterialTable
            title="User Tabel"
            data={data}
            columns={columns}
            editable={{
                onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                    const updatedRows = [...data, newRow]
                    setTimeout(()=>{
                        setData(updatedRows)
                        resolve()},2000)                    
                    console.log(newRow)
                }),
                onRowDelete:selectedRow=>new Promise((resolve, reject)=>{
                    console.log(selectedRow.tableData.id);
                    const index = selectedRow.tableData.id;
                    const updateRows = [...data]
                    updateRows.splice(index,1)
                    setTimeout(()=>{
                        setData(updateRows)
                        resolve()
                    },2000)
                    //console.log(updateRows)
                }),
                onRowUpdate:(updatedRow,oldRow)=> new Promise((resolve,reject)=>{
                    const index = oldRow.tableData.id
                    const updatedRows = [...data]
                    updatedRows[index] = updatedRow
                    setTimeout(()=>{
                        setData(updatedRows)
                        resolve()
                    },2000)
                    //console.log("updated row: ", newRow)
                })
                
            }}
            options={{
                //actionsColumnIndex: -1,
                //addRowPosition: 'first'
                
            }}
            />
        </div>
        

        
    );
}
 
export default UTable;