import React from "react";
import { useParams } from "react-router";

import Beach from "./Beach";
import Leica from "./Leica";
import Roseanne from "./Roseanne";
import StarBuck from "./StarBuck";
import Smoothies from "./Smoothies";
import Trio from "./Trio";
import Gooddy from "./Gooddy";
import Resto from "./Resto"
import Travelly from "./Travelly";
import Fitness from "./Fitness"


function Pages() {
  const { id } = useParams<{ id: string }>();

  if (id === "1") {
    return <StarBuck />;
  }

  if (id === "2") {
    return <Leica />;
  }
  if (id === "3") {
    return <Roseanne />;
  }
  if (id === "4") {
    return <Trio />;
  }
  if (id === "5") {
    return <Smoothies />;
  }
  if (id === "6") {
    return <Beach />;
  }
  if (id === "7") {
      return <Gooddy />;
  }
  if (id === "8") {
    return <Resto />;
} 
if (id === "9") {
  return <Travelly />;
} else {
    return <Fitness/>;
  }
}

export default Pages;
