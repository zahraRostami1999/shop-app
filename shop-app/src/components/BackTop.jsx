import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";

const BackTop = () => {
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
                    <button className="bg-orange-500 rounded-full w-10 h-10 fixed bottom-20 right-1 shadow-lg hover:font-semibold transition-all duration-200 smooth" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <FontAwesomeIcon icon={faArrowUp} size="1x" /> </button>
                )}
            </div>
        </>
    )
}










// import { useState, useEffect } from 'react';

// const BackTop = () => {
//     const [backBtn, setBackBtn] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) {
//                 setBackBtn(true);
//             } else {
//                 setBackBtn(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <>
//             <div>
//                 {backBtn && (
//                     <button
//                         className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
//                         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                     >
//                         ⯅
//                     </button>
//                 )}
//             </div>
//         </>
//     );
// };

export default BackTop;
