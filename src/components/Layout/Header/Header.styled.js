import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    color: #333;
    text-decoration: none;
    font-size:20px;
    }

`;


export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
  
   
`;

export const Link = styled.li`
    list-style: none;
    margin-right: 20px;
`;