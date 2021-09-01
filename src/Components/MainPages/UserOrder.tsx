import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import styled from "styled-components";

const Card = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const NameItem = styled.div`
  font-weight: bold;
`;

function UserOrder() {
  const userOrder = useSelector((state: RootState) => {
    return state.orderReducer.cart;
  });

  const result = userOrder.map((item) => {
    return (
      <Card>
        <NameItem>{item.name}</NameItem>
        <div>{item.price}</div>
      </Card>
    );
  });
  return <div>{result}</div>;
}

export default UserOrder;
