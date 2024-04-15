import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [filtro, setFiltro] = useState(' ');

    const changeFilter = (filterText) => {
        setFiltro(filterText);
    };

    return (
        <FilterContext.Provider value={{filtro, changeFilter}}>
            {children}
        </FilterContext.Provider>
    );
};