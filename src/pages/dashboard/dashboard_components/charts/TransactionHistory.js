import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionHistory = () => {
  // Sample static transaction data
  const [transactions, setTransactions] = useState([
    {
      date: '2023-09-14',
      amount: 100.00,
      payee: 'Grocery Store',
      category: 'Groceries',
      status: 'Completed',
    },
    {
      date: '2023-09-13',
      amount: 50.00,
      payee: 'Gas Station',
      category: 'Transportation',
      status: 'Pending',
    },
    {
      date: '2023-09-12',
      amount: 200.00,
      payee: 'Amazon',
      category: 'Shopping',
      status: 'Canceled',
    },
    // Add more transactions as needed
  ]);

  const handleDelete = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          Transaction History
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                  <TableCell>{transaction.payee}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        color:
                          transaction.status === 'Completed'
                            ? 'green'
                            : transaction.status === 'Pending'
                            ? 'orange'
                            : 'red',
                      }}
                    >
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
