import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="px-6 py-7 flex justify-between flex-wrap gap-5">
      <div className="flex items-center gap-5 max-sm:w-full">
        <div className="max-[450px]:hidden">
          <h2 className="text-2xl font-semibold text-neutral-700">Dashboard</h2>
        </div>
        <div className="flex items-center gap-3 bg-zinc-200 px-3 py-2 rounded-lg text-slate-600 max-sm:w-full">
          <FiSearch className="w-5 h-5" />
          <input
            type="text"
            className="bg-transparent outline-none text-base"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 max-sm:justify-center max-sm:w-full max-sm:gap-8">
        <button
          onClick={toggleSidebar}
          className="p-3 lg:hidden bg-button-bg-light rounded-full hover:text-dark-blue transition-colors ease-in-out duration-200"
        >
          <HiMenu className="w-5 h-5 text-neutral-700" />
        </button>
        <button className="bg-button-bg-light p-3 rounded-full hover:text-dark-blue transition-colors ease-in-out duration-200">
          <HiOutlineMail className="w-5 h-5" />
        </button>
        <button className="bg-button-bg-light p-3 rounded-full hover:text-dark-blue transition-colors ease-in-out duration-200">
          <RiNotification3Line className="w-5 h-5" />
        </button>
        <button className="bg-button-bg-light p-3 rounded-full hover:text-dark-blue transition-colors ease-in-out duration-200">
          <IoSettingsOutline className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
