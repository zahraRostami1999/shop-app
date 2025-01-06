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
      gold: "hover:text-rose-500",
      neutral: "bg-neutral-400 hover:bg-neutral-500 border-2 border-neutral-400 hover:border-neutral-500",
      rose: "bg-rose-500 hover:bg-white hover:border-rose-500 border-2 border-rose-500",
   };

   const sizeStyle = {
      xs: "text-sm w-7",
      small: "text-xs sm:text-sm md:text-sm lg:text-sm sm:px-2 sm:py-2 px-4 py-2",
      medium: "text-sm sm:text-sm md:text-md lg:text-base lg:px-20 md:px-20 sm:px-28 px-24 py-2",
      large: "text-lg px-40 py-2 my-5",
   };

   const baseStyle = `${rounded ? "rounded-full" : "rounded"} font-semibold px-2 transition duration-200 ease-in-out`;

   return (
      <>
         <button className={`${baseStyle} ${colorStyle[color]} ${sizeStyle[size]}`} onClick={onClick}>
            {label}
         </button>
      </>
   );
};

export default Button;
