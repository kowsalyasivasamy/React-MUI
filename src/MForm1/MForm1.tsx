import {useState} from 'react';
import {
    Box,
    FormControl,
    TextField,
    InputLabel,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    Stack,
    Select,
    MenuItem,
    Button,
    // InputAdornment,
    FormHelperText
} from '@mui/material'

import "./MForm1.scss";

type Person = {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    url: string;
    choice: string;
    about: string;
};

const MForm1 = () => {
    const [formData, setFormData] = useState<Person>({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        url: '',
        choice: '',
        about: ''
    })

    const handleSubmit = (e: any) => {

    }

    return (
        <div className='form1'>
            <h1>Form in React</h1>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    margin: '10px',
                    '& .MuiTextField-root': { margin: '6px 0 14px', width: '55ch' },
                    '& .MuiInputBase-input': { padding: '10px 14px' },
                    '& .MuiFormLabel-root': { color: 'rgba(0, 0, 0, 0.9)' }
                }}
            >
                <InputLabel htmlFor="firstName">First Name*</InputLabel>
                <TextField
                    variant="outlined"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    placeholder='Enter First Name'
                    required
                    error={true}
                    helperText="Please enter valid first name"
                />

                <InputLabel htmlFor="firstName">Last Name*</InputLabel>
                <TextField
                    variant="outlined"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    placeholder='Enter Last Name'
                    required
                    error={true}
                    helperText="Please enter valid last name"
                />

                <InputLabel htmlFor="firstName">Email*</InputLabel>
                <TextField
                    variant="outlined"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder='Enter Email'
                    required
                    error={true}
                    helperText="Please enter valid email"
                />

                <InputLabel htmlFor="firstName">Contact*</InputLabel>
                <TextField
                    variant="outlined"
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    placeholder='Enter Contact'
                    required
                    error={true}
                    helperText="Please enter valid contact"
                />

                <FormControl
                    fullWidth
                    sx={{ margin: '2px 0 10px'}}
                    // error={true} //highlights the label
                >
                    <FormLabel id="gender-radio-bts-group-label">Gender*</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        defaultValue="male"
                        // onChange={handleChangeGender}
                        sx={{ justifyContent: 'center' }}
                    >
                        <FormControlLabel value="male" label="Male" control={<Radio />}></FormControlLabel>
                        <FormControlLabel value="female" label="Female" control={<Radio />}></FormControlLabel>
                        <FormControlLabel value="other" label="Other" control={<Radio />}></FormControlLabel>
                    </RadioGroup>
                    {true && <FormHelperText
                                sx={{ 
                                    color: '#d32f2f',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >Gender selection is required.</FormHelperText>}
                </FormControl>

                <FormControl fullWidth sx={{ margin: '2px 0 10px'}}>
                    <FormLabel id="subjects-checkbox-group-label">Your best Subject</FormLabel>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', margin: '2px 0 0' }}>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="English"/>
                        <FormControlLabel control={<Checkbox />} label="Maths" />
                        <FormControlLabel control={<Checkbox />} label="Physics" />
                    </Stack>
                    {true && <FormHelperText
                                sx={{ 
                                    color: '#d32f2f',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >Subject selection is required.</FormHelperText>}
                </FormControl>

                <InputLabel htmlFor="resume">Upload Resume*</InputLabel>
                <TextField
                    type="file"
                    value={formData.firstName}
                    // sx={{ '& .MuiInputBase-root': { paddingLeft: '8px' }}}
                    error={true}
                    helperText='No file choosen'
                    // InputProps={{
                    //     readOnly: true,
                    //     startAdornment: (
                    //         <InputAdornment position="start" sx={{ '& .MuiInputAdornment-root': { margin: 0 }}}>
                    //             <Button
                    //                 size="small"
                    //                 variant="contained"
                    //                 component="label"
                    //                 sx={{ textTransform: 'none'}}
                    //                 >
                    //                 Choose File
                    //                 <input
                    //                     type="file"
                    //                     hidden
                    //                     // onChange={handleFileChange} // Handle file change
                    //                 />
                    //             </Button>
                    //         </InputAdornment>
                    //     ),
                    // }}
                />

                <InputLabel htmlFor="url">URL*</InputLabel>
                <TextField
                    variant="outlined"
                    type="text"
                    id="url"
                    name="url"
                    value={formData.url}
                    placeholder='Enter URL'
                    required
                    error={true}
                    helperText="Please enter valid url"
                />

                <FormControl fullWidth sx={{ margin: '8px 0 10px' }}>
                    <FormLabel id="Choice-selectbox-label">Select your choice</FormLabel>
                    <Select
                        id="choice"
                        value={formData.choice}
                        displayEmpty
                        // onChange={handleChange}
                        sx={{ margin: '8px 0 2px' }}
                        error={true}
                    >
                        <MenuItem value="">
                            <em>Select your Answer</em>
                        </MenuItem>
                        <MenuItem value="React">React</MenuItem>
                        <MenuItem value="Angular">Angular</MenuItem>
                        <MenuItem value="Node">Node</MenuItem>
                    </Select>
                    {true && <FormHelperText
                                sx={{ 
                                    color: '#d32f2f'
                                }}
                            >Choice selection is required.</FormHelperText>}
                </FormControl>

                <InputLabel htmlFor="about">About</InputLabel>
                <TextField
                    multiline={true}
                    maxRows={10}
                    minRows={5}
                    variant="outlined"
                    type="text"
                    id="about"
                    name="about"
                    value={formData.about}
                    placeholder='About yourself'
                    required
                    sx={{'& .MuiInputBase-input': { p: 0 },}}
                    error={true}
                    helperText="Please tell us about yourself"
                />

                <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                        margin: '8px 30px',
                        justifyContent: 'center',
                        '& .MuiButton-root': { 'background-color': '#327c35'}
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        sx={{ width: '50%' }}
                    >
                        Reset
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        sx={{ width: '50%' }}
                    >
                        Submit
                    </Button>
                </Stack>
            </Box>
        </div>
    )

}

export default MForm1;