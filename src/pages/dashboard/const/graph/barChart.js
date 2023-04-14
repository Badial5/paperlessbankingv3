import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const options = {
    responsive: true,
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
    return <Bar data={chartData} options={options} />;
  }
  
  export default BarChart;
  