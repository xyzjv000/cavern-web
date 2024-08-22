import * as React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CryptoJS from "crypto-js";

export default function AccountsDialog({
  open,
  handleClose,
  userData,
  name,
  handleChange,
  copyText,
}) {
  const [update, setUpdate] = React.useState(false);
  const [setshowPassword, setSetshowPassword] = React.useState(false)

  const submit = () => {
    console.log(userData);
    // save API
    handleClose();
  };
  const togglePasswordVisibility = () => {
    setSetshowPassword(!setshowPassword);
  };

  // const encryptData = async (text) => {
  //   let ciphertext = CryptoJS.AES.encrypt(
  //     text,
  //     process.env.NEXT_PUBLIC_SECRET
  //   ).toString();
  //   return ciphertext;
  // };
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
      <DialogTitle variant="inherit" className="text-primary text-2xl pt-8">
        {name} Account
      </DialogTitle>
      <DialogContent className="!px-8 !py-4">
        <TextField
          label="Username"
          placeholder="Username"
          required
          className="mb-5"
          name="username"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  className="mx-0 text-primary"
                  onClick={() => copyText(userData.username)}
                >
                  <ContentCopyTwoToneIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          disabled={!update}
          value={userData.username}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Password"
          security="password"
          fullWidth
          placeholder="Password"
          required
          name="password"
          type={setshowPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  className="mx-0 text-primary"
                  onClick={togglePasswordVisibility}
                >
                  {setshowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
                <IconButton
                  edge="end"
                  className="mx-0 text-primary"
                  onClick={() => copyText(userData.password)}
                >
                  <ContentCopyTwoToneIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          disabled={!update}
          value={userData.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Switch value={update} onClick={(e) => setUpdate(e.target.checked)} />}
          label="Enable update"
        />
      </DialogContent>
      <DialogActions className="px-6 pb-6 gap-4">
        <ButtonBase onClick={handleClose} className="font-medium ">
          Close
        </ButtonBase>
        <ButtonBase onClick={submit} className="font-medium text-primary">
          Save
        </ButtonBase>
      </DialogActions>
    </Dialog>
  );
}
