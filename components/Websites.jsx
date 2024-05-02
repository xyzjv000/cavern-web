import React from "react";

const Websites = ({icon, name, count, length}) => {
  return (
    <div className="border-b-2 py-4 px-6 flex justify-between items-center">
      <div className="flex flex-row gap-4 justify-center items-center">
        <p>1</p>
        <p className="text-2xl font-semibold text-gray-600">Apple</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-extrabold text-3xl text-primary">12</p>
        <p className="font-bold text-sm text-gray-500">Accounts</p>
      </div>
    </div>
  );
};

export default Websites;
