import StarBuck from "./Components/Img&Video/StarBucks.png";
import Smoothies from "./Components/Img&Video/Smoothies.png";

export type DataType = {
  img: string;
  id: number;
};

const data: DataType[] = [
  { img: StarBuck, id: 1 },
  { img: Smoothies, id: 2 },
];
export default data;
