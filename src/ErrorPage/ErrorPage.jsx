import { useRouteError } from "react-router-dom";

// import "./ErrorPage.css"
import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error( 'Error console.log', error);

  const { data } = error
 
  return (
    // <Box className="error-page">

    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center",              marginTop: 50/2}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Typography> {data}  </Typography>
    </Box>
  );
}