import React from "react";
import Myresume from "./WilliamSternResumeNov17.pdf";

const DocIframe = () => {

  return (
    <div>
      <iframe
        src={Myresume}
        title="file"
        width="100%"
        height="600"
      ></iframe>
    </div>
  );
};

export default DocIframe;