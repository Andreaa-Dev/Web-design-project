import StarBuck from "./Components/Img&Video/StarBucks.png";
import Leica from "./Components/Img&Video/Camera.png";
import Roseanne from "./Components/Img&Video/Roseanne.png";
import Smoothies from "./Components/Img&Video/Smoothies.png";
import Beaches from "./Components/Img&Video/Beaches.jpg";
import Trio from "./Components/Img&Video/IL-Trio Restaurant/IL-Trio.png";

export type DataType = {
  name: string;
  img: string;
  description: string;
  price: number;
  id: number;
};

const data: DataType[] = [
  {
    name: "StarBuck",
    img: StarBuck,
    description: "Change background base on chosen items",
    price: 15.99,
    id: 1,
  },
  {
    name: "Leica",
    img: Leica,
    description:
      "One color website. Simple but outstanding impression.Customized logo",
    price: 17.99,

    id: 2,
  },
  {
    name: "Roseanne",
    img: Roseanne,
    description: "The new watch",
    price: 13.99,
    id: 3,
  },
  {
    name: "II Trio",
    img: Trio,
    description: "Restaurant theme",
    price: 20.99,
    id: 4,
  },
  {
    name: "Smoothies",
    img: Smoothies,
    description: "COMING SOON...",
    price: 11.99,
    id: 5,
  },

  {
    name: "Beaches",
    img: Beaches,
    description: "Animate background",
    price: 31.99,
    id: 6,
  },
];
export default data;
