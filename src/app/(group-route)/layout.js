import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const layout_group = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout_group;
