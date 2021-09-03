import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataType } from "../../data";

import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GetAppIcon from "@material-ui/icons/GetApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addOrder, addFavItem } from "../Redux/action";
import { useDispatch } from "react-redux";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 2px #aeabab;
  border-radius: 7px;
  margin: 2rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Img = styled.img`
  height: 15rem;
  width: 25rem;
  border-radius: 7px;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const Button = styled.button`
  height: 3rem;
  width: 5rem;
  border-radius: 1.2rem;
  background-color: #2b2929;
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type ItemProps = {
  item: DataType;
};

type ColorType = {
  favIcon: "disabled" | "primary" | "secondary";
  addIcon: "disabled" | "primary" | "secondary";
  buyIcon: "disabled" | "primary" | "secondary";
};

function Items(props: ItemProps) {
  const { item } = props;
  const dispatch = useDispatch();

  const [iconColor, setIconColor] = useState<ColorType>({
    favIcon: "disabled",
    addIcon: "disabled",
    buyIcon: "disabled",
  });
  const onClickHandler = (event: any) => {
    // setIconColor();
    console.log(event.target, "id");
    dispatch(addOrder(item.id));
  };

  return (
    <div>
      <Card>
        <Img src={item.img} alt="error" />
        <Item>
          <Title>{item.name}</Title>
          <Text>{item.price}$</Text>
        </Item>
        <Icon onClick={onClickHandler}>
          <Link to={`/pages/${item.id}`}>
            <Button>Explore</Button>
          </Link>
          <Fab size="small">
            <FavoriteIcon id="favIcon" color={iconColor.favIcon} />
          </Fab>
          <Fab size="small">
            <GetAppIcon id="addIcon" color={iconColor.addIcon} />
          </Fab>
          <Fab size="small">
            <ShoppingCartIcon id="buyIcon" color={iconColor.buyIcon} />
          </Fab>
        </Icon>
      </Card>
    </div>
  );
}

export default Items;
