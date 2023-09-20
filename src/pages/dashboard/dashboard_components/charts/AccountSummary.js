import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Send from '@mui/icons-material/Send';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Money from '@mui/icons-material/Money';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Button, Avatar } from '@mui/material';
import { getSingleAccountAction, getSingleAccountNumberAction } from '../../../../redux-toolkit/account/accountSlice';

const AccountSummary = () => {
  const dispatch = useDispatch();
  const bankAccounts = useSelector((state) => state.accounts.accounts);

  // State to track the selected account ID
  const [selectedAccountId, setSelectedAccountId] = useState(bankAccounts[0]?.id); // Initialize with the first account ID
  const [showBalance, setShowBalance] = useState(true); // Initialize showBalance

  // State for the anchor element of the account dropdown menu
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);

  useEffect(() => {
    if (selectedAccountId) {
      const selectedAccount = bankAccounts.find((account) => account.id === selectedAccountId);
      if (selectedAccount) {
        dispatch(getSingleAccountAction(selectedAccountId));
        dispatch(getSingleAccountNumberAction(selectedAccountId))
      } else {
        console.error(`Account with ID ${selectedAccountId} not found.`);
      }
    }
  }, [dispatch, selectedAccountId, bankAccounts]);

  // Handle the selection change
  const handleAccountChange = (event) => {
    const accountId = event.target.value;
    setSelectedAccountId(accountId);
    closeAccountMenu(); // Close the account dropdown menu after selection
  };

  // Open the account dropdown menu
  const openAccountMenu = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  // Close the account dropdown menu
  const closeAccountMenu = () => {
    setAccountMenuAnchor(null);
  };

  const selectedAccount = bankAccounts.find((account) => account.id === selectedAccountId);

  // Toggle balance visibility
  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Display only the account name */}
            <Typography variant="h4" sx={{ color: "#4991ff" }}>
              {selectedAccount ? selectedAccount.full_name : ''}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              aria-controls="account-menu"
              aria-haspopup="true"
              onClick={openAccountMenu}
            >
              {selectedAccount ? (
                <Avatar src={selectedAccount.selfie_image || '/default-avatar.png'} />
              ) : (
                <AccountCircle style={{ fontSize: 32, color: '#1976D2' }} />
              )}
            </IconButton>
          </Box>
          <Menu
            id="account-menu"
            anchorEl={accountMenuAnchor}
            open={Boolean(accountMenuAnchor)}
            onClose={closeAccountMenu}
          >
            {bankAccounts.map((account) => (
              <MenuItem key={account.id} value={account.id} onClick={handleAccountChange}>
                <Avatar src={account.selfie_image || '/default-avatar.png'} />
                {account.full_name}
              </MenuItem>
            ))}
          </Menu>
        </div>
        {selectedAccount ? ( // Check if selectedAccount exists before rendering
          <>
            {/* Display other account details */}
            <Typography variant="h6" sx={{ color: "#2e7d32" }}>
              Account Number: {selectedAccount.accountNumber}
            </Typography>
            <Box sx={{ marginTop: 2, display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Balance: </Typography>
              {/* Display balance and visibility toggle */}
              <Typography variant="h4" gutterBottom sx={{ fontSize: 12, ml: 1, fontWeight: 500 }}>
                {showBalance ? (
                  `${selectedAccount.balance ? selectedAccount.balance.toFixed(2) : 'N/A'}`
                ) : (
                  '*********'
                )}
              </Typography>
              <IconButton onClick={toggleBalanceVisibility} sx={{ mb: 2 }}>
                {showBalance ? <VisibilityOff fontSize="large" /> : <Visibility fontSize="large" />}
              </IconButton>
            </Box>
            {/* Display income and expense */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
              <div>
                <Typography variant="subtitle1" color="textSecondary">
                  Income
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowUpward style={{ color: 'green' }} />
                  <Typography variant="subtitle2" color="textSecondary">
                    ${selectedAccount.income ? selectedAccount.income.toFixed(2) : 'N/A'}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="subtitle1" color="textSecondary">
                  Expense
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowDownward style={{ color: 'red' }} />
                  <Typography variant="subtitle2" color="textSecondary">
                    ${selectedAccount.expense ? selectedAccount.expense.toFixed(2) : 'N/A'}
                  </Typography>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <Button variant="contained" color="primary" startIcon={<AttachMoney />} size="small">
            Transfer
          </Button>
          <Button variant="contained" color="success" startIcon={<Send />} size="small">
            Send Cash
          </Button>
          <Button variant="contained" color="info" startIcon={<Money />} size="small">
            Receive Cash
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSummary;
