import StarBuck from "./Components/Img&Video/StarBucks.png";
import Leica from "./Components/Img&Video/Camera.png";
import Roseanne from "./Components/Img&Video/Roseanne.png";
import Smoothies from "./Components/Img&Video/Smoothies.png";
import Beaches from "./Components/Img&Video/Beaches.jpg";
import Trio from "./Components/Img&Video/IL-Trio Restaurant/IL-Trio.png";
import Gooddy from "./Components/Img&Video/Gooddy.jpeg";
import Resto from "./Components/Img&Video/Resto.png";
import Travelly from "./Components/Img&Video/Travelly.png";
import Fitness from "./Components/Img&Video/Fitness.png";
import Andrea from "./Components/Img&Video/Andrea.png";

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
  {
    name: "Gooddy",
    img: Gooddy,
    description: "Gatsby with animation",
    price: 24.09,
    id: 7,
  },
  {
    name: "Resto",
    img: Resto,
    description: "Animation",
    price: 22.07,
    id: 8,
  },
  {
    name: "Travelly",
    img: Travelly,
    description: "Front and pictures",
    price: 18.95,
    id: 9,
  },
  {
    name: "Fitness",
    img: Fitness,
    description: "updating ...",
    price: 21.9,
    id: 10,
  },
  {
    name: "Andrea",
    img: Andrea,
    description: "using Figma to design",
    price: 15.78,
    id: 11,
  },
];
export default data;
