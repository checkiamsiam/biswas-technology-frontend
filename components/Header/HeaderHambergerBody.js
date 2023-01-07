import { Home, Info as InfoIcon, ManageAccounts, LocalPostOffice, Groups as TeamIcon } from "@mui/icons-material";
import { Link, ListItemIcon, Menu, MenuItem, Stack, Button, useTheme } from "@mui/material";
import NextLink from "next/link";

const HeaderHambergerBody = ({ anchorEl, open, handleClose }) => {
  const theme = useTheme();
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          bgcolor: "#232323",
          width: { sm: "50%", xs: "100%" },
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>
        <Link href="#" component={NextLink} underline="none">
          <Stack direction="row" alignItems="center" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }}>
            <ListItemIcon>
              <Home fontSize="medium" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }} />
            </ListItemIcon>
            Home
          </Stack>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#" component={NextLink} underline="none">
          <Stack direction="row" alignItems="center" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }}>
            <ListItemIcon>
              <InfoIcon fontSize="medium" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }} />
            </ListItemIcon>
            About us
          </Stack>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#" component={NextLink} underline="none">
          <Stack direction="row" alignItems="center" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }}>
            <ListItemIcon>
              <ManageAccounts fontSize="medium" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }} />
            </ListItemIcon>
            Services
          </Stack>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#" component={NextLink} underline="none">
          <Stack direction="row" alignItems="center" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }}>
            <ListItemIcon>
              <TeamIcon fontSize="medium" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }} />
            </ListItemIcon>
            Our Team
          </Stack>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#" component={NextLink} underline="none">
          <Stack direction="row" alignItems="center" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }}>
            <ListItemIcon>
              <LocalPostOffice fontSize="medium" sx={{ color: theme.palette.textColorForBgSecondary.lightWhite }} />
            </ListItemIcon>
            Contact
          </Stack>
        </Link>
      </MenuItem>
      <MenuItem>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            py: "15px",
            transition: ".4s",
            px: "65px",
            ":hover": {
              backgroundColor: "#FF5A00",
            },
          }}
        >
          Get Us
        </Button>
      </MenuItem>
    </Menu>
  );
};

export default HeaderHambergerBody;
