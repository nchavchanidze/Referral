import React from "react";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <h1>footer</h1>
    </>
  );
};

export default Layout;
