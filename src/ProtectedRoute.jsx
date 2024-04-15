import { Navigate, useLocation } from "react-router-dom";
import useLog from "./customHooks/useLog";

function ProtectedRoute({children}){
    const { isLogged } = useLog();

    const location = useLocation();
    
    return isLogged ? children : <Navigate to={"/login"} state={location}/>;
}

export default ProtectedRoute;