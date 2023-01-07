import { Card, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import securtyImage from "../../assets/images/protect.png";
import Image from "next/image";
import { Box } from "@mui/system";
import { AiOutlineDatabase, AiOutlineCloudServer, AiOutlineSecurityScan } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

const CyberSecurity = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{mt: 5}}>
      <Stack direction={{lg: "row" , xs: "column-reverse"}}  spacing={2} >
        <Grid width={{lg: "50%" , xs: "100%"}} sx={{ py: {lg: 5 , xs: 0} }}>
          <Typography color={theme.palette.secondary.main} fontWeight="700" fontSize="15px">
            Cyber Security Protect
          </Typography>
          <Typography color={theme.palette.primary.main} fontWeight="700" fontSize={{ md: "30px", xs: "25px" }}>
            Protect Your Website, Web Server, and Web Application for Helping You Being Threats From The Hacker
          </Typography>

          <Grid container sx={{ my: {lg: 2 , xs: "0px"}}} spacing={4}>
            <Grid item md={6} xs={12}>
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

                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography sx={{ textAlign: "center", color: theme.palette.secondary.main }} component="h3" variant="h3">
                  <AiOutlineDatabase />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Database Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "gray",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.
                </Typography>
              </Card>
            </Grid>
            <Grid item  md={6} xs={12}>
              <Card
                sx={{
                  backgroundColor: theme.palette.secondary.main,
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

                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography sx={{ textAlign: "center", color: "white" }} component="h3" variant="h3">
                  <MdOutlineSecurity />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Database Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "white",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.
                </Typography>
              </Card>
            </Grid>
            <Grid item  md={6} xs={12}>
              <Card
                sx={{
                  backgroundColor: theme.palette.secondary.main,
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
                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography sx={{ textAlign: "center", color: "white" }} component="h3" variant="h3">
                  <AiOutlineCloudServer />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Web Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "white",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.
                </Typography>
              </Card>
            </Grid>
            <Grid item  md={6} xs={12}>
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

                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography sx={{ textAlign: "center", color: theme.palette.secondary.main }} component="h3" variant="h3">
                  <AiOutlineSecurityScan />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Server Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "gray",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Box width={{lg: "50%" , xs: "100%"}}  sx={{ p: {lg: 5 , xs: 0} }}>
            <Image style={{ width: "100%", height: "100%" }} src={securtyImage} alt="securtyImage" />
        </Box>
      </Stack>
    </Container>
  );
};

export default CyberSecurity;
