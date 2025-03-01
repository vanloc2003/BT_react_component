// import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-red-500 text-5xl mx-50 mt-10 ">Welcome Component</h1>
      <p className="mx-50 mt-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo
        veniam quisquam <br /> accusamus impedit fuga iste quia tempora quos?
        Minus.
      </p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  mx-50 mt-10"
      >
        Nhấp vào
      </button>
    </div>
  );
};

export default Banner;
