import React from "react";
import "./styles/Spinner.css"

const Spinner: React.FC = () => {

    return (
        <>
            <div className="bg-neutralLight min-h-screen flex justify-center items-center text-white">
                <span className="loader"></span>
            </div>
        </>
    );
}

export default Spinner;