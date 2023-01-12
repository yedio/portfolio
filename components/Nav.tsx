import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <Container>
      <NavLists>
        <li>
          <Link href="/">Home</Link>
        </li>
      </NavLists>
    </Container>
  );
}

const Container = styled.nav`
  width: 20%;
  padding: 30px;
  background-color: #d7dbe9;
`;

const NavLists = styled.ul`
  font-size: 18px;
`;
