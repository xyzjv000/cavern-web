import Card from "@/components/Card";
import Websites from "@/components/Websites";
import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  const data = [
    { icon: 'bank', name: 'Apple', count: 10, length: 20 },
    { icon: 'apple', name: 'Android', count: 15, length: 25 },
    { icon: 'card-account-details-outline', name: 'Linux', count: 20, length: 30 },
  ];
  
  
  return (
    <Card className="bg-white w-full justify-start">
      <Typography variant="p" className="text-primary font-semibold">
        Your saved passwords
      </Typography>
      {data.map((item, index) => {
        return <Websites icon={item.icon} name={item.name} count={item.count} length={data.length} index={index} key={`account-icon-${index}`} />
      })}
      
    </Card>
  );
};

export default page;
