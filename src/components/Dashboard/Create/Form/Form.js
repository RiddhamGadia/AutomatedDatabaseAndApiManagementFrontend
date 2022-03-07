import TextField from '@mui/material/TextField';
import React from 'react';
import Button from '@mui/material/Button';

function Form() {

    const [dname, changeDname] = React.useState("");
    const [tname, changeTname] = React.useState("");
    const [inputList, setInputList] = React.useState([{ columnName: "", columnValue: "" }]);


    const onClickDatabase = (event) => {
        changeDname(event.target.value);
    }
    const onClickTable = (event) => {
        changeTname(event.target.value);
    }

    const handleInputChange = (e, index) => {
        console.log('entering event');
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { columnName: "", columnValue: "" }]);
    };

    const onClickSubmit = () => {
        console.log(inputList);
    }
    return (
        <div>
            <h3>Enter Database Name</h3>
            <TextField required
                label="Required"
                value={dname}
                onChange={onClickDatabase} />
            <h3>Enter Table Name</h3>
            <TextField required
                label="Required"
                value={tname}
                onChange={onClickTable} />
            <h3>Enter column name and values</h3>
            {
                inputList.map((x, i) => {
                    return (
                        <div>
                            <TextField type='text' name="columnName" value={x.columnName} placeholder="Enter column Name" onChange={e => handleInputChange(e, i)} />
                            <TextField type='text' name="columnValue" value={x.columnValue} placeholder="Enter column Value" onChange={e => handleInputChange(e, i)} />
                        </div>
                    );
                })


            }
            <br/>
            <Button variant="outlined" onClick={handleAddClick}>Add column</Button>
            <Button variant="outlined" onClick={onClickSubmit}>Submit</Button>
        </div>
    )

}
export default Form;