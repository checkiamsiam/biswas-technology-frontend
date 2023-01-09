import { Box, Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import RectangleIcon from "@mui/icons-material/Rectangle";

function FooterClientServices() {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.textColorForBgSecondary.lightWhite} sx={{ fontSize: "20px", fontWeight: 500, marginBottom: 1 }}>
        Client Service
      </Typography>
      <hr />
      <Grid container sx={{ marginTop: 3 }} rowGap={1}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main, fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Search Terms
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main, fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Advance Search
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main, fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Contact Us
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main, fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Order and Cancel
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main, fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Redesign Order
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main, fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Live Chat
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterClientServices;
