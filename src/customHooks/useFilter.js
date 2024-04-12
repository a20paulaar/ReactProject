import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function useFilter(){
    const context = useContext(FilterContext);
    return context;
}

export default useFilter;