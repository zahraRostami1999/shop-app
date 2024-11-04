import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute (){
    const { isLoggedIn } = useSelector((state) => state.isLogin);
    return(
        <>
            if(isLoggedIn)? <Outlet/> : <Navigate to="/Login"/>
        </>
    );
}

export default PrivateRoute;