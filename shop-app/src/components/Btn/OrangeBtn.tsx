import React, { Children } from "react";

interface Btn {
  children?: React.ReactNode;
}

const OrangeBtn: React.FC<Btn> = ({ children }) => {
  return (
    <>
      <button className="w-full bg-orange-500 hover:scale-105 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold rounded-md">
        {children}
      </button>
    </>
  );
};

export default OrangeBtn;
