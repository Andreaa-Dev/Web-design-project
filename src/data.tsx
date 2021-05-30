import StarBuck from "./Components/Img&Video/StarBucks.png";
import Leica from "./Components/Img&Video/Camera.png";
import Roseanne from "./Components/Img&Video/watch.png";
import Smoothies from "./Components/Img&Video/Smoothies.png";
import Beaches from "./Components/Img&Video/Beaches.jpg";

export type DataType = {
  img: string;
  description: string;
  id: number;
};

const data: DataType[] = [
  {
    img: StarBuck,
    description: "Change background base on chosen items",
    id: 1,
  },
  {
    img: Leica,
    description: "One color website. Simple but outstanding impression.",
    id: 2,
  },
  {
    img: Roseanne,
    description: "The new watch",
    id: 3,
  },
  { img: Smoothies, description: "COMING SOON...", id: 4 },

  { img: Beaches, description: "Animate background", id: 5 },
];
export default data;
