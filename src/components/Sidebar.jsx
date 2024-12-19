import React from "react";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {
  IoChatbubbleEllipsesOutline,
  IoClose,
  IoPricetagOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuTreePine } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiTicket } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-10 w-[23%] bg-white transition-transform duration-300 ease-in-out px-10 py-5 flex flex-col h-screen overflow-y-auto lg:static lg:translate-x-0 max-lg:w-80 no-scroll`}
    >
      <div className="space-y-6 flex-grow">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-neutral-800">Catalog</h1>
          <button className="bg-none lg:hidden" onClick={toggleSidebar}>
            <IoClose className="w-7 h-7" />
          </button>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-medium uppercase">home</h4>
          <ul className="mt-3">
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <MdOutlineShoppingCart className="w-5 h-5" />
                eCommerce
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium uppercase">App</h4>
          <ul className="mt-3">
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <RiContactsBook3Line className="w-5 h-5" />
                Contacts
              </Link>
            </li>
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <IoChatbubbleEllipsesOutline className="w-5 h-5" />
                Chats
              </Link>
            </li>
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <SlCalender className="w-5 h-5" />
                Calendar
              </Link>
            </li>
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <HiOutlineMail className="w-5 h-5" />
                Email
              </Link>
            </li>
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <PiTicket className="w-5 h-5" />
                Tickets
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium uppercase">Page</h4>
          <ul className="mt-3">
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <LuTreePine className="w-5 h-5" />
                Tree View
              </Link>
            </li>
            <li className="group hover:bg-button-bg-light transition-colors ease-in-out duration-200 py-3 px-4 rounded-md">
              <Link className="flex items-center gap-2 group-hover:text-dark-blue transition-colors ease-in-out duration-200 font-medium text-neutral-700">
                <IoPricetagOutline className="w-5 h-5" />
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-button-bg-light p-4 rounded-xl mt-7">
        <div className="flex items-center gap-4">
          <figure>
            <img
              src="client4.png"
              alt="user profile image"
              className="w-12 h-12"
            />
          </figure>
          <div>
            <h4 className="text-base font-semibold text-dark-blue">
              Jane Cooper
            </h4>
            <span className="text-sm text-zinc-500 font-medium">Admin</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-7">
          <button className="flex items-center gap-1 text-sm font-medium w-full">
            <IoSettingsOutline className="w-5 h-5" />
            Setting
          </button>
          <button className="flex items-center gap-1 text-sm font-medium w-full">
            <FiLogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
