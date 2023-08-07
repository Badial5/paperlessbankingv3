import PropTypes from 'prop-types';
// form
import { useFormContext, Controller,  useForm } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextField({ name, ...other }) {
  // const { control } = useFormContext();
  const { control } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          sx={{fontFamily: "Poppins",
          fontSize: 12,
          "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
        borderColor: "#7833EE"
              }
            },  [`& fieldset`]:{
              borderRadius: "6px",  },
          "& .MuiInputBase-root": {
              height: "2rem",
              fontSize: 12,
              "& input::placeholder": {
                  fontSize: 12,
                },
            }}}
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
