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

export default function AccountsDialog({ open, handleClose, data, name }) {
  const [update, setUpdate] = React.useState(false);
  const [userData, setUserData] = React.useState(data);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submit = () => {
    console.log(userData);
    handleClose();
  };
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
      <DialogTitle variant="inherit" className="text-primary text-2xl pt-8">
        {name} Account
      </DialogTitle>
      <DialogContent className="!px-8 !py-4">
        <TextField
          label="Email"
          placeholder="Email Address"
          required
          className="mb-5"
          name="username"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" className="mx-0 text-primary">
                  <ContentCopyTwoToneIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          disabled={update}
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" className="mx-0 text-primary">
                  <ContentCopyTwoToneIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          disabled={update}
          value={userData.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Switch onClick={(e) => setUpdate(!e.target.checked)} />}
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
