import "./styles/Spinner.css"

const Spinner = () => {

    return (
        <>
            <div className="bg-neutralLight min-h-screen flex justify-center items-center text-white">
                <span className="loader"></span>
            </div>
        </>
    );
}

export default Spinner;