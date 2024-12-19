import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = ({ element }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <main className="flex justify-between">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="w-[77%] max-lg:w-full">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="bg-button-bg-light p-5 h-full">{element}</div>
        </div>
      </main>
    </>
  );
};

export default App;
