import { Box, Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import approachImg from "../../assets/images/approach.png";

const OurApproach = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Typography textAlign="center" color={theme.palette.secondary.main} fontWeight="700" fontSize="15px">
        Our Approach
      </Typography>
      <Typography textAlign="center"  color={theme.palette.primary.main} fontWeight="700" fontSize={{ md: "40px", xs: "25px" }}>
        To Enhance Web maintained experience
      </Typography>
      <Stack direction={{ lg: "row", xs: "column" }}  spacing={5} sx={{ my: 5 }}>
        <Grid width={{ lg: "50%", xs: "100%" }}  >
          <Image style={{ width: "100%", height: "100%" }} src={approachImg} alt="" />
        </Grid>
        <Stack justifyContent="center" alignItems="center" width={{ lg: "50%", xs: "100%" }}>
          <Box>
            <Typography color={theme.palette.primary.main} fontWeight="700" fontSize={{ md: "30px", xs: "25px" }}>
              Protect Your Website, Web Server, and Web Application for Helping You Being Threats From The Hacker
            </Typography>
            <Grid mt={3} container spacing={3}>
              <Grid item md={6}>
                <Card
                  sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    padding: "22px",
                    ":before": {
                      content: `""`,
                      display: "block",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "0",
                    },
                    ":hover": {
                      transition: "all 0.3s ease-in-out",
                      transform: `translateY(-5px)`,
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    },
                    borderRadius: 0,
                    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderLeft: "2px solid #e21f36",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Trusted Partner
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",

                      py: 1,
                    }}
                    component="p"
                  >
                    sed diam nonumy eirmod tempor invidunt ut labore et.
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card
                  sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    padding: "22px",
                    ":before": {
                      content: `""`,
                      display: "block",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "0",
                    },
                    ":hover": {
                      transition: "all 0.3s ease-in-out",
                      transform: `translateY(-5px)`,
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    },
                    borderRadius: 0,
                    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderLeft: "2px solid #e21f36",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Product Security
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",

                      py: 1,
                    }}
                    component="p"
                  >
                    sed diam nonumy eirmod tempor invidunt ut labore et.
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card
                  sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    padding: "22px",
                    ":before": {
                      content: `""`,
                      display: "block",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "0",
                    },
                    ":hover": {
                      transition: "all 0.3s ease-in-out",
                      transform: `translateY(-5px)`,
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    },
                    borderRadius: 0,
                    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderLeft: "2px solid #e21f36",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    System Security
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",

                      py: 1,
                    }}
                    component="p"
                  >
                    sed diam nonumy eirmod tempor invidunt ut labore et.
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card
                  sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    padding: "22px",
                    ":before": {
                      content: `""`,
                      display: "block",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "0",
                    },
                    ":hover": {
                      transition: "all 0.3s ease-in-out",
                      transform: `translateY(-5px)`,
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    },
                    borderRadius: 0,
                    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderLeft: "2px solid #e21f36",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Operational Security
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",

                      py: 1,
                    }}
                    component="p"
                  >
                    sed diam nonumy eirmod tempor invidunt ut labore et.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default OurApproach;
