import { testers } from "./TesterList";
const Footer = () => {
    return (
        <>
            <div className="bg-neutral-800 w-full lg:px-5 md:px-5 sm:px-1 px-1 py-3 mx-auto text-white">
                <h2 className="lg:text-base md:text-sm text-sm text-center pb-2">Developed by <span className="font-bold">Zahra Rostami</span></h2>

                <div className="px-5 flex justify-start items-start flex-col ">
                    <h2 className="lg:text-base md:text-sm text-sm text-center font-bold">Tested and Improved by </h2>
                    {
                        testers.map((tester, index) => (
                            <div className="text-left w-full xl:w-1/5 lg:w-1/4 md:w-1/2 sm:w-1/2 sm:text-xs lg:text-sm">
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