import React from "react";
import { useParams } from "react-router";

import Beach from "./Beach";
import Leica from "./Leica";
import Roseanne from "./Roseanne";
import StarBuck from "./StarBuck";
import Smoothies from "./Smoothies";
import Trio from "./Trio";
import Gooddy from "./Gooddy";

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
  } else {
    return <Gooddy />;
  }
}

export default Pages;
