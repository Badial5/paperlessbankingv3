import { Box, Button, Container, FormHelperText, Grid, styled, TextField, Typography, 
    Alert } from "@mui/material";








//STYLED COMPONENTS 

export const PageTitle = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Dela Gothic One';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 29px;
font-family: 'Poppins', sans-serif;
margin-top: 20px;


background: linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
/* text-fill-color: transparent; */

`

export const PageSubtitle = styled(Typography)`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
color: #434344;
font-family: 'Poppins', sans-serif;
`



export const TextFieldCustom = styled(TextField)({
    borderRadius: 100,
    fontFamily: "Poppins",
    fontSize: 12,
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#7833EE"
        }
      },  [`& fieldset`]:{
        borderRadius: "6px",  },
    "& .MuiInputBase-root": {
        height: "2rem",
      }
})







