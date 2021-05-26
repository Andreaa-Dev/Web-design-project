import StarBuck from "./Components/Img&Video/StarBucks.png";
import Smoothies from "./Components/Img&Video/Smoothies.png";
import Beaches from "./Components/Img&Video/Beaches.jpg";

export type DataType = {
  img: string;
  description: string;
  id: number;
};

const data: DataType[] = [
  { img: StarBuck, description: "acb", id: 1 },
  { img: Smoothies, description: "sss", id: 2 },
  { img: Beaches, description: "frv", id: 3 },
];
export default data;
