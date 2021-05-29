import StarBuck from "./Components/Img&Video/StarBucks.png";
import Smoothies from "./Components/Img&Video/Smoothies.png";
import Beaches from "./Components/Img&Video/Beaches.jpg";
import Camera from "./Components/Img&Video/Camera.png";

export type DataType = {
  img: string;
  description: string;
  id: number;
};

const data: DataType[] = [
  { img: StarBuck, description: "acb", id: 1 },
  { img: Camera, description: "12341fwvw", id: 2 },
  { img: Smoothies, description: "sss", id: 3 },
  { img: Beaches, description: "frv", id: 4 },
];
export default data;
