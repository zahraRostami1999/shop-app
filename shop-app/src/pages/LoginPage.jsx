import Input from "../components/input/Input";
import cover from "../assets/images/Login.png";
import { verifyUser } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [forget, setForget] = useState(false);
    const userInfo = {
        username: username,
        password: password
    };
    const handleForget = () => {
        setForget(true);
    }
    const verifyNewUser = async () => {
        const userInfo = {
            username: username,
            password: password
        };

        try {
            const verify = await verifyUser(userInfo);
            if (verify) {
                navigate('/');
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error verifying user:', error);
        }
    };

    return (
        <>
            <div className="min-h-screen mt-20 flex justify-center ">
                <div className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-2/3 flex flex-wrap justify-center lg:justify-between md:justify-between items-around">
                    <div className="w-2/3 lg:w-1/2 md:w-1/2 sm:w-2/3">
                        <img src={cover} alt="" />
                    </div>
                    <div className=" lg:border-2 md:border-2 lg:rounded-xl md:rounded-xl lg:py-10   w-5/6 lg:w-2/5 md:w-1/2 md:py-6  sm:w-5/6 lg:mt-6 md:py-2 lg:h-2/3 md:h-1/2">
                        <div className="lg:w-11/12 mx-auto md:w-11/12 sm:w-10/12">
                            <div className="text-xl lg:text-3xl md:text-xl font-semibold">
                                <h1>Login your account</h1>
                            </div>
                            <div className="lg:my-12 md:my-2">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="rounded-xl border-2  border-zinc-300  px-2 lg:h-12 md:h-10 sm:h-10 h-10 sm:text-sm text-base required block w-5/6 my-10"
                                    type='text'
                                    placeholder='Username'
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="rounded-xl border-2  border-zinc-300  px-2 lg:h-12 md:h-10 sm:h-10 h-10 sm:text-sm text-base required block w-5/6 my-10 "
                                    type='password'
                                    placeholder='Password'
                                />
                            </div>
                            <div className="block w-5/6">
                                <p className="text-xs lg:text-sm ">Forget your username or password? <span className="cursor-pointer text-blue-700" onClick={() => handleForget()}>Click Here</span></p>
                                <button onClick={verifyNewUser} className="lg:text-lg font-semibold bg-orange-500 w-full lg:py-2 mt-3 sm:my-5 lg:my-1 md:my-1  py-1.5 sm:py-2 md:py-1.5 rounded-lg" >Login</button>
                                {forget ? (<div className="pb-10 sm:pb-10 md:pb-0 lg:pb-0 lg:text-sm md:text-sm text-xs mt-2">
                                    <p>username: mor_2314</p>
                                    <p>password: 83r5^_</p>
                                </div>) : console.log(forget)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;












// import { useState } from "react";
// import { verifyUser } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const verifyNewUser = async () => {
//         const userInfo = {
//             username: username,
//             password: password
//         };

//         try {
//             const verify = await verifyUser(userInfo);
//             if (verify) {
//                 navigate('/');
//             } else {
//                 navigate('/login');
//             }
//         } catch (error) {
//             console.error('Error verifying user:', error);
//         }
//     };

//     return (
//         <div className='bg-pink-300 h-screen flex justify-center items-center font-sans'>
//             <div className='md:w-2/3 lg:w-1/3 bg bg-black-opacity-5 lg:h-2/3 rounded sm:w-5/6 sm:h-5/6 md:h-5/6'>
//                 <h1 className="font-semibold text-2xl mx-10 my-8">Login</h1>
//                 <div className="rounded mt-10">
// <input
//     onChange={(e) => setUsername(e.target.value)}
//     className="rounded-xl px-2 h-12 border-none text-base required block w-5/6 my-10 mx-auto"
//     type='text'
//     placeholder='Username'
// />
// <input
//     onChange={(e) => setPassword(e.target.value)}
//     className="rounded-xl px-2 h-12 border-none text-base required block w-5/6 my-10 mx-auto"
//     type='password'
//     placeholder='Password'
// />
//                     <button
//                         onClick={verifyNewUser}
//                         className="bg-orange-600 rounded-xl block w-5/6 h-12 my-10 mx-auto"
//                     >
//                         Sign Up
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;
