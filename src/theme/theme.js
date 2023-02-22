import { createTheme } from "@mui/material";





export const theme = createTheme({
  // spacing: [0, 4, 8, 16, 32, 64],

    typography: {
      fontFamily: [ 'Helvetica Neue',  'serif'].join(','),
      fontSize: 14,
      fontStyle: "normal",
      // fontWeight: 400,
      // lineHeight: 16,
      button: {
        fontSize: 9,
        fontWeight: 380,
      },

    }, 

    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
        
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },

    

    

 

  });

