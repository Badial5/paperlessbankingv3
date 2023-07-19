import { Box } from '@mui/material'
import React from 'react'
import { TextFieldCustom } from '../../../auth/sign-up/style/signup-styled'
import { GlobalButton } from '../../../../assets/GlobalStyled/Globalstyles'

const SignUp = ({formData, setFormData, handleChange}) => {

  const {name, age } = formData



 

  // / Handle fields change
  // handleChange = input => e => {
  //   this.setState({ [input]: e.target.value });
  // };

  // const handleChange = (input) => (e) => {
  //   setState({ ...state, [input]: e.target.value });
  // };

  return (
    <Box sx={{padding: "30px 30px"}}>

      <TextFieldCustom 
      placeholder='Name'
      value={name}
      onChange={handleChange('name')}
      />

      <TextFieldCustom placeholder='Age' 
      value={age} onChange={handleChange("age")} />


      <GlobalButton>
        Continue
      </GlobalButton>




    </Box>
  )
}

export default SignUp
