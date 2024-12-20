import { testers } from "./TesterList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <div className="bg-neutral-800 w-full px-5  py-3 mx-auto text-white">
                <h2 className="lg:text-base md:text-sm text-xs text-center pb-2">Developed by <span className="font-bold">Zahra Rostami</span></h2>

                <div className="px-10 flex justify-center items-center flex-col ">
                    <h2 className="lg:text-base md:text-sm text-xs text-center">Tested and Approved by </h2>
                    {
                        testers.map((tester, index) => (
                            <div className="flex flex-row justify-between text-left w-11/12 xl:w-1/5 lg:w-1/4 md:w-1/2 sm:w-1/2 sm:text-xs lg:text-sm">
                                <h2 key={index} className="text-white sm:w-11/12 w-11/12 text-xs md:text-sm">
                                    {tester.name}
                                </h2>
                                <a href={tester.linkedIn} className="w-5 text-end">
                                    <FontAwesomeIcon icon={faUpRightFromSquare} />
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