import { useContext } from "react";
import { LogContext } from "../context/LogContext";

function useLog(){
    const context = useContext(LogContext);
    return context;
}

export default useLog;