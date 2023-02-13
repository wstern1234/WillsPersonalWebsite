import React from "react";
import Myresume from "./WilliamSternResumeFeb3.pdf";

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