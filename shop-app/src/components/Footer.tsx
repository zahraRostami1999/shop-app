import React from "react";
import { testers } from "./TesterList";
const Footer:React.FC = () => {
    return (
        <>
            <div className="bg-neutral-800 w-full lg:px-10 md:px-10 sm:px-5 px-5 py-5 mx-auto text-white ">
                <h2 className="lg:text-base md:text-sm text-sm text-center py-5 border-white border-t-2">Developed by <span className="font-bold">Zahra Rostami</span></h2>
                <div className="px-5 flex justify-start items-start flex-col py-3">
                    <h2 className="lg:text-base md:text-sm text-sm text-center font-bold text-rose-500">Tested and Improved by </h2>
                    {
                        testers.map((tester, index) => (
                            <div key={index} className="text-left w-full xl:w-1/5 lg:w-1/4 md:w-1/2 sm:w-1/2 sm:text-xs lg:text-sm">
                                <a href={tester.linkedIn} >
                                    <h2 key={index} className="text-white sm:w-11/12 w-11/12 text-xs md:text-sm">
                                        {tester.name}
                                    </h2>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Footer;