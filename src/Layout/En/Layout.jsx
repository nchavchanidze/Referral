import React from "react";
import Footer from "../../Components/En/Footer";
import Header from "../../Components/En/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
