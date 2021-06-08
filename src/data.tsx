import StarBuck from "./Components/Img&Video/StarBucks.png";
import Leica from "./Components/Img&Video/Camera.png";
import Roseanne from "./Components/Img&Video/watch.png";
import Smoothies from "./Components/Img&Video/Smoothies.png";
import Beaches from "./Components/Img&Video/Beaches.jpg";
import Trio from "./Components/Img&Video/IL-Trio Restaurant/IL-Trio.png";

export type DataType = {
  name: string;
  img: string;
  description: string;
  id: number;
};

const data: DataType[] = [
  {
    name: "StarBuck",
    img: StarBuck,
    description: "Change background base on chosen items",
    id: 1,
  },
  {
    name: "Leica",
    img: Leica,
    description: "One color website. Simple but outstanding impression.",
    id: 2,
  },
  { name: "Roseanne", img: Roseanne, description: "The new watch", id: 3 },
  { name: "Trio", img: Trio, description: "Restaurant theme", id: 4 },
  { name: "Smoothies", img: Smoothies, description: "COMING SOON...", id: 5 },

  { name: "Beaches", img: Beaches, description: "Animate background", id: 6 },
];
export default data;
