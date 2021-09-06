import React from "react";
import { DataType } from "../../data";
import Items from "../Items/Items";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  margin: 6rem;
`;

type ProductType = {
  data: DataType[];
};

function Product({ data }: ProductType) {
  return (
    <div>
      <Card>
        {data.map((item: any) => {
          return <Items item={item} />;
        })}
      </Card>
    </div>
  );
}

export default Product;
