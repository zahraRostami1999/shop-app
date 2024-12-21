import { testers } from "./TesterList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <div className="bg-neutral-800 w-full px-5  py-3 mx-auto text-white">
                <h2 className="lg:text-base md:text-sm text-xs text-center">Developed by <span className="font-bold">Zahra Rostami</span></h2>
                <h2 className="lg:text-base md:text-sm text-xs text-center">Tested and Approved by </h2>
                <div className="px-10">
                    {
                        testers.map((tester, index) => (
                            <div className="flex flex-row justify-center">
                                <h2 key={index} className="text-white text-xs md:text-sm">
                                    {tester.name}
                                </h2>
                                <a href={tester.linkedIn}>
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