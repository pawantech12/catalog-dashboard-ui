import React, { useState, useEffect } from "react";
import { BsCreditCardFill, BsThreeDots } from "react-icons/bs";
import { GrPaypal } from "react-icons/gr";
import { IoMdWallet } from "react-icons/io";

const initialPaymentData = [
  { name: "Paypal", amount: 6235, type: "Big Brands" },
  { name: "Wallet", amount: -235, type: "Bill Payments" },
  { name: "Credit Card", amount: 2235, type: "Bill Payment" },
];

const PaymentSection = () => {
  const [paymentData, setPaymentData] = useState(initialPaymentData);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPaymentData((prevData) =>
        prevData.map((gateway) => ({
          ...gateway,
          amount: gateway.amount + Math.floor(Math.random() * 100 - 50),
        }))
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl p-5 w-[30%] transition-transform transform hover:scale-105 max-lg:w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700">
          Payment Gateways
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          <BsThreeDots />
        </button>
      </div>

      <div className="mt-5">
        <ul className="flex flex-col gap-4">
          {paymentData.map((gateway, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full w-9 h-9 flex items-center justify-center ${
                    gateway.name === "Paypal"
                      ? "bg-custom-pink"
                      : gateway.name === "Wallet"
                      ? "bg-custom-orange"
                      : "bg-custom-blue"
                  }`}
                >
                  {gateway.name === "Paypal" && (
                    <GrPaypal className="text-white text-lg" />
                  )}
                  {gateway.name === "Wallet" && (
                    <IoMdWallet className="text-white text-lg" />
                  )}
                  {gateway.name === "Credit Card" && (
                    <BsCreditCardFill className="text-white text-lg" />
                  )}
                </span>

                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-neutral-700">
                    {gateway.name}
                  </h4>
                  <small className="text-xs text-zinc-500 font-medium">
                    {gateway.type}
                  </small>
                </div>
              </div>
              <span className="text-sm font-medium text-zinc-500">
                {gateway.amount > 0 ? "+" : ""}${gateway.amount}
              </span>
            </li>
          ))}
          <button className="bg-dark-blue/10 text-dark-blue mt-5 py-3 rounded-md text-sm font-medium">
            View all Transactions
          </button>
        </ul>
      </div>
    </div>
  );
};

export default PaymentSection;
