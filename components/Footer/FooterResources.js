import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import RectangleIcon from "@mui/icons-material/Rectangle";

function FooterResources() {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.textColorForBgSecondary.lightWhite} s sx={{ fontSize: "20px", fontWeight: 500, marginBottom: 1 }}>
        Resources
      </Typography>
      <hr />
      <Grid container sx={{ marginTop: 3 }} rowGap={1}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterResources;
