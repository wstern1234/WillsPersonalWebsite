import React from "react";
import Myresume from "./William_Stern_Dec23_24.pdf";

const DocIframe = () => {

  return (
    <div>
      <iframe
        src={Myresume}
        title="file"
        width="100%"
        height="650"
      ></iframe>
    </div>
  );
};

export default DocIframe;
