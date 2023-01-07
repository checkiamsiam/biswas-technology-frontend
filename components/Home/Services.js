import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import webDevIcon from "../../assets/images/web-development-icon.png";
import MobileAppDevIcon from "../../assets/images/mobile-app-development.png";
import seoIcon from "../../assets/images/seo.png";
import autoCadIcon from "../../assets/images/architecture.png";

const Services = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ marginTop: 5 , marginTop: "-100px" }}>
      <Grid container spacing={2}>
        <Grid item lg={3} md={6} xs={12}>
          <Box
            height={250}
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
            <Stack direction="row" alignItems="center" spacing={2}>
              <Image src={webDevIcon} alt="web Development Icon" width={60} />
              <Typography fontSize={20} fontWeight={700} color={theme.palette.textColorForBgSecondary.main}>
                Web Development
              </Typography>
            </Stack>
            <Typography fontSize={17} marginTop={3} textAlign="justify" color={theme.palette.textColorForBgSecondary.main}>
              We offer you the best MERN Stack Web Development services. We have 5+ Year senior developer on this filed.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Box
            height={250}
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
            <Stack direction="row" alignItems="center" spacing={1}>
              <Image src={MobileAppDevIcon} alt="web Development Icon" width={60} />
              <Typography fontSize={20} fontWeight={700} color={theme.palette.textColorForBgSecondary.main}>
                Mobile Application
              </Typography>
            </Stack>
            <Typography textAlign="justify" fontSize={17} marginTop={3} color={theme.palette.textColorForBgSecondary.main}>
              We have experience React Native Developer too. we build many native app that are published on play store.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Box
            height={250}
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
            <Stack direction="row" alignItems="center" spacing={2}>
              <Image src={seoIcon} alt="web Development Icon" width={60} />
              <Typography fontSize={20} fontWeight={700} color={theme.palette.textColorForBgSecondary.main}>
                SEO
              </Typography>
            </Stack>
            <Typography textAlign="justify" fontSize={17} marginTop={3} color={theme.palette.textColorForBgSecondary.main}>
              We are free to make your application SEO friendly. We also well-known by our server side rendered applications.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Box
            height={250}
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
            <Stack direction="row" alignItems="center" spacing={2}>
              <Image src={autoCadIcon} alt="web Development Icon" width={60} />
              <Typography fontSize={20} fontWeight={700} color={theme.palette.textColorForBgSecondary.main}>
                Auto Cad
              </Typography>
            </Stack>
            <Typography fontSize={17} marginTop={3} textAlign="justify" color={theme.palette.textColorForBgSecondary.main}>
              we also offer AutoCad services. we can make 3d and 2d structure design for you. Unique Designs and Amaizing support.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
