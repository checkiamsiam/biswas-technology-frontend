import { Box, Container, Grid,  Stack, Tab,  Typography, useTheme } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import aboutImage from "../../assets/images/danial-igdery-FCHlYvR5gJI-unsplash.jpg";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

const HomeAbout = () => {
  const [tabValue, setTabValue] = useState("1");
  const theme = useTheme();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <Stack direction={{ md: "row", xs: "column" }}>
        <Box width={{ md: "50%", xs: "100%" }}>
          <Image style={{ width: "100%", height: "100%" }} src={aboutImage} alt="coding on laptop" />
        </Box>
        <Box width={{ md: "50%", xs: "100%" }} padding={{ md: 3, xs: 0 }}>
          <Typography color={theme.palette.secondary.main} fontWeight={600}>
            About us
          </Typography>
          <Typography fontSize={{ md: 30, xs: 20 }} fontWeight={500}>
            We are here for give you the best development services by well experienced and skilled developers.
          </Typography>
          <TabContext value={tabValue}>
            <TabList onChange={handleTabChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
              <Tab value="1" sx={{ fontWeight: 600, padding: 0, marginRight: 2 }} label="Experience" />
              <Tab value="2" sx={{ fontWeight: 600, padding: 0, marginRight: 2 }} label="Why We Best" />
              <Tab value="3" sx={{ fontWeight: 600, padding: 0, marginRight: 2 }} label="Our Steps" />
            </TabList>
            <TabPanel value="1" sx={{ padding: "0px", marginTop: 2 }}>
              <Typography>We have a 4-5 year experienced development team in this department. we work in MERN Stack.</Typography>
              <Grid container sx={{ marginTop: 2 }} rowGap={1}>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>MERN Stack</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>React Native</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>SEO</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>Digital Marketing</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: "0px", marginTop: 2 }}>
              <Typography>
                We offer you a friendly development experienced and we build your website very carefully thats you mark us best.
              </Typography>
              <Grid container sx={{ marginTop: 2 }} rowGap={1}>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>Trusted Team</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>Friendly Support</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>WBI (Work By Instruction Service)</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>On Filed Experienced</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="3" sx={{ padding: "0px", marginTop: 2 }}>
              <Typography>We have a team of many varius kind of technology specialist. our engineers work perfectly in there own field.</Typography>
              <Grid container sx={{ marginTop: 2 }} rowGap={1}>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>Work Planing</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>Daily Meeting</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>Corrections</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>Production</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Stack>
    </Container>
  );
};

export default HomeAbout;
