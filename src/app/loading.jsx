import React from "react";

const loading = () => {
  return (
    <div className="container mx-auto mt-20 mb-10 rounded-2xl">
      <div className="bg-[#f4f8fa] p-20">
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
        <h1 className="text-xl font-semibold text-center">Loading...</h1>
      </div>
    </div>
  );
};

export default loading;
