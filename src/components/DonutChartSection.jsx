import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BsThreeDots } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartSection = ({ revenue }) => {
  const data = {
    labels: ["Profit", "Expense"],
    datasets: [
      {
        label: "Sales Overview",
        data: [revenue?.profit, revenue?.expense],
        backgroundColor: ["#635DFF", "#1FD8D8"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%",
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
  };

  return (
    <div className="bg-white rounded-xl p-6 transition-transform transform hover:scale-105">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">Sales Overview</h2>
        <button className="text-gray-400 bg-button-bg-light px-2 rounded-full hover:text-gray-600">
          <BsThreeDots />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-48 h-48 mx-auto">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800">
              ${revenue?.totalRevenue}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <span
              className="w-3 h-3 inline-block rounded-full mr-2"
              style={{ backgroundColor: "#635DFF" }}
            ></span>
            <div>
              <p className="text-gray-800 font-medium text-sm">
                ${revenue?.profit}
              </p>
              <p className="text-gray-500 text-xs">Profit</p>
            </div>
          </div>
          <div className="flex items-center">
            <span
              className="w-3 h-3 inline-block rounded-full mr-2"
              style={{ backgroundColor: "#1FD8D8" }}
            ></span>
            <div>
              <p className="text-gray-800 font-medium text-sm">
                ${revenue?.expense}
              </p>
              <p className="text-gray-500 text-xs">Expense</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChartSection;
