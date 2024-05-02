import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Searchbar = () => {
  return (
    <TextField
      id="outlined-search"
      placeholder="Search"
      type="search"
      fullWidth     
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
