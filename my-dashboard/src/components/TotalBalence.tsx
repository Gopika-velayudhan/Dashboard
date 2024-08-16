import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  totalBalance: number;
}

const TotalBalance: React.FC<Props> = ({ totalBalance }) => {
  return (
    <div className="col-span-4 bg-green-400 text-black p-6 rounded-2xl ml-4 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-bold">Total Balance</h2>
        <p className="text-3xl mt-4 font-bold relative">
          ${totalBalance}
          <span className="text-sm relative top-[-0.5em]">USD</span>
        </p>
      </div>

      <div className="mt-4 flex space-x-2 ">
        <button className="bg-white px-4 py-2 rounded-full flex items-center">
          <span className="mr-2">Deposit</span>
          <IoIosArrowRoundDown />
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded-full text-white flex items-center">
          <div>Send</div> <MdArrowOutward className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TotalBalance;
