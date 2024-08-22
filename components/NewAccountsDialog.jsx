// React import
import * as React from "react";

// Material-UI core components
import ButtonBase from "@mui/material/ButtonBase";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContent,
  IconButton,
  InputAdornment,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";

// Material-UI icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Other utilities
import CryptoJS from "crypto-js";

export default function NewAccountsDialog({ open, handleClose }) {
  const [currentSites, setCurrentSites] = React.useState([]);
  const [siteData, setSiteData] = React.useState();
  const [accountData, setAccountData] = React.useState({
    username: "",
    password: "",
    confirm: "",
  });
  const [setshowPassword, setSetshowPassword] = React.useState(false);

  React.useEffect(() => {
    const getSites = () => {
      const storage = JSON.parse(localStorage.getItem("websites"));
      if (storage) {
        const mappedSites = storage.map((site) => ({
          siteName: site.siteName,
          id: site.id,
          userId: site.userId,
        }));

        setCurrentSites(mappedSites);
      }
    };
    getSites();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAccountData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = () => {
    console.log(userData);
    // save API
    handleClose();
  };
  const togglePasswordVisibility = () => {
    setSetshowPassword(!setshowPassword);
  };

  const encryptData = async (text) => {
    let ciphertext = CryptoJS.AES.encrypt(
      text,
      process.env.NEXT_PUBLIC_SECRET
    ).toString();
    return ciphertext;
  };

  const handleWebsiteSelect = (event) => {
    setSiteData(event.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
      <DialogTitle variant="inherit" className="text-primary text-2xl pt-8">
        New Account
      </DialogTitle>
      <form>
        <DialogContent className="!px-8 !py-4">
          {/* TODO: ICONS SHOULD BE VISIBLE ON SELECTING A WEBSITE */}
          <FormControl fullWidth className="mb-3">
            <InputLabel id="website-label">Website</InputLabel>
            <Select
              labelId="website-label"
              id="website-select"
              fullWidth
              value={siteData}
              label="Website"
              className="mb-1"
              onChange={handleWebsiteSelect}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 224, // Adjust height to avoid overlap
                  },
                },
              }}
            >
              {currentSites.map((site) => (
                <MenuItem key={site.id} value={site.id}>
                  {site.siteName}
                </MenuItem>
              ))}
            </Select>
            <Button variant="text" className="text-primary antialiased">CREATE NEW WEBSITE</Button>
          </FormControl>
          <TextField
            label="Username"
            placeholder="Username"
            required
            className="mb-5"
            name="username"
            fullWidth
            value={accountData.username}
            onChange={handleChange}
          />
          <br />
          <TextField
            label="Password"
            security="password"
            fullWidth
            placeholder="Password"
            required
            className="mb-5"
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
                    {setshowPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={accountData.password}
            onChange={handleChange}
          />
          <br />
          <TextField
            label="Confirm Password"
            security="password"
            fullWidth
            placeholder="Confirm Password"
            required
            name="confirm"
            type={setshowPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    className="mx-0 text-primary"
                    onClick={togglePasswordVisibility}
                  >
                    {setshowPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={accountData.confirm}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions className="px-6 pb-6 gap-4">
          <ButtonBase onClick={handleClose} className="font-medium ">
            Close
          </ButtonBase>
          <ButtonBase
            onClick={handleClose}
            className="font-medium text-primary"
          >
            Save
          </ButtonBase>
        </DialogActions>
      </form>
    </Dialog>
  );
}
