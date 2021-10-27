import React from "react";
import ComponentFooter from "../Components/ComponentFooter";
import ComponentHeader from "../Components/ComponentHeader";

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
