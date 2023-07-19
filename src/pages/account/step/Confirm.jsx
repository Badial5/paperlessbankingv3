import { Box, List, ListItem, ListItemText, Button, Grid, TextField  } from '@mui/material'
import Alert from '@mui/material/Alert';
import { ErrorHelperTextContainer } from '../../account2/styles/account-creation';
import { ButtonComponent, ButtonText, NameLabel } from '../style/account-creation';
import { TextFieldCustom } from '../../auth/sign-up/style/signup-styled';





const ConfirmStep = ({formData, handleSubmit, register, isValid, errors}) => {

  const { first_name, last_name, title, phone_number, id_type, id_number, account_type, email,  } = formData

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data)

  }


  console.log("FormData Values: ", formData)

  return (
      
    <Grid container spacing={0}>

      <Grid item xs={6}>
      <TextFieldCustom value={title} placeholder='Title' disabled sx={{background: "#cecece", fontWeight: "bolder"}} />
      </Grid>

      <Grid item xs={6}>
      <TextFieldCustom value={first_name} placeholder='First Name' disabled />
      </Grid>

      <Grid item xs={6}>
      <TextFieldCustom value={last_name} placeholder='Last Name' disabled />
      </Grid>

    </Grid>
  )
}

export default ConfirmStep
