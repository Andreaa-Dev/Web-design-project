import React from "react";
import UserOrder from "./UserOrder";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`;

const Title = styled.p`
  font-size: 3rem;
  text-align: center;
`;
function UserAccount() {
  return (
    <div>
      <Title>Your account</Title>
      <Card>
        <Item>User information: Name, DOB, Address</Item>
        <Item>Favorite</Item>
        <Item>
          Your order: <UserOrder />
        </Item>
      </Card>
    </div>
  );
}

export default UserAccount;
