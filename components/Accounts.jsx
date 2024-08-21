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
import CryptoJS from "crypto-js";
const Accounts = ({ account, name }) => {
  React.useEffect(() => {
    const decryptData = async (text) => {
      let bytes = CryptoJS.AES.decrypt(text, process.env.NEXT_PUBLIC_SECRET);
      let originalText = bytes.toString(CryptoJS.enc.Utf8);

      return originalText;
    };

    const setAndDecryptData = async () => {
      try {
        // Ensure decryption of the password
        const decryptedPassword = await decryptData(account.password);

        // Create the user account object with decrypted data
        const userAccount = {
          username: account.username,
          password: decryptedPassword,
        };

        // Update the state with the user account data
        setUserData(userAccount);
      } catch (error) {
        console.error("Error processing account data:", error);
      }
    };
    if (account.password) {
      setAndDecryptData();
    }
  }, [account]);

  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState(account);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to cut text: ", err);
      alert("Failed to cut text.");
    }
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
            primary={userData.username}
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
            onClick={() => copyTextToClipboard(userData.password)}
          >
            <ContentCopyTwoToneIcon />
          </IconButton>
        </ListItem>
      </List>
      <Divider />
      <AccountsDialog
        open={open}
        handleClose={handleClose}
        userData={userData}
        name={name}
        handleChange={handleChange}
        copyText={copyTextToClipboard}
      />
    </Box>
  );
};

export default Accounts;
