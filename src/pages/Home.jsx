import React, { useEffect, useState, Suspense } from "react";
import SkeletonLoader from "../components/SkeletonLoader"; // Import SkeletonLoader

// Lazy loading the components
const ActiveUserMap = React.lazy(() => import("../components/ActiveUserMap"));
const BarChartSection = React.lazy(() =>
  import("../components/BarChartSection")
);
const DonutChartSection = React.lazy(() =>
  import("../components/DonutChartSection")
);
const PaymentSection = React.lazy(() => import("../components/PaymentSection"));
const YearlySalesChart = React.lazy(() =>
  import("../components/YearlySalesChart")
);

const Home = () => {
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    const apiUrl = "/sampleData.json";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        setSalesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="bg-[url(salesbg.avif)] bg-cover bg-center brightness-110 bg-no-repeat py-6 px-5 rounded-xl">
        <div>
          <h4 className="text-2xl font-semibold text-neutral-700">
            Sales Distribution
          </h4>
          <p className="text-custom-gray font-medium text-sm">
            This is all over Platform Sales Generated
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5 max-lg:grid-cols-2 max-[400px]:grid-cols-1">
          {/* Cards with skeleton loading fallback */}
          {!salesData?.sales?.totalSales ? (
            <SkeletonLoader type="card" />
          ) : (
            <>
              <div className="bg-white px-4 py-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-neutral-700">
                  ${salesData?.sales?.totalSales}
                </h3>
                <span className="text-sm text-zinc-500 font-medium">
                  Total Sales
                </span>
              </div>
            </>
          )}
          {!salesData?.sales?.byMobile ? (
            <SkeletonLoader type="card" />
          ) : (
            <>
              <div className="bg-white px-4 py-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-neutral-700">
                  ${salesData?.sales?.byWebsite}
                </h3>
                <span className="text-sm text-zinc-500 font-medium">
                  By Website
                </span>
              </div>
            </>
          )}

          {!salesData?.sales?.byMobile ? (
            <SkeletonLoader type="card" />
          ) : (
            <>
              <div className="bg-white px-4 py-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-neutral-700">
                  ${salesData?.sales?.byMobile}
                </h3>
                <span className="text-sm text-zinc-500 font-medium">
                  By Mobile
                </span>
              </div>
            </>
          )}
          {!salesData?.sales?.byMarket ? (
            <SkeletonLoader type="card" />
          ) : (
            <>
              <div className="bg-white px-4 py-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-neutral-700">
                  ${salesData?.sales?.byMarket}
                </h3>
                <span className="text-sm text-zinc-500 font-medium">
                  By Market
                </span>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 mt-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {/* Skeleton loader for charts */}
        {!salesData?.revenue ? (
          <SkeletonLoader type="chart" />
        ) : (
          <>
            <DonutChartSection revenue={salesData?.revenue} />
          </>
        )}
        {!salesData?.yearlySales ? (
          <SkeletonLoader type="chart" />
        ) : (
          <>
            <BarChartSection yearlySales={salesData?.yearlySales} />
          </>
        )}
        {!salesData ? (
          <SkeletonLoader type="chart" />
        ) : (
          <>
            <YearlySalesChart data={salesData} />
          </>
        )}
      </section>

      <section className="flex gap-5 mt-8 max-lg:flex-col">
        {!salesData?.activeUsers ? (
          <SkeletonLoader type="chart" />
        ) : (
          <>
            <ActiveUserMap activeUsers={salesData?.activeUsers} />
          </>
        )}
        <PaymentSection />
      </section>
    </>
  );
};

export default Home;
