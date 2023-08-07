import PropTypes from 'prop-types';
// form
import { useFormContext, Controller, useForm } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
//
import Editor from '../editor';

// ----------------------------------------------------------------------

RHFEditor.propTypes = {
  name: PropTypes.string,
};

export default function RHFEditor({ name, ...other }) {
  // const { control } = useFormContext();
  const { control } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Editor
          id={name}
          value={field.value}
          onChange={field.onChange}
          error={!!error}
          helperText={
            <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
              {error?.message}
            </FormHelperText>
          }
          {...other}
        />
      )}
    />
  );
}
