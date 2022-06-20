import React from 'react';
import {InputLabel, MenuItem, Select } from "@mui/material";
function Select1({label,data,onChange,value,name}) {
    return ( 
        <div>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              name={name}
              className="w-full"
              label={label}
              onChange={(e) => onChange(e)}
            >
             {data.map(month => {
                 return <MenuItem key={month} name={name} value={month}>{month}</MenuItem>
             })}
            </Select>
            
        </div>
            
     );
}

export default Select1;