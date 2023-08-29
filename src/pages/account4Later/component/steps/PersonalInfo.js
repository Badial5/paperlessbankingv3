import React from 'react'
import { TextFieldCustom } from '../../../auth/sign-up/style/signup-styled'
import { Box } from "@mui/material"


const PersonalInfo = ({formData, setFormData, handleChange}) => {

  const {country, city } = formData

  return (
    <Box sx={{padding: "30px 30px"}}>

      <TextFieldCustom 
      placeholder='Country' value={country} 
      onChange={handleChange('country')}
      />

      <TextFieldCustom placeholder='City' value={city} onChange={handleChange("city")}/>

      


    </Box>
  )
}

export default PersonalInfo
