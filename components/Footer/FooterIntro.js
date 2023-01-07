import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/images/My project.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function FooterIntro() {
  const theme = useTheme()
  return (
    <Box>
    <Stack direction="row" alignItems="center">
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
    <Typography color={theme.palette.textColorForBgSecondary.main} marginY={1}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vitae ullam aliquam velit optio similique illum nisi obcaecati
      nesciunt, fugit quidem dolores, animi dolor at illo. Saepe iste sint ad?
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