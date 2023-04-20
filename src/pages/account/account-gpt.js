import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Checkbox, FormControlLabel } from '@mui/material';

const initialState = {
  title: "Mr.",
  full_name: "",
  id_type: "Passport",
  id_number: "",
  account_type: "Current Account",
  phone_number: "",
  email_address: "user@example.com",
  use_selfie: true,
  selfie_image: "",
  signature: "",
  status: "Pending"
};

const MyForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submitting form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="title">Title</InputLabel>
        <Select
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        >
          <MenuItem value="Mr.">Mr.</MenuItem>
          <MenuItem value="Mrs.">Mrs.</MenuItem>
          <MenuItem value="Ms.">Ms.</MenuItem>
          <MenuItem value="Dr.">Dr.</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        id="full_name"
        name="full_name"
        label="Full Name"
        value={formData.full_name}
        onChange={handleChange}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="id_type">ID Type</InputLabel>
        <Select
          id="id_type"
          name="id_type"
          value={formData.id_type}
          onChange={handleChange}
        >
          <MenuItem value="Passport">Passport</MenuItem>
          <MenuItem value="ID Card">ID Card</MenuItem>
          <MenuItem value="Driver License">Driver License</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        id="id_number"
        name="id_number"
        label="ID Number"
        value={formData.id_number}
        onChange={handleChange}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="account_type">Account Type</InputLabel>
        <Select
          id="account_type"
          name="account_type"
          value={formData.account_type}
          onChange={handleChange}
        >
          <MenuItem value="Current Account">Current Account</MenuItem>
          <MenuItem value="Savings Account">Savings Account</MenuItem>
          <MenuItem value="Joint Account">Joint Account</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        id="phone_number"
        name="phone_number"
        label="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        margin="normal"
        id="email_address"
        name="email_address"
        label="Email Address"
        value={formData.email_address}
        onChange={handleChange}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.use_selfie}
            onChange={handleChange}
            name="use_selfie"
            color="primary"
          />
        }
        label="Use Selfie Image"
      />

      <TextField
        fullWidth
        margin="normal"
        id="selfie_image"
        name="selfie_image"
        label="Selfie Image"
        value={formData.selfie_image}
        onChange={handleChange}
        disabled={!formData.use_selfie}
      />

      <TextField
        fullWidth
        margin="normal"
        id="signature"
        name="signature"
        label="Signature"
        value={formData.signature}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        margin="normal"
        id="status"
        name="status"
        label="Status"
        value={formData.status}
        onChange={handleChange}
        disabled
      />

      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default MyForm;