import React from 'react'

import { Box } from '@mui/material';
import { GlobalButton, GlobalTextField } from '../../../assets/GlobalStyled/Globalstyles';



const ThirdStep = () => {
  return (
    <Box>

    <GlobalTextField label="City" variant='outlined'/>
    <GlobalTextField label="School" variant='outlined'/>
    <GlobalTextField label="Hospital" variant='outlined'/>

    <GlobalButton type='Button'>Next</GlobalButton>


   </Box>
  )
}

export default ThirdStep
