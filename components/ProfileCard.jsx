import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ProfileCard = () => {
  return (
    <Box className="flex flex-row gap-2 items-center">
      <Avatar sx={{ width: 56, height: 56 }}>J</Avatar>
      <Box>
        <Typography variant="h6" fontWeight={600} color="white" lineHeight={1}>
          Jesvir Subang
        </Typography>
        <Typography variant="p" fontSize={14} color="white">
          xyzjv000@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
