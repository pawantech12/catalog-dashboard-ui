// SkeletonLoader.js
const SkeletonLoader = ({ type = "card" }) => {
  if (type === "card") {
    return (
      <div className="bg-gray-200 animate-pulse rounded-xl p-6 w-full h-24">
        <div className="bg-gray-300 w-1/2 h-6 rounded-md mb-2"></div>
        <div className="bg-gray-300 w-1/4 h-4 rounded-md"></div>
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="bg-gray-200 animate-pulse rounded-xl p-5 w-full h-72">
        <div className="bg-gray-300 w-full h-6 rounded-md mb-4"></div>
        <div className="bg-gray-300 w-full h-60 rounded-md"></div>
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
