import { Container, Grid, Box } from "@mui/material";
import style from "../../styles/home.module.css";
import FooterSubtitle from "./FooterSubtitle";
import FooterIntro from "./FooterIntro";
import FooterContactUs from "./FooterContactUs";
import FooterInformation from "./FooterInformation";
import FooterClientServices from "./FooterClientServices";

const Footer = () => {
  return (
    <Box className={style.setBgInFooter} sx={{ mt: { md: 10, xs: 5 } }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" spacing={5} sx={{ py: 5 }}>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <FooterIntro />
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <FooterContactUs />
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <FooterInformation />
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <FooterClientServices />
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
