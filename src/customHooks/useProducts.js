import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function useProducts() {
    const context = useContext(ProductsContext);
    return context;
}

export default useProducts;