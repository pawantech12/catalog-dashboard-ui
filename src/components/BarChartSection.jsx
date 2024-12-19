import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { BsThreeDots } from "react-icons/bs";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChartSection = ({ yearlySales }) => {
  const data = {
    labels: yearlySales?.labels || [],
    datasets: [
      {
        label: "Revenue",
        data: yearlySales?.data || [],
        backgroundColor: yearlySales?.data.map((_, index) =>
          index === 3 ? "#635DFF" : "#C3BDFE"
        ),
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false }, ticks: { display: false } },
      y: {
        grid: { color: "#F3F4F6" },
        ticks: { color: "#A0AEC0", font: { size: 12 } },
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
  };

  return (
    <div className="bg-white rounded-xl p-6 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Revenue Updates</h2>
        <button className="text-gray-400 bg-button-bg-light px-2 rounded-full hover:text-gray-600">
          <BsThreeDots />
        </button>
      </div>
      <div className=" relative">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartSection;
