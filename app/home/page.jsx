import Card from "@/components/Card";
import Websites from "@/components/Websites";
import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  const data = [
    { icon: 'icon1.png', name: 'Item 1', count: 10, length: 20 },
    { icon: 'icon2.png', name: 'Item 2', count: 15, length: 25 },
    { icon: 'icon3.png', name: 'Item 3', count: 20, length: 30 },
  ];
  
  console.log(data);
  
  return (
    <Card className="bg-white w-full justify-start">
      <Typography variant="p" className="text-primary font-semibold">
        Your saved passwords
      </Typography>
      <Websites />
      <Websites />
      <Websites />
      <Websites />
      <Websites />
      <Websites />
    </Card>
  );
};

export default page;
