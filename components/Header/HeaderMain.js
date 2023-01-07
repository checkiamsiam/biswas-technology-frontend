import { Button, Link, useTheme, Hidden, IconButton, Stack, Container } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/images/My project.png";
import HeaderHambergerBody from "./HeaderHambergerBody";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import MyButton from "../common/MyButton";

const HeaderMain = ({ hideness }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: hideness ? theme.palette.primary.main : "transparent",
        boxShadow: hideness ? 2 : 15,
        py: 1,
        
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" paddingY={1}>
          <Image src={logo} alt="logo" height="60" width="60" />
          <Link
            href="#"
            underline="none"
            color={theme.palette.textColorForBgSecondary.lightWhite}
            sx={{
              cursor: "pointer",
              fontSize: "35px",
              fontWeight: 700,
              transition: ".4s",
              ":hover": { color: theme.palette.textColorForBgSecondary.main },
            }}
          >
            Biswas
          </Link>
        </Stack>
        <Hidden mdDown>
          <Stack direction="row" spacing={{ lg: 8, md: 2 }} justifyContent="center" alignItems="center" paddingY={1}>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{
                cursor: "pointer",
                fontSize: "20px",
                borderBottom: "3px solid transparent",
                transition: ".4s",
                ":hover": { color: theme.palette.textColorForBgSecondary.main, borderBottom: `3px solid ${theme.palette.secondary.main}` },
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{
                cursor: "pointer",
                fontSize: "20px",
                borderBottom: "3px solid transparent",
                transition: ".4s",
                ":hover": {
                  color: theme.palette.textColorForBgSecondary.main,
                  borderWidth: "100%",
                  borderBottom: `3px solid ${theme.palette.secondary.main}`,
                },
              }}
            >
              About us
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{
                cursor: "pointer",
                fontSize: "20px",
                borderBottom: "3px solid transparent",
                transition: ".4s",
                ":hover": { color: theme.palette.textColorForBgSecondary.main, borderBottom: `3px solid ${theme.palette.secondary.main}` },
              }}
            >
              Services
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{
                cursor: "pointer",
                fontSize: "20px",
                borderBottom: "3px solid transparent",
                transition: ".4s",
                ":hover": { color: theme.palette.textColorForBgSecondary.main, borderBottom: `3px solid ${theme.palette.secondary.main}` },
              }}
            >
              Community
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{
                cursor: "pointer",
                fontSize: "20px",
                borderBottom: "3px solid transparent",
                transition: ".4s",
                ":hover": { color: theme.palette.textColorForBgSecondary.main, borderBottom: `3px solid ${theme.palette.secondary.main}` },
              }}
            >
              Contact
            </Link>
          </Stack>
        </Hidden>
        <Hidden mdDown>
          <Stack>
            <MyButton>Get Us</MyButton>
          </Stack>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Hamburger color={theme.palette.textColorForBgSecondary.lightWhite} toggled={open} toggle={setAnchorEl} />
          </IconButton>
        </Hidden>
      </Stack>
      <HeaderHambergerBody anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Container>
  );
};

export default HeaderMain;
