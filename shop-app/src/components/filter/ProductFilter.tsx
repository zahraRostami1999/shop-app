//A dynamic select menu component that renders a dropdown list based on the provided options. input: array of options, returns a selected option.
import React, { useState } from "react";

interface Option {
   label: string;
   value: string;
}

interface Props {
   options: Option[];
   onSelectChange: (value: string) => void;
}

const ProductFitler: React.FC<Props> = ({ options, onSelectChange }) => {
   const [selected, setSelected] = useState<string>("");

   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelected(value);
      onSelectChange(value); 
   };

   return (
      <>
         <select className="lg:w-32 md:w-32 sm:w-24 w-20 border-2 rounded lg:text-sm md:text-sm sm:text-xs text-xs mx-2 border-neutral-300 focus-within:border-neutral-400 " onChange={(e) => handleSelectChange(e)}>
            {options.map((option) => {
               return (
                  <option key={option.value} value={option.value} className="text-xs">
                     {option.label}
                  </option>
               );
            })}
         </select>
      </>
   );
};

export default ProductFitler;
