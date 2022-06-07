import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function Select1({label,data}) {
    return ( 
        <div>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"January"}
              className="w-full"
              label="age"
            //   onChange={handleChange}
            >
             {data.map(month => {
                 return <MenuItem key={month} value={month}>{month}</MenuItem>
             })}
            </Select>
        </div>
            
     );
}

export default Select1;