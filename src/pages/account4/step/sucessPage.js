import { Box, Typography } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const SuccessPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h3" component="div">
        <Box
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.9 }}
        >
          Successful! You will hear from us soon.
        </Box>
      </Typography>
    </Box>
  );
};

export default SuccessPage;
