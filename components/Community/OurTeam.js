import { Box, Container, Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import siamProfile from "../../assets/images/Team members/professional-siam.png";
import style from "../../styles/community.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function OurTeam() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Typography textAlign="center" color={theme.palette.secondary.main} fontWeight="700" fontSize="15px">
        Professionals
      </Typography>
      <Typography textAlign="center" color={theme.palette.primary.main} fontWeight="700" fontSize={{ md: "40px", xs: "25px" }}>
        Meet Our Experts
      </Typography>
      <Grid container marginY={1} spacing={5}>
        <Grid height={550} className={style.memberCard} sx={{ transition: "0.4s" }} item lg={4} md={6} xs={12}>
          <Image src={siamProfile} alt="Siam's photo" style={{ zIndex: "-1", width: "100%", height: "425px" }} />
          <Stack
            className={style.memberCardBox}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            sx={{
              position: "relative",
              zIndex: "20",
              top: "-60px",
              mx: 5,
              py: "20px",
              borderRadius: 1,
            }}
          >
            <Box>
              <Typography fontSize={20} fontWeight={700} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                Sheikh Shahariar Siam
              </Typography>
              <Typography fontSize={17} marginTop={1} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                MERN Stack Developer
              </Typography>
              <Stack
                className={style.memberCardSocialItems}
                sx={{ marginTop: "-25px", opacity: 0 }}
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaFacebookF />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaInstagram />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaLinkedin />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaTwitter />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid height={550} className={style.memberCard} sx={{ transition: "0.4s" }} item lg={4} md={6} xs={12}>
          <Image src={siamProfile} alt="Siam's photo" style={{ zIndex: "-1", width: "100%", height: "425px" }} />
          <Stack
            className={style.memberCardBox}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            sx={{
              position: "relative",
              zIndex: "20",
              top: "-60px",
              mx: 5,
              py: "20px",
              borderRadius: 1,
            }}
          >
            <Box>
              <Typography fontSize={20} fontWeight={700} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                Sheikh Shahariar Siam
              </Typography>
              <Typography fontSize={17} marginTop={1} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                MERN Stack Developer
              </Typography>
              <Stack
                className={style.memberCardSocialItems}
                sx={{ marginTop: "-25px", opacity: 0 }}
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaFacebookF />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaInstagram />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaLinkedin />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaTwitter />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid height={550} className={style.memberCard} sx={{ transition: "0.4s" }} item lg={4} md={6} xs={12}>
          <Image src={siamProfile} alt="Siam's photo" style={{ zIndex: "-1", width: "100%", height: "425px" }} />
          <Stack
            className={style.memberCardBox}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            sx={{
              position: "relative",
              zIndex: "20",
              top: "-60px",
              mx: 5,
              py: "20px",
              borderRadius: 1,
            }}
          >
            <Box>
              <Typography fontSize={20} fontWeight={700} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                Sheikh Shahariar Siam
              </Typography>
              <Typography fontSize={17} marginTop={1} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                MERN Stack Developer
              </Typography>
              <Stack
                className={style.memberCardSocialItems}
                sx={{ marginTop: "-25px", opacity: 0 }}
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaFacebookF />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaInstagram />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaLinkedin />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaTwitter />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid height={550} className={style.memberCard} sx={{ transition: "0.4s" }} item lg={4} md={6} xs={12}>
          <Image src={siamProfile} alt="Siam's photo" style={{ zIndex: "-1", width: "100%", height: "425px" }} />
          <Stack
            className={style.memberCardBox}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            sx={{
              position: "relative",
              zIndex: "20",
              top: "-60px",
              mx: 5,
              py: "20px",
              borderRadius: 1,
            }}
          >
            <Box>
              <Typography fontSize={20} fontWeight={700} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                Sheikh Shahariar Siam
              </Typography>
              <Typography fontSize={17} marginTop={1} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                MERN Stack Developer
              </Typography>
              <Stack
                className={style.memberCardSocialItems}
                sx={{ marginTop: "-25px", opacity: 0 }}
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaFacebookF />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaInstagram />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaLinkedin />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaTwitter />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid height={550} className={style.memberCard} sx={{ transition: "0.4s" }} item lg={4} md={6} xs={12}>
          <Image src={siamProfile} alt="Siam's photo" style={{ zIndex: "-1", width: "100%", height: "425px" }} />
          <Stack
            className={style.memberCardBox}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            sx={{
              position: "relative",
              zIndex: "20",
              top: "-60px",
              mx: 5,
              py: "20px",
              borderRadius: 1,
            }}
          >
            <Box>
              <Typography fontSize={20} fontWeight={700} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                Sheikh Shahariar Siam
              </Typography>
              <Typography fontSize={17} marginTop={1} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                MERN Stack Developer
              </Typography>
              <Stack
                className={style.memberCardSocialItems}
                sx={{ marginTop: "-25px", opacity: 0 }}
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaFacebookF />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaInstagram />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaLinkedin />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaTwitter />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid height={550} className={style.memberCard} sx={{ transition: "0.4s" }} item lg={4} md={6} xs={12}>
          <Image src={siamProfile} alt="Siam's photo" style={{ zIndex: "-1", width: "100%", height: "425px" }} />
          <Stack
            className={style.memberCardBox}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            sx={{
              position: "relative",
              zIndex: "20",
              top: "-60px",
              mx: 5,
              py: "20px",
              borderRadius: 1,
            }}
          >
            <Box>
              <Typography fontSize={20} fontWeight={700} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                Sheikh Shahariar Siam
              </Typography>
              <Typography fontSize={17} marginTop={1} textAlign="center" color={theme.palette.textColorForBgSecondary.main}>
                MERN Stack Developer
              </Typography>
              <Stack
                className={style.memberCardSocialItems}
                sx={{ marginTop: "-25px", opacity: 0 }}
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaFacebookF />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaInstagram />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaLinkedin />
                </Link>
                <Link href="#" underline="none" color={theme.palette.textColorForBgSecondary.main} sx={{ cursor: "pointer", fontSize: "20px" }}>
                  <FaTwitter />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurTeam;
