import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function MyForm() {
  const [option, setOption] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth>
        <InputLabel id="select-option-label">Select Option</InputLabel>
        <Select
          labelId="select-option-label"
          id="select-option"
          value={option}
          onChange={handleOptionChange}
          label="Select Option"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      </FormControl>

      {option === "option1" && (
        <TextField
          {...register("field1")}
          label="Field 1"
          fullWidth
        />
      )}

      {option === "option2" && (
        <TextField
          {...register("field2")}
          label="Field 2"
          fullWidth
        />
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
