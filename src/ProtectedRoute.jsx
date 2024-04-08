import { Navigate } from "react-router-dom";
import useLog from "./customHooks/useLog";

function ProtectedRoute({children}){
    const {isLogged } = useLog();
    return isLogged ? children : <Navigate to={"/login"}/>;
}

export default ProtectedRoute;