import React, { useState } from "react";
import { Input, InputLabel, Button, Box, FormControl } from "@mui/material";

const MInput = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formError, setFormError] = useState({
    nameError: false,
    emailError: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((preFormData) => ({ ...preFormData, [name]: value }));
    setFormError((prevFormError) => ({
      ...prevFormError,
      [`${name}Error`]: value.trim().length === 0,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = {
      nameError: formData.name.trim().length === 0,
      emailError: formData.email.trim().length === 0,
    };
    setFormError(errors);
    console.log(Object.values(formError));
    if (!Object.values(errors).includes(true)) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl
        variant="standard"
        sx={{ minWidth: 150 }}
        error={formError.nameError}
      >
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          margin="none"
          // error={formError.nameError}
          onChange={handleChange}
        ></Input>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ minWidth: 150 }}
        error={formError.emailError}
      >
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          margin="none"
          // error={formError.emailError}
          onChange={handleChange}
        ></Input>
      </FormControl>
      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default MInput;
