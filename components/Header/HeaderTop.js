import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Link, useTheme } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        py: 1,
        color: theme.palette.textColorForBgSecondary.main,
      }}
    >
      <Stack direction={{ sm: "row" }} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center" paddingY={1}>
          <PhoneInTalkOutlinedIcon />
          <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer" }}>
            +880191XXXXXXX
          </Link>
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center" paddingY={1}>
          <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
            <FaFacebookF />
          </Link>
          <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
            <FaInstagram />
          </Link>
          <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
            <FaLinkedin />
          </Link>
          <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
            <FaTwitter />
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeaderTop;
