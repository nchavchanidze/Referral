import React from "react";
import ComponentFooter from "../../Components/En/ComponentFooter";
import ComponentHeader from "../../Components/En/ComponentHeader";

const ComponentLayout = ({ children }) => {
  return (
    <>
      <ComponentHeader />
      {children}
      <ComponentFooter />
    </>
  );
};

export default ComponentLayout;
