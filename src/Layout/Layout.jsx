import React from "react";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
