import { Link, Stack, Typography, useTheme } from "@mui/material";

function FooterSubtitle() {
  const theme = useTheme();
  return (
    <Stack justifyContent="space-between" spacing={1} alignItems="center" sx={{ py: 2 }}>
      <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Copyright @2023 Biswas.</Typography>
      <Stack direction="row" spacing={2} color={theme.palette.textColorForBgSecondary.lightWhite}>
        <Link href="" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
          Privacy Policy
        </Link>
        <Link href="" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
          Terms & Conditions
        </Link>
      </Stack>
    </Stack>
  );
}

export default FooterSubtitle;
