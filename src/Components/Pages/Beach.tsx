import React from "react";
//@ts-ignore
import beach from "../Img&Video/Beach.mp4";

function Beach() {
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

export default Beach;
