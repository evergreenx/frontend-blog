import React from "react";
import { Header, Links, Link } from "./Header.styled";

const Index = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <Header>
      Logo
      <Links>
        {links.map((link) => (
          <Link key={link.name}>
            <a href={link.path}>{link.name}</a>
          </Link>
        ))}
      </Links>
    </Header>
  );
};

export default Index;
