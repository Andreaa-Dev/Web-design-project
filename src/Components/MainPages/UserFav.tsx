import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;
const Card = styled.div`
  width: 50%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: flex-start;
`;

const NameItem = styled.div`
  font-weight: bold;
`;

function UserFav() {
  const favItem = useSelector((state: RootState) => {
    return state.favItemReducer.cart;
  });

  const result = favItem.map((item) => {
    return (
      <div>
        <Card>
          <NameItem>{item.name}</NameItem>
          <div>{item.price}$</div>
          <ShoppingCartIcon />
        </Card>
      </div>
    );
  });
  return (
    <div>
      <Title>Your favorite</Title>
      <div>{result}</div>
    </div>
  );
}

export default UserFav;
