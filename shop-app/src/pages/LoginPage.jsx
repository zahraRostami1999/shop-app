import { useState, useEffect } from "react";
import cover from "../assets/images/LoginPage.jpeg";
import { checkUser } from "../redux/IsLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const { isLoggedIn } = useSelector((state) => state.isLogin);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    dispatch(checkUser({username: userName, password: password} ));
   }

    useEffect(() => {
      if (isLoggedIn) {
        navigate("/Cart");
      }
    }, [isLoggedIn]);
  return (
    <>
      <div className="w-full h-screen mt-20 flex justify-between font-Poppins">
        <div className="w-1/2">
          <img className="w-full " src={cover} />
        </div>
        <div className=" w-2/5 mx-10 border-2 shadow-lg h-4/6 mt-24 pt-8 rounded-2xl">
          <h1 className="text-center text-3xl  font-semibold mb-24">
            Login to your account
          </h1>
          <div className=" px-20">
            <div className="my-7 ">
              <label className="block text-xl px-2" htmlFor="userName">
                Username:{" "}
              </label>
              <input
                className="border-2 w-full h-11 my-3 px-5 border-slate-200 rounded-3xl shadow hover:border-slate-300 transition duration-200 hover:scale-105"
                name="userName"
                type="text"
                onChange={(e) => handleUserNameChange(e)}
              />
            </div>
            <div className="my-7">
              <label className="block text-xl" htmlFor="password">
                Password:{" "}
              </label>
              <input
                className="border-2 w-full h-11 my-3 px-5 border-slate-200 rounded-3xl  shadow hover:border-slate-300 transition duration-200 hover:scale-105"
                name="password"
                type="text"
                onChange={(e) => handlePasswordChange(e)}
              />
            </div>
          </div>

          <div className="flex justify-center w-full px-20 mt-10 h-11 text-xl font-semibold">
            <button
              onClick={() => handleLoginClick()}
              className="bg-orange-500 rounded-3xl w-full hover:bg-orange-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
