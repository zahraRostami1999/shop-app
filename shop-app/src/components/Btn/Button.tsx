import React from "react";

interface BtnProps {
   label: string;
   color?: "gold" | "neutral" | "rose";
   size?: "xs" | "small" | "medium" | "large";
   rounded?: boolean;
   onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({ label, color = "rose", size = "small", rounded = false, onClick }) => {
   const colorStyle = {
      gold: "hover:text-rose-800",
      neutral: "bg-neutral-400 hover:bg-neutral-500 border-2 border-neutral-400 hover:border-neutral-500",
      rose: "bg-rose-900 text-white hover:bg-white hover:border-rose-900 hover:text-neutral-800 border-2 border-rose-900",
   };

   const sizeStyle = {
      xs: "text-sm w-7",
      small: "text-xs sm:text-sm md:text-sm lg:text-sm sm:px-2 sm:py-2 px-2 py-2 font-normal",
      medium: "text-xs sm:text-sm md:text-sm lg:text-base lg:px-20 md:px-20 sm:px-3 px-10 py-2",
      large: "lg:text-lg md:text-lg sm:text-sm text-sm lg:px-40 md:px-32 sm:px-20 px-14 py-2 my-5",
   };

   const baseStyle = `${rounded ? "rounded-full" : "rounded"} font-medium px-2 transition duration-200 ease-in-out`;

   return (
      <>
         <button className={`${baseStyle} ${colorStyle[color]} ${sizeStyle[size]}`} onClick={onClick}>
            {label}
         </button>
      </>
   );
};

export default Button;
