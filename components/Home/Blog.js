import { Avatar, Box, Container, Grid, Link, Typography, useTheme } from "@mui/material";

const HomeBlog = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ my: { md: 10 , xs: 0 } }}>
      <Typography textAlign="center" color={theme.palette.secondary.main} fontWeight="700" fontSize="15px">
        Latest Top Articles
      </Typography>
      <Typography textAlign="center" color={theme.palette.primary.main} fontWeight="700" fontSize={{ md: "40px", xs: "25px" }}>
        Articles Written by Our Team Members
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: { md: 5, xs: 0 } }}>
        <Grid item lg={4} xs={12}>
          <Box
            sx={{
              backgroundImage: `url('https://i.ibb.co/hHBqL3k/redux-blog.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "all 0.3s ease-in-out",
              borderRadius: 5,
              position: "relative",
              padding: 20,
              ":before": {
                content: `""`,
                display: "block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: "inherit",
              },
              ":hover": {
                transition: "all 0.3s ease-in-out",
                transform: `translateY(-5px)`,
                boxShadow: 5,
              },
            }}
          >
            <Link href="https://checkiamsiam.web.app/" target="_blank">
              <Avatar
                src="https://i.ibb.co/q5krwXx/professional-siam.jpg"
                alt="author avatar"
                sx={{ position: "absolute", top: "20px", left: "20px" }}
              />
            </Link>

            <Box sx={{ position: "absolute", top: "40%", left: "20px" }}>
              <Box>
                <Typography variant="caption" sx={{ color: theme.palette.textColorForBgSecondary.main }}>
                  Aug 3, 2022
                </Typography>

                <Typography variant="h5">
                  <Link
                    href="https://medium.com/@checkiamsiam/guideline-for-newly-redux-learner-49c6669213a5"
                    target="_blank"
                    underline="hover"
                    sx={{ color: theme.palette.textColorForBgSecondary.main }}
                  >
                    Guideline For Newly Redux Learner
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box
            sx={{
              backgroundImage: `url('https://i.ibb.co/hHBqL3k/redux-blog.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "all 0.3s ease-in-out",
              borderRadius: 5,
              position: "relative",
              padding: 20,
              ":before": {
                content: `""`,
                display: "block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: "inherit",
              },
              ":hover": {
                transition: "all 0.3s ease-in-out",
                transform: `translateY(-5px)`,
                boxShadow: 5,
              },
            }}
          >
            <Link href="https://checkiamsiam.web.app/" target="_blank">
              <Avatar
                src="https://i.ibb.co/q5krwXx/professional-siam.jpg"
                alt="author avatar"
                sx={{ position: "absolute", top: "20px", left: "20px" }}
              />
            </Link>

            <Box sx={{ position: "absolute", top: "40%", left: "20px" }}>
              <Box>
                <Typography variant="caption" sx={{ color: theme.palette.textColorForBgSecondary.main }}>
                  Aug 3, 2022
                </Typography>

                <Typography variant="h5">
                  <Link
                    href="https://medium.com/@checkiamsiam/guideline-for-newly-redux-learner-49c6669213a5"
                    target="_blank"
                    underline="hover"
                    sx={{ color: theme.palette.textColorForBgSecondary.main }}
                  >
                    Guideline For Newly Redux Learner
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box
            sx={{
              backgroundImage: `url('https://i.ibb.co/hHBqL3k/redux-blog.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "all 0.3s ease-in-out",
              borderRadius: 5,
              position: "relative",
              padding: 20,
              ":before": {
                content: `""`,
                display: "block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: "inherit",
              },
              ":hover": {
                transition: "all 0.3s ease-in-out",
                transform: `translateY(-5px)`,
                boxShadow: 5,
              },
            }}
          >
            <Link href="https://checkiamsiam.web.app/" target="_blank">
              <Avatar
                src="https://i.ibb.co/q5krwXx/professional-siam.jpg"
                alt="author avatar"
                sx={{ position: "absolute", top: "20px", left: "20px" }}
              />
            </Link>

            <Box sx={{ position: "absolute", top: "40%", left: "20px" }}>
              <Box>
                <Typography variant="caption" sx={{ color: theme.palette.textColorForBgSecondary.main }}>
                  Aug 3, 2022
                </Typography>

                <Typography variant="h5">
                  <Link
                    href="https://medium.com/@checkiamsiam/guideline-for-newly-redux-learner-49c6669213a5"
                    target="_blank"
                    underline="hover"
                    sx={{ color: theme.palette.textColorForBgSecondary.main }}
                  >
                    Guideline For Newly Redux Learner
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBlog;
