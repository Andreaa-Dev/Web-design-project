import React from "react";
import Beach from "./Beach";
import Camera from "./Camera";
import StarBuck from "./StarBuck";
import Smoothies from "./Smoothies";
import { useParams } from "react-router";

function Pages() {
  const { id } = useParams<{ id: string }>();

  if (id === "1") {
    return <StarBuck />;
  }
  if (id === "2") {
    return <Camera />;
  }
  if (id === "3") {
    return <Smoothies />;
  } else {
    return <Beach />;
  }
}
export default Pages;
