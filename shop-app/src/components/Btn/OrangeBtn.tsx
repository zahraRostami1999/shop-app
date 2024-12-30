import React from "react";

interface Btn{
    content:string;
}

const OrangeBtn:React.FC<Btn> = ({content}) => {
    return (
        <>
            <div>
                <button className="md:w-36 md:h-12 sm:w-24 sm:h-10 w-20 h-8 bg-orange-500 hover:scale-105 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold rounded-md mx-3">
                    {content}
                </button>
            </div>
        </>
    );
}

export default OrangeBtn;