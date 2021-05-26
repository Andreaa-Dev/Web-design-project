import React from "react";

import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: 5% 15% 15% 15%;
  justify-items: center;
  background-image: linear-gradient(to top, lightblue, #8ab6d6);
`;

function NavBarStyle1() {
  return (
    <Card>
      <p>HOME</p>
      <p>About</p>
      <p>Book</p>
      <p>Contact</p>
    </Card>
  );
}

export default NavBarStyle1;
