import React from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";

const YearlySalesChart = () => {
  // Chart options and data
  const chartData = {
    series: [
      {
        name: "2023",
        data: [50, 40, 55, 30, 70, 40, 60, 50, 80, 30, 70, 50],
      },
      {
        name: "2022",
        data: [30, 20, 35, 20, 50, 25, 45, 30, 60, 25, 40, 35],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
      },
      colors: ["#635DFF", "#00B7B7"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: { show: false },
      dataLabels: { enabled: false },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        show: false, // Hide y-axis
      },
      legend: { show: false },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <section className="bg-white rounded-xl p-6 transition-transform transform hover:scale-105">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Yearly Sales</h3>
        <button className="text-gray-400 bg-button-bg-light px-2 rounded-full hover:text-gray-600">
          <BsThreeDots />
        </button>
      </div>

      {/* Chart */}
      <div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
        />
      </div>

      {/* Sales Legend */}
      <div className="flex justify-center mt-4 gap-8">
        {/* 2023 Legend */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#635DFF]"></div>
          <div>
            <p className="text-gray-800 font-semibold">$5476</p>
            <p className="text-gray-500 text-sm">2023</p>
          </div>
        </div>

        {/* 2022 Legend */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00B7B7]"></div>
          <div>
            <p className="text-gray-800 font-semibold">$4476</p>
            <p className="text-gray-500 text-sm">2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlySalesChart;
