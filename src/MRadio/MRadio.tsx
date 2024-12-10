import {useState} from 'react';
import {Radio, RadioGroup, FormControl, FormControlLabel, FormLabel} from "@mui/material";
import {pink} from '@mui/material/colors'

const MRadio = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e: any) => {
        setSelectedValue(e.target.value);
    }

    const handleChangeGender = (e: any) => {
        console.log(e.target.value);
    }

    return (
        <>       
            <FormControl>
                <FormLabel id="demo-radio-bts-group-label"></FormLabel>
                <RadioGroup defaultValue="female" name="gender" row onChange={handleChangeGender}>
                    <FormControlLabel value="female" label="Female" control={<Radio />}></FormControlLabel>
                    <FormControlLabel value="male" label="male" control={<Radio />}></FormControlLabel>
                    <FormControlLabel value="other" label="other" control={<Radio />}></FormControlLabel>
                </RadioGroup>
            </FormControl>
            <Radio
                color="info"
                name="radio-buttons"
                inputProps={{"aria-label": 'Yes'}}
                value="yes"
                checked={selectedValue === 'yes'}
                onChange={handleChange}
            />
            <Radio 
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
                name="radio-buttons"
                inputProps={{"aria-label": 'No'}}
                value="no"
                checked={selectedValue === 'no'}
                onChange={handleChange}
            />
        </>
    )
}

export default MRadio;
