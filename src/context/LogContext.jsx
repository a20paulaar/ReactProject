import React, {createContext, useState, useEffect} from 'react';

export const LogContext = createContext();

export const LogProvider = ({children}) => {
   const [isLogged, setIsLogged] = useState(false);
   const [userData, setUserData] = useState({});

   useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if(storedUser){
        setUserData(JSON.parse(storedUser));
        setIsLogged(true);
    }
   }, []);

   const handleLogin = ({name, email}) => {
    setIsLogged(true);
    const newUserData = {name, email};
    setUserData(newUserData);
    localStorage.setItem('userData', JSON.stringify(newUserData));
   };

   const handleLogout = () => {
    setIsLogged(false);
    setUserData('');
    localStorage.removeItem('userData');
   };

   const logContextValue = {isLogged, userData, handleLogin, handleLogout};

   return (
    <LogContext.Provider value={logContextValue}>
        {children}
    </LogContext.Provider>
   );

}