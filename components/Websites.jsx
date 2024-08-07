"use client";
import React from "react";
import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

// Components
import Accounts from "@/components/Accounts";

const Websites = ({ icon, name, count, length, index, data }) => {
  React.useEffect(() => {
    setAccounts(data);    
  }, [data]);

  const [openAccount, setOpenAccount] = React.useState(false);
  const [accounts, setAccounts] = React.useState(data);
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

  const toggleAccountList = () => {
    setOpenAccount(!openAccount);
    console.log(length);
    
  };
  return (
    <div className="cursor-pointer">
      <div
        className={`${
          index != length - 1 ? "border-b-2" : ""
        } py-4 px-2 sm:px-6 flex justify-between items-center`}
      >
        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
          <Icon path={mdiIcons[camelCaseIconName]} size={1.5} color="#555555" />
          <p className="text-xl sm:text-2xl font-semibold text-[#555555]">
            {name}
          </p>
        </div>
        <div className="flex  justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="font-extrabold text-3xl text-primary">{count}</p>
            <p className="font-bold text-sm text-gray-500">Accounts</p>
          </div>
          <IconButton aria-label="button" onClick={toggleAccountList}>
            {openAccount ? (
              <ExpandLessOutlinedIcon />
            ) : (
              <ExpandMoreOutlinedIcon />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse in={openAccount} timeout="auto">
        {accounts.map((account, index) => {
          return <Accounts account={account} key={`account-info-${index}`} name={name} />
        })}
      </Collapse>
    </div>
  );
};

export default Websites;
