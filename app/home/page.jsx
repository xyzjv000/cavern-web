import Card from "@/components/Card";
import Websites from "@/components/Websites";
import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  const data = [
    {
      icon: "account",
      siteName: "Facebook",
      accounts: [
        { password: "Tunnel analyzer (Malvinas)", updatedAt: new Date(), username: "Kariane39@yahoo.com" },
        { password: "Mertz", updatedAt: new Date(), username: "Kiel.Kemmer@yahoo.com" },
        { password: "Swift", updatedAt: new Date(), username: "Kayla_Crooks@hotmail.com" },
        { password: "Ebert", updatedAt: new Date(), username: "Dudley28@yahoo.com" },
        { password: "Swift", updatedAt: new Date(), username: "Rogelio44@gmail.com" },
      ],
    },
    {
      icon: "account",
      siteName: "Instagram",
      accounts: [
        { password: "Prius", updatedAt: new Date(), username: "Ron.Mann@hotmail.com" },
      ],
    },
    {
      icon: "account",
      siteName: "Netflix",
      accounts: [
        { password: "Alpine", updatedAt: new Date(), username: "Stanley.Lesch97@gmail.com" },
        { password: "Land Cruiser", updatedAt: new Date(), username: "Stefan.Haag14@gmail.com" },
      ],
    },
    {
      icon: "account",
      siteName: "Google",
      accounts: [
        { password: "Charger", updatedAt: new Date(), username: "Lillian65@hotmail.com" },
        { password: "CTS", updatedAt: new Date(), username: "Ara_Spinka48@gmail.com" },
        { password: "Mercielago", updatedAt: new Date(), username: "Elise.Bernhard@hotmail.com" },
        { password: "Expedition", updatedAt: new Date(), username: "Daphney75@hotmail.com" },
        { password: "Model 3", updatedAt: new Date(), username: "Presley_Wehner53@gmail.com" },
        { password: "Explorer", updatedAt: new Date(), username: "Felton.Kihn@gmail.com" },
        { password: "Escalade", updatedAt: new Date(), username: "Jacky50@gmail.com" },
        { password: "El Camino", updatedAt: new Date(), username: "Arno_VonRueden@hotmail.com" },
      ],
    },
  ];

  return (
    <Card className="bg-white w-full justify-start">
      <Typography variant="p" className="text-primary font-semibold">
        Your saved passwords
      </Typography>
      {data.map((item, index) => {
        return (
          <Websites
            icon={item.icon}
            name={item.siteName}
            count={item.accounts.length}
            length={data.length}
            index={index}
            data={item.accounts}
            key={`account-icon-${index}`}
          />
        );
      })}
    </Card>
  );
};

export default page;
