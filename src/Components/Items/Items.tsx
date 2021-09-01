import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataType } from "../../data";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GetAppIcon from "@material-ui/icons/GetApp";
import { addOrder } from "../Redux/action";
import { useDispatch } from "react-redux";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 2px #aeabab;
  border-radius: 7px;
  margin: 2rem;
`;

const Img = styled.img`
  height: 12rem;
  width: 20rem;
  border-radius: 7px;
`;

const Title = styled.div`
  font-size: 1.7rem;
  margin-top: 1rem;
  font-weight: bold;
`;

const Button = styled.button`
  height: 2rem;
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

function Items(props: ItemProps) {
  const [iconColor, setIconColor] = useState<"secondary">();
  const onClickHandler = () => {
    setIconColor("secondary");
  };
  const { item } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <Card>
        <Img src={item.img} alt="error" />
        <Title>{item.name}</Title>
        <Icon>
          <Link to={`/pages/${item.id}`}>
            <Button>Explore</Button>
          </Link>
          <p>{item.price}$</p>
          <FavoriteIcon onClick={onClickHandler} color={iconColor} />
          <GetAppIcon />
          <button onClick={() => dispatch(addOrder(item.id))}> Add</button>
        </Icon>
      </Card>
    </div>
  );
}

export default Items;
