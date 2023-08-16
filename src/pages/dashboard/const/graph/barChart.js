import React from "react";
import { Paper } from "@mui/material"
import { Bar } from "react-chartjs-2";
import { Stack } from "@mui/material"
import { Chart as ChartJS } from "chart.js/auto";
import { GlobalPaperStyle } from "../../../../assets/GlobalStyled/Globalstyles";
// import { BankingCurrentBalance } from "../../../@dashboard/general/banking";

export const options = {
    responsive: true,
    borderRadius: 10,
    plugins: {
      legend: {
        position: "top" 
      },
      title: {
        display: true,
        text: "Deposit and Withdrawal chart (One Year Period)",
        font: "bold",
        // color: "#9747FF"
        // color: "#00BFFF",
        color: "#4991ff",
      }
    }
  }

function BarChart({ chartData }) {
    return (
      <Stack>
      <Paper sx={{width: "100%", height: "100%", borderRadius: 10}}>
        <Bar data={chartData} options={options} />
      </Paper>

      {/* <Paper>
        <BankingCurrentBalance />
      </Paper> */}

      </Stack>
    )
  }
  
  export default BarChart;
  