import React from "react";

interface Btn {
  children: React.ReactNode;
}

const GoldBtn: React.FC<Btn> = ({ children }) => {
  return (
    <>
      <button className="w-full bg-rose-400 lg:hover:scale-105 hover:scale-95 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold rounded-md">
        {children}
      </button>
    </>
  );
};

export default GoldBtn;