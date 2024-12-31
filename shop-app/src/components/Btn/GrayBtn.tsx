import React from "react";

interface Btn {
  content: string;
}

const GrayBtn: React.FC<Btn> = ({ content }) => {
  return (
    <>
      <div>
        <button className="w-full bg-gray-300 lg:hover:scale-105 hover:bg-gray-400 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold rounded-md">
          {content}
        </button>
      </div>
    </>
  );
};

export default GrayBtn;
