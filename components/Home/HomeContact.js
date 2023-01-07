import { Box, Button, Container, Grid, Stack, TextField, Typography, useTheme } from "@mui/material";
import style from "../../styles/home.module.css";

const HomeContact = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      className={style.setBgInContact}
      sx={{
        my: { md: 10, xs: 0 },
        py: { md: 10, xs: 5 } ,
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box width={{md: "75%" , xs: "100%"}}>
          <Stack marginBottom={4}>
          <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="700" fontSize="15px">
            Get In Touch
          </Typography>
          <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="700" fontSize={{ md: "40px", xs: "25px" }}>
            Get Connected With us for any Queries
          </Typography>
          </Stack>
          <form>
            <Grid container spacing={{md: 5 , xs: 2}} sx={{ marginTop: 2 }}>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ backgroundColor: theme.palette.textColorForBgSecondary.main }} placeholder="Your Name" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ backgroundColor: theme.palette.textColorForBgSecondary.main }}
                  type="email"
                  placeholder="Enter email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ backgroundColor: theme.palette.textColorForBgSecondary.main }}
                  type="number"
                  placeholder="Enter phone number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ backgroundColor: theme.palette.textColorForBgSecondary.main }} placeholder="Subject" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ backgroundColor: theme.palette.textColorForBgSecondary.main }}
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    py: "15px",
                    transition: ".4s",
                    px: "65px",
                    zIndex: "1",
                    ":hover": {
                      backgroundColor: "#FF5A00",
                    },
                  }}
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default HomeContact;
