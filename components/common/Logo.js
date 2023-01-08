import { Link , Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import RouterLink from "next/link";
import logo from "../../assets/images/My project.png";

const Logo = () => {
  const theme = useTheme();
  return (
    <Link
      href="/"
      underline="none"
      component={RouterLink}
      color={theme.palette.textColorForBgSecondary.lightWhite}
      sx={{
        cursor: "pointer",
        transition: ".4s",
        ":hover": { color: theme.palette.textColorForBgSecondary.main },
      }}
    >
      <Stack direction="row" alignItems="center">
        <Image src={logo} alt="logo" height="60" width="60" />
        <Typography fontFamily="cursive " fontSize="35px" fontWeight={600}>
          Biswas
        </Typography>
      </Stack>
    </Link>
  );
};

export default Logo;
