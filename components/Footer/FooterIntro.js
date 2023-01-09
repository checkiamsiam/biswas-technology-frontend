import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../common/Logo";

function FooterIntro() {
  const theme = useTheme();
  return (
    <Box>
      <Logo />
      <Typography color={theme.palette.textColorForBgSecondary.main} marginY={1}>
        Biswas tech is a web design and development service providing software company. We also work on mobile application development and auto cad services.
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" paddingY={1}>
        <Link
          href="#"
          underline="none"
          color={theme.palette.textColorForBgSecondary.main}
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            padding: 1,
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            transition: "0.4s ease-in-out",
            ":hover": {
              backgroundColor: theme.palette.secondary.main,
              translate: "0 -2px",
            },
          }}
        >
          <FaFacebookF />
        </Link>
        <Link
          href="#"
          underline="none"
          color={theme.palette.textColorForBgSecondary.main}
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            padding: 1,
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            transition: "0.4s ease-in-out",
            ":hover": {
              backgroundColor: theme.palette.secondary.main,
              translate: "0 -2px",
            },
          }}
        >
          <FaInstagram />
        </Link>
        <Link
          href="#"
          underline="none"
          color={theme.palette.textColorForBgSecondary.main}
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            padding: 1,
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            transition: "0.4s ease-in-out",
            ":hover": {
              backgroundColor: theme.palette.secondary.main,
              translate: "0 -2px",
            },
          }}
        >
          <FaLinkedin />
        </Link>
        <Link
          href="#"
          underline="none"
          color={theme.palette.textColorForBgSecondary.main}
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            padding: 1,
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            transition: "0.4s ease-in-out",
            ":hover": {
              backgroundColor: theme.palette.secondary.main,
              translate: "0 -2px",
            },
          }}
        >
          <FaTwitter />
        </Link>
      </Stack>
    </Box>
  );
}

export default FooterIntro;
