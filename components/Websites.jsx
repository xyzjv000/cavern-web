import React from "react";
import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";
const Websites = ({ icon, name, count, length, index }) => {
  function convertIconNameToCamelCase(name) {
    return (
      "mdi" +
      name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    );
  }
  // convert name to mdi react format
  const camelCaseIconName = convertIconNameToCamelCase(icon);

  return (
    <div
      className={`${
        index != length - 1 ? "border-b-2" : ""
      } py-4 px-6 flex justify-between items-center`}
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        <Icon path={mdiIcons[camelCaseIconName]} size={2} color="#555555" />
        <p className="text-2xl font-semibold text-[#555555]">{name}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-extrabold text-3xl text-primary">{count}</p>
        <p className="font-bold text-sm text-gray-500">Accounts</p>
      </div>
    </div>
  );
};

export default Websites;
