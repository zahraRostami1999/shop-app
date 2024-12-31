import React from "react";

interface Btn{
    content:string;
}

const OrangeBtn:React.FC<Btn> = ({content}) => {
    return (
        <>
            <div>
                <button className="w-full bg-orange-500 hover:scale-105 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold rounded-md">
                    {content}
                </button>
            </div>
        </>
    );
}

export default OrangeBtn;