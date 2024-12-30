import React from "react";

interface Btn {
  content: string;
}

const GrayBtn: React.FC<Btn> = ({ content }) => {
  return (
    <>
      <div>
        <button className="lg:w-36 lg:h-12 md:w-36 md:h-12 sm:w-24 sm:h-10 w-20 h-8 bg-gray-300 lg:hover:scale-105 hover:bg-gray-400 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold rounded-md mx-3">
          {content}
        </button>
      </div>
    </>
  );
};

export default GrayBtn;
