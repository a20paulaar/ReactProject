import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [filter, setFilter] = useState('');

    const changeFilter = (filterText) => {
        setFilter(filterText);
    };

    return (
        <FilterContext.Provider value={{filter, changeFilter}}>
            {children}
        </FilterContext.Provider>
    );
};