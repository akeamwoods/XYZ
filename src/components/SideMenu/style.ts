import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #04a9cd;
  p {
    color: #fff;
    margin: 0;
    font-weight: 400;
  }
  align-items: center;
  box-shadow: 0px 22px 24px 0px rgba(46, 51, 51, 0.07);
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  padding: 5px 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 0;
  transition: 0.3s;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;
  svg {
    margin-right: 10px;
  }
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
