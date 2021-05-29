import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataType } from "../../data";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 0.1rem;
  margin-bottom: 1rem;
`;
const Img = styled.img`
  height: 20rem;
  width: 35rem;
`;

const Button = styled.button`
  height: 3rem;
  width: 7rem;
  border-radius: 1.2rem;
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
        <Img src={item.img} alt="error" />
        <Link to={`/pages/${item.id}`}>
          <Button>More detail</Button>
        </Link>
        <p>Description:{item.description}</p>
        <FavoriteIcon onClick={onClickHandler} color={iconColor} />
      </Card>
    </div>
  );
}

export default Items;
