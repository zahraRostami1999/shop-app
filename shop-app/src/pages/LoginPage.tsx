import React, { useState } from "react";
import cover from "../assets/images/Login.png";
import ForgetUserOrPass from "../components/ForgetUserOrPass";
import { verifyUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/UserSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage:React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [forget, setForget] = useState<boolean>(false);
    const userInfo: {username: string; password: string} = {
        username: username,
        password: password
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                alert('You are now logged in.')
                dispatch(logIn())
                navigate('/');
            } else {
                toast.error('Username or Password is incorrect!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        } catch (error) {
            console.error('Error verifying user:', error);
        }
    };

    return (
        <>
            <div className="min-h-screen mt-20 flex justify-center items-center">
                <div className="w-11/12 sm:w-5/6 md:w-5/6 lg:w-2/3 flex flex-wrap justify-center lg:justify-between md:justify-between items-around">
                    <div className="w-2/3 lg:w-1/2 md:w-1/2 sm:w-2/3">
                        <img src={cover} alt="" />
                    </div>
                    <div className="md:rounded-xl lg:py-1 w-5/6 lg:w-1/2 md:w-1/2 md:py-7 sm:w-5/6 lg:mt-6  lg:h-2/3 md:h-1/2">
                        <div className="lg:w-11/12 mx-auto md:w-11/12 sm:w-10/12 ">
                            <div className="text-xl lg:text-3xl md:text-2xl font-semibold text-center">
                                <h1>Login your account</h1>
                            </div>
                            <div className="lg:mb-10 lg:mt-12 md:mt-14 ">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="rounded-lg border border-zinc-300  px-2 lg:h-12 md:h-10 sm:h-10 h-9 sm:text-sm text-sm required block w-5/6 my-5 md:my-5 mx-auto"
                                    type='text'
                                    placeholder='Username'
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="rounded-lg border  mx-auto border-zinc-300  px-2 lg:h-12 md:h-10 sm:h-10 h-9 sm:text-sm text-sm required block w-5/6 my-5 md:my-5 "
                                    type='password'
                                    placeholder='Password'
                                />
                            </div>
                            <div className="block w-5/6 mx-auto">
                                <p className="text-xs lg:text-sm ">Forget your username or password? <span className="cursor-pointer text-blue-700" onClick={() => handleForget()}>Click</span></p>
                                <button onClick={verifyNewUser} className="lg:text-lg text-sm md:text-lg font-semibold bg-gold w-full lg:py-2 my-3 sm:my-5 lg:my-1 md:my-1  py-1.5 sm:py-2 md:py-1.5 rounded-lg" >Login</button>
                            </div>
                        </div>
                    </div>
                    {forget ? <ForgetUserOrPass /> : null}
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default LoginPage;