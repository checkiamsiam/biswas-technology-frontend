import { Container, Grid, Stack, useTheme, Link, Typography, Box } from "@mui/material";
import style from "../../styles/home.module.css";
import FooterSubtitle from "./FooterSubtitle";
import FooterIntro from "./FooterIntro";
import FooterAdress from "./FooterAdress";
import FooterSolutions from "./FooterSolutions";
import FooterResources from "./FooterResources";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box className={style.setBgInFooter} sx={{ mt: 6 }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" spacing={5} sx={{ py: 5 }}>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <FooterIntro />
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
           <FooterAdress/>
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <FooterSolutions/>
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <FooterResources/>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Container maxWidth="xl">
        <FooterSubtitle />
      </Container>
    </Box>
  );
};

export default Footer;
