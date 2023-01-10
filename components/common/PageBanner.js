import { Breadcrumbs, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import NextLink from "next/link";
import ParticlesWrapper from "../common/ParticlesWrapper";
import HomeIcon from "@mui/icons-material/Home";

const PageBanner = ({ title, path }) => {
  const theme = useTheme();
  return (
    <ParticlesWrapper>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="center" alignItems="center" minHeight="90vh">
          <Stack width={{ lg: "50%", xs: "100%" }}>
            <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="800" fontSize={{ md: "50px", xs: "35px" }}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="center" marginTop="20px">
              <Breadcrumbs sx={{ color: theme.palette.textColorForBgSecondary.main }} aria-label="breadcrumb">
                <Link
                  underline="none"
                  component={NextLink}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    transition: ".4s",
                    ":hover": {
                      color: theme.palette.secondary.main,
                    },
                  }}
                  color="inherit"
                  href="/"
                >
                  <HomeIcon sx={{ mr: 0.5, fontSize: 22 }} fontSize="inherit" />
                  Home
                </Link>
                {typeof path === "string" ? (
                  <Typography color={theme.palette.secondary.main}>{path}</Typography>
                ) : (
                  path.map((p, i) => (
                    <Typography key={i} color={theme.palette.secondary.main}>
                      {p}
                    </Typography>
                  ))
                )}
                {}
              </Breadcrumbs>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </ParticlesWrapper>
  );
};

export default PageBanner;
