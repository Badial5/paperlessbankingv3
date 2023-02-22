import { createTheme } from "@mui/material";



const theme = createTheme({
    palette: {
        primary: {
            main: "#434344"
        }, 

        primary2: {
            main: "#19191A;"
        }, 

        secondary: {
            main: "#7833EE"
        },

        secondary2: {
            main: "#8F45F2"
        }
    }, 

    typography: {
        fontFamily: {
            main: "Helcatica Neue",
            secondary: "Dela Gothic One",
        } , 

        fontSize: {
            // main: 0.9,
            main: "62.5%",
            secondary: 1.3
        }
    }
})


export default theme