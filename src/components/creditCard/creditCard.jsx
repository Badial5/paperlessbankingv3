import React, { useState } from "react";
// import { Grid, TextField, Button } from "@material-ui/core";
import { Grid, TextField, Button, Box } from "@mui/material";
// import { formatCreditCardNumber } from "react-credit-cards-2";

// import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "react-credit-cards-2"; 
import Cards from 'react-credit-cards-2';
// import "react-credit-cards-2/lib/styles.scss";
// import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from "@mui/material";

import "react-credit-cards-2/es/styles-compiled.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card details:", {
      cardNumber,
      cardName,
      expirationDate,
      cvc,
    });
  };

  return (
    <>
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        
        <Grid item xs={12}>
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            value={cardNumber}
            onChange={(e) => setCardNumber((e.target.value))}
          />
        </Grid>


        <Grid item xs={12}>
          <TextField
            id="cardName"
            label="Cardholder Name"
            variant="outlined"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </Grid>


        <Grid item xs={6}>
          <TextField
            id="expirationDate"
            label="Expiration Date"
            variant="outlined"
            value={expirationDate}
            onChange={(e) => setExpirationDate((e.target.value))}
          />
        </Grid>


        <Grid item xs={6}>
          <TextField
            id="cvc"
            label="CVC"
            variant="outlined"
            value={cvc}
            onChange={(e) => setCvc((e.target.value))}
          />
        </Grid>


        <Grid item xs={12}>
          <Box className="credit-card">
            <Cards
              number={cardNumber}
              name={cardName}
              expiry={expirationDate}
              cvc={cvc}
            />
          </Box>
        </Grid>


        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </>
  );
};

export default CreditCardForm;
