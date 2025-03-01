// import React from "react";

import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <>
      <Banner />
      <div className="flex justify-between mt-20 mx-40">
        <div className="ml-20">
          <Item />
        </div>
        <div className="ml-20">
          <Item />
        </div>
        <div className="ml-20">
          <Item />
        </div>
      </div>
    </>
  );
};

export default Body;
