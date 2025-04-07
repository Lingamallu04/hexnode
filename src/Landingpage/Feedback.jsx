import { Typography, Stack, Box, Divider } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Person2 from "../assets/images/person2.png";
import Person3 from "../assets/images/person3.png";

const testimonials = [
  {
    image: Person2,
    name: "Jemie Anderson",
    designation: "CEO",
    message: "It seemed to be in-line with everything we were looking at.",
  },
  {
    image: Person3,
    name: "Kevin Peter",
    designation: "Senior Manager",
    message: "Hexnode is of great value. Works great with Android and iOS!",
  },
];

const Feedback = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        width: "87%",
        margin: "auto",
        overflow: "hidden",
        paddingBottom: "50px",
      }}
    >
      <Typography
        fontSize="40px"
        fontWeight="700"
        sx={{
          width: { xs: "100%", lg: "57%" },
          margin: "auto",
          textAlign: "center",
        }}
        pb={5}
        pt={8}
      >
        Why should you choose Hexnode?
      </Typography>

      <Box
        sx={{
          width: {xs:"100%",md:"75%"},
          margin: "auto",
          border: "1px solid transparent",
          borderRadius: "10px !important",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          "& .slick-prev": {
            left: { xs: "0px", md: "-110px !important" },
            zIndex: 1,
          },
          "& .slick-next": {
            right: { xs: "15px", md: "-80px !important" },
            zIndex: 1,
          },
          "& .slick-prev:before, & .slick-next:before": {
            fontSize: "30px",
            color: "#6c6c6c",
          },
        }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={4}
              >
                <Box>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box padding="20px 55px">
                  <Typography
                    fontSize={{ xs: "20px", md: "26px" }}
                    fontWeight="600"
                    lineHeight="1.6"
                    mb={3}
                  >
                    “{testimonial.message}”
                  </Typography>

                  <Divider sx={{ mb: 3, width: "100%" }} />

                  <Box>
                    <Typography
                      fontSize={{ xs: "18px", md: "20px" }}
                      fontWeight="700"
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      fontSize={{ xs: "16px", md: "18px" }}
                      color="text.secondary"
                    >
                      {testimonial.designation}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Feedback;
