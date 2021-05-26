import React from "react";
import NavBar from "../NavBar/NavbarStarbuck";
import CheeseCake from "../Img&Video/cheesecake.png";
import Matcha from "../Img&Video/matcha.png";
import Caramel from "../Img&Video/caramel.png";

function StarBuck() {
  return (
    <div>
      <NavBar />
      <p>It's not just Coffee</p>
      <p>It StarBuck</p>
      <p>
        THE BEST COFFEE. STARBUCKS COFFEE FINDER. Our coffee masters have
        distilled their years of tasting knowledge down to three simple
        questions to help you find a Starbucks coffee you’re sure to love.
      </p>
      <button>Learn more</button>
      <img src={CheeseCake} alt="error" />
      <img src={Matcha} alt="error" />
      <img src={Caramel} alt="error" />
    </div>
  );
}

export default StarBuck;
