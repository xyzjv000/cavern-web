import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

import NewAccountsDialog from "@/components/NewAccountsDialog";

const AddButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "absolute",
        bottom: "1rem",
        right: "1rem",
        position: 'fixed'
      }}
    >
      <Fab
        variant="extended"
        className="hover:!bg-secondary"
        sx={{ backgroundColor: "#508de9 !important", color: "#FFFFFF" }}
        onClick={handleOpen}
      >
        <AddIcon sx={{ mr: 1, color: "white" }} />
        Create New
      </Fab>
      {open && <NewAccountsDialog open={open} handleClose={handleClose} />}
    </Box>
  );
};

export default AddButton;
