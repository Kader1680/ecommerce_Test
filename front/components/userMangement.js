import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const UserMangement = () => {
  const sampleData = [4, 2, 3, 1, 2, 2, 4, 2, 3, 1, 4, 3, 2];
  const canvasData = {
    datasets: [
      {
        label: "Home",
        pointRadius: 0,
        fill: true,
        // linear-gradient(#e66465, #9198e5);
        // #ff8c22
        backgroundColor: "#ff8c22",
        lineTension: 0.4,
        data: sampleData,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        ticks: {
          color: "",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          color: "green",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "12rem",
    maxWidth: "full",
    width: "100%",
    
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div style={graphStyle}>
      <Line id="home" options={options} data={canvasData} />
    </div>
  );
};

export default UserMangement