import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";

const BackTop:React.FC = () => {
    const [backBtn, setBackBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setBackBtn(true)
            } else {
                setBackBtn(false)
            }
        })
    }, [])

    return (
        <>
            <div>
                {backBtn && (
                    <button className="bg-rose-400 text-neutral-900 rounded-full w-10 h-10 fixed bottom-3 right-1 shadow-lg hover:font-semibold transition-all duration-200 smooth" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <FontAwesomeIcon icon={faArrowUp} size="1x" /> </button>
                )}
            </div>
        </>
    )
}

export default BackTop;
