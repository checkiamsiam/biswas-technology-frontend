import { Box, Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import RectangleIcon from "@mui/icons-material/Rectangle";

function FooterInformation() {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.textColorForBgSecondary.lightWhite} sx={{ fontSize: "20px", fontWeight: 500, marginBottom: 1 }}>
        Information
      </Typography>
      <hr />
      <Grid container sx={{ marginTop: 3 }} rowGap={1}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
          <RectangleIcon sx={{ color: theme.palette.secondary.main , fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                About
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
          <RectangleIcon sx={{ color: theme.palette.secondary.main , fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Services
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
          <RectangleIcon sx={{ color: theme.palette.secondary.main , fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Privacy Policy
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
          <RectangleIcon sx={{ color: theme.palette.secondary.main , fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Terms and conditions
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
          <RectangleIcon sx={{ color: theme.palette.secondary.main , fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Community
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main , fontSize: "15px" }} />
            <Typography>
              <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                Approach
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterInformation;
