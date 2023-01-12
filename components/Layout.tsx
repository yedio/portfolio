import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

export default function Layout({ children }: any) {
  return (
    <Container>
      <Nav />
      <Wrap>{children}</Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Wrap = styled.div``;
