import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = () => {
  const options = {
    chart: {
      height: 280,
      type: 'radialBar',
    },
    series: [67],
    colors: ['#20E647'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '70%',
          background: '#293450',
        // background: "#4991ff", //blue color 
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: '#fff',
            fontSize: '13px',
          },
          value: {
            color: '#fff',
            fontSize: '30px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#87D4F9'],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Account Progress'],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type={options.chart.type} height={options.chart.height} />
    </div>
  );
};

export default RadialBarChart;
