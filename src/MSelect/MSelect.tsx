import React, { useState } from "react";
import {
  Select,
  InputLabel,
  SelectChangeEvent,
  MenuItem,
  FormControl,
} from "@mui/material";

const MSelect = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl variant="filled" sx={{ minWidth: 120 }}>
      <InputLabel id="select-age">Age</InputLabel>
      <Select
        labelId="select-age"
        id="age"
        label="age"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MSelect;
