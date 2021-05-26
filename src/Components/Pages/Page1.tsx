import React from "react";
//@ts-ignore
import beach from "../Img&Video/Beach.mp4";
// import styled from "styled-components"
// const Card=styled.div`

function Page1() {
  return (
    <div>
      <video
        src={beach}
        width="100%vw"
        height="100%hw"
        object-fit="cover"
        autoPlay={true}
        muted
        loop={true}
      />
    </div>
  );
}

export default Page1;
