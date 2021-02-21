import React from "react";
import { Wrapper, NavLinks, Link } from "./style";
import { MdList, MdShowChart } from "react-icons/md";

export const SideMenu = () => {
  return (
    <Wrapper>
      <NavLinks>
        <Link exact to="/" activeStyle={{ background: "rgba(0,0,0,0.3)" }}>
          <MdList size="24" />
          Table View
        </Link>
        <Link
          exact
          to="/graphs"
          activeStyle={{ background: "rgba(0,0,0,0.3)" }}
        >
          <MdShowChart size="24" />
          Graph View
        </Link>
      </NavLinks>
    </Wrapper>
  );
};
