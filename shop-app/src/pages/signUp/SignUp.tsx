import React, { useState } from "react";
import { verifyUser } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ForgetUserOrPass } from "../../components";
import { OutlinedInput, InputLabel, FormControl, TextField, Typography, Button } from "@mui/material";

const SignUp = () => {
   const [username, setUsername] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [forget, setForget] = useState<boolean>(false);
   const userInfo: { username: string; password: string } = {
      username: username,
      password: password,
   };

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleForget = () => {
      setForget(true);
   };

   const verifyNewUser = async () => {
      const userInfo = {
         username: username,
         password: password,
      };

      try {
         const verify = await verifyUser(userInfo);
         if (verify) {
            alert("You are now logged in.");
            dispatch(logIn());
            navigate("/");
         } else {
            toast.error("Username or Password is incorrect!", {
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
         console.error("Error verifying user:", error);
      }
   };
   return (
      <>
         <div className="min-h-screen flex justify-center items-center pt-10">
            <div className="lg:w-1/3 md:w-1/2 sm:w-3/5 w-4/5 flex flex-wrap justify-between py-10 px-5 rounded bg-white shadow-xl shadow-neutral-400">
               <div className="w-full text-xl lg:text-3xl md:text-2xl font-semibold text-center">Login your account</div>
               <div className="w-full mt-5 py-6 flex justify-center flex-wrap">
                  <div className="my-3 w-4/5">
                     <FormControl fullWidth className="mb-4">
                        <InputLabel htmlFor="username" size="small" sx={{ fontSize: "14px" }}>
                           Username
                        </InputLabel>
                        <OutlinedInput id="username" type="text" name="username" label="Username" size="small" onChange={(e) => setUsername(e.target.value)} />
                     </FormControl>
                  </div>
                  <div className="my-3 w-4/5">
                     <FormControl fullWidth className="mb-4">
                        <InputLabel htmlFor="password" size="small" sx={{ fontSize: "14px" }}>
                           Password
                        </InputLabel>
                        <OutlinedInput id="password" type="password" name="password" label="password" size="small" onChange={(e) => setPassword(e.target.value)} />
                     </FormControl>
                  </div>
                  <div className="my-3 w-4/5">
                     <FormControl fullWidth className="mb-4">
                        <InputLabel htmlFor="password" size="small" sx={{ fontSize: "14px" }}>
                           Confirm Password
                        </InputLabel>
                        <OutlinedInput id="password" type="password" name="password" label="Confirm Password" size="small" onChange={(e) => setPassword(e.target.value)} />
                     </FormControl>
                  </div>
                  <div className="w-4/5 my-2">
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                           padding: "10px",
                           backgroundColor: "#881337",
                        }}
                        onClick={verifyNewUser}
                     >
                        Sign up
                     </Button>
                  </div>
               </div>
               <div className="text-neutral-800 w-full">
                  Already have a account?
                  <Link to="/Login"> Log In</Link>
               </div>
            </div>
            <ToastContainer />
         </div>
      </>
   );
};

export default SignUp;
