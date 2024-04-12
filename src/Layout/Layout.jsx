import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useTheme from "../customHooks/useTheme";
import { Outlet } from "react-router";

function Layout(){
    const {darkMode} = useTheme();
  return(
      <div className={darkMode ? 'dark-mode' : ''}>
          <Header/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default Layout;