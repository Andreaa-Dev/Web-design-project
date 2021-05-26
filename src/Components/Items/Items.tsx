import React, { useState } from "react";
import styled from "styled-components";
import { DataType } from "../../data";
// import { SvgIcon } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Card = styled.div`
  display: flex;
  flex-direction: column;
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
  const [iconColor, setIconColor] = useState<"secondary">();
  const onClickHandler = () => {
    setIconColor("secondary");
  };
  const { item } = props;
  return (
    <div>
      <Card>
        <Img src={item.img} alt="error" />
        <Button>More detail</Button>
        <FavoriteIcon onClick={onClickHandler} color={iconColor} />
      </Card>
    </div>
  );
}

export default Items;
