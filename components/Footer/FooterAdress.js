import { Box, Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailIcon from "@mui/icons-material/Mail";

function FooterAdress() {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.textColorForBgSecondary.lightWhite} sx={{ fontSize: "20px", fontWeight: 500, marginBottom: 1 }}>
        Address
      </Typography>
      <hr />
      <Grid container sx={{ marginTop: 3 }} rowGap={2}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <AddLocationAltIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon , Chadnimath , Jatrabari , Dhaka</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <MailIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                issiam02415@gmail.com
              </Link>{" "}
              <br />
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                issiam02415@gmail.com
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneInTalkOutlinedIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                +955069969666
              </Link>{" "}
              <br />
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                +98563556555
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterAdress;
