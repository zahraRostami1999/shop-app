import React from "react";

interface Label {
  label: string;
}

const Input: React.FC<Label> = ({ label }) => {
  return (
    <div className="my-8 md:my-3 w-full  flex justify-between items-center pr-5">
      <label className="lg:w-1/4 text-sm lg:text-lg">{label} </label>
      <input
        className="lg:w-2/3 w-2/3 h-6 border lg:h-9 rounded lg:rounded-lg lg:border-2 border-zinc-200 lg:px-3 focus:border-zinc-400"
        type="text"
      />
    </div>
  );
};

export default Input;
