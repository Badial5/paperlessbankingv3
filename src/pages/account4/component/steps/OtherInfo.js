import { Box, Typography, List, ListItem, ListItemText } from "@mui/material"
import { TextFieldCustom } from '../../../auth/sign-up/style/signup-styled'

const OtherInfo = ({formData}) => {

  const {name, age } = formData


  return (
    <Box sx={{padding: "30px 30px"}}>

        <Typography>
          Confirm Your details
        </Typography>

      {/* <TextFieldCustom 
      placeholder='Name'
      />

      <TextFieldCustom placeholder='Age' /> */}

      
<List>
              <ListItem>
                <ListItemText primary="First Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={age} />
              </ListItem>
           
            </List>



    </Box>
  )
}

export default OtherInfo
