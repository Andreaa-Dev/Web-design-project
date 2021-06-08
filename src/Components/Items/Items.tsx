import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataType } from "../../data";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid black 1px;
  border-radius: 7px;
  margin-bottom: 1rem;
  height: 25rem;
  width: 30rem;
  margin-bottom: 3rem;
`;
const Img = styled.img`
  height: 12rem;
  width: 20rem;
  border: solid black 1px;
  border-radius: 7px;
  margin: 1rem auto 1rem auto;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 6rem;
  border-radius: 1.2rem;
  background-color: #2b2929;
  color: white;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  width: 20rem;

  justify-content: space-between;
  margin: 1rem 5rem 1rem auto;
`;
const Title = styled.div`
  font-size: 1.2rem;
`;
const Text = styled.div`
  margin: 1rem 5rem 1rem 5rem;
  font-size: 1rem;
`;
type ItemProps = {
  item: DataType;
};
function Items(props: ItemProps) {
  const param = useParams();
  const [iconColor, setIconColor] = useState<"secondary">();
  const onClickHandler = () => {
    setIconColor("secondary");
  };
  const { item } = props;
  return (
    <div>
      <Card>
        <Title>Name :{item.name}</Title>
        <Img src={item.img} alt="error" />
        <Icon>
          <Link to={`/pages/${item.id}`}>
            <Button>Go to site</Button>
          </Link>
          <FavoriteIcon onClick={onClickHandler} color={iconColor} />
        </Icon>

        <Text>Description:{item.description}</Text>
      </Card>
    </div>
  );
}

export default Items;
