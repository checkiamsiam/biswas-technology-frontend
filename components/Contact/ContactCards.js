import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MailIcon from '@mui/icons-material/Mail';
import style from "../../styles/contact.module.css";

const ContactCards = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ position: "relative", my: 5, marginTop: "-100px" }}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Box
            className={style.box}
            height={350}
            bgcolor={theme.palette.primary.main}
            padding={3}
            sx={{
              transition: "0.4s",
              ":hover": {
                bgcolor: theme.palette.secondary.main,
                translate: "0 -10px",
                borderRadius: 1,
              },
            }}
          >
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <AddLocationAltIcon className={style.icon} sx={{ color: theme.palette.secondary.main, fontSize: 200 }} />
              <Typography fontSize={35} fontWeight={700} color={theme.palette.textColorForBgSecondary.main}>
                Adress
              </Typography>
            </Stack>
            <Typography textAlign="center" fontSize={17} color={theme.palette.textColorForBgSecondary.main}>
              Dhaka - Khulna - Satkhira
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            className={style.box}
            height={350}
            bgcolor={theme.palette.primary.main}
            padding={3}
            sx={{
              transition: "0.4s",
              ":hover": {
                bgcolor: theme.palette.secondary.main,
                translate: "0 -10px",
                borderRadius: 1,
              },
            }}
          >
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <PhoneInTalkIcon className={style.icon} sx={{ color: theme.palette.secondary.main, fontSize: 200 }} />
              <Typography fontSize={35} fontWeight={700} color={theme.palette.textColorForBgSecondary.main}>
                Call Now
              </Typography>
            </Stack>
            <Typography textAlign="center" fontSize={17} color={theme.palette.textColorForBgSecondary.main}>
              +880191XXXXXXXX
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            className={style.box}
            height={350}
            bgcolor={theme.palette.primary.main}
            padding={3}
            sx={{
              transition: "0.4s",
              ":hover": {
                bgcolor: theme.palette.secondary.main,
                translate: "0 -10px",
                borderRadius: 1,
              },
            }}
          >
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <MailIcon className={style.icon} sx={{ color: theme.palette.secondary.main, fontSize: 200 }} />
              <Typography fontSize={35} fontWeight={700} color={theme.palette.textColorForBgSecondary.main}>
                Send Mail
              </Typography>
            </Stack>
            <Typography textAlign="center" fontSize={17} color={theme.palette.textColorForBgSecondary.main}>
              help01@biswas.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactCards;
