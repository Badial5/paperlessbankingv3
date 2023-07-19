import React from "react";
import { Paper } from "@mui/material"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { GlobalPaperStyle } from "../../../../assets/GlobalStyled/Globalstyles";

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
        color: "#9747FF"
      }
    }
  }

function BarChart({ chartData }) {
    return (
      <Paper sx={{width: "100%", height: "100%", borderRadius: 10}}>
        <Bar data={chartData} options={options} />
      </Paper>
    )
  }
  
  export default BarChart;
  