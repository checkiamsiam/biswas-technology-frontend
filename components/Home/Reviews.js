"use client";
import React from "react";
import { Box,  Container, Rating, Stack, Typography, useTheme } from "@mui/material";
import style from "../../styles/home.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Carousel from "react-material-ui-carousel";

const Reviews = () => {
  const theme = useTheme();
  var items = [
    {
      name: "Siam Ahemd"
    },
    {
      name: "Angelina Angel"
    },
  ];
  return (
    <Container
      maxWidth="xl"
      className={style.setBgInReview}
      sx={{
        my: { md: 10, xs: 5 },
        py: { md: 10, xs: 5 },
      }}
    >
      <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="700" fontSize="15px">
        Honest Reviews
      </Typography>
      <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="700" fontSize={{ md: "40px", xs: "25px" }}>
        See What Our Clients Says
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
        <Carousel
          sx={{ width: {lg:"75%" , md: "90%" , xs: "100%"} }}
          NextIcon={<KeyboardDoubleArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: "30px" }} />}
          PrevIcon={<KeyboardDoubleArrowLeftIcon sx={{ color: theme.palette.secondary.main, fontSize: "30px" }} />}
        >
          {items.map((item, i) => (
            <SliderItem key={i} name={item}/>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
};

export default Reviews;

function SliderItem({name}) {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: "400px", px: {md: 12 , xs: 0}, py: {md: 6 , xs: 3}}}>
      <Stack direction="row" justifyContent="center">
        <ReviewsIcon sx={{ fontSize: "100px", color: theme.palette.secondary.main }} />
      </Stack>
      <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="500" fontSize="20px" marginTop={{md: 2 , xs: 1}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio excepturi atque consectetur accusantium ipsum explicabo repellendus ipsa
        assumenda quibusdam, voluptatibus odio laborum eaque nemo. Tempora!
      </Typography>
      <Stack direction="row" justifyContent="center" marginTop={{md: 2 , xs: 1}}>
        <Rating name="read-only" value={5} readOnly sx={{ color: theme.palette.secondary.main }} />
      </Stack>
      <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="700" fontSize="25px" marginTop={{md: 2 , xs: 1}}>
        {name.name}
      </Typography>
      <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.lightWhite} fontWeight="700" fontSize="15px">
        Jatrabari , Dhaka
      </Typography>
    </Box>
  );
}
