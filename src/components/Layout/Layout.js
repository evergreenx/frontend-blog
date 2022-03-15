import React, { Children } from "react";
import { LayoutStyled } from "./Layout.styled";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />

      <main>{children}</main>

      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
