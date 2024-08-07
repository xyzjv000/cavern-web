import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItem } from "@mui/material";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import AccountsDialog from "@/components/AccountsDialog";

const Accounts = ({ account, name }) => {
  React.useEffect(() => {
    setData(account);
  }, [account]);

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(account);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{ width: "100%", bgcolor: "background.paper" }}
      className="px-0 sm:px-2"
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemIcon className="min-w-8 hidden sm:inline-flex">
            <AdminPanelSettingsTwoToneIcon className="text-primary" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={data.username}
            className="font-medium text-gray-500 "
          />
          <IconButton
            edge="end"
            aria-label="edit"
            className="mx-0 text-primary"
            onClick={handleOpen}
          >
            <EditTwoToneIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="copy"
            className="mx-0 text-primary"
            onClick={handleOpen}
          >
            <ContentCopyTwoToneIcon />
          </IconButton>
        </ListItem>
      </List>
      <Divider />
      <AccountsDialog open={open} handleClose={handleClose} data={data} name={name} />
    </Box>
  );
};

export default Accounts;
