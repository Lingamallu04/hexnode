import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

const logoData = [
  {
    id: 1,
    name: "Google",
    logoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
  },
  {
    id: 2,
    name: "Amazon",
    logoUrl:
      "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
  },
  {
    id: 4,
    name: "Salesforce",
    logoUrl:
      "https://www.salesforce.com/content/dam/web/en_us/www/images/home/logo-salesforce.svg",
  },
  {
    id: 5,
    name: "Adobe",
    logoUrl:
      "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
  },
  {
    id: 6,
    name: "Facebook",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    id: 7,
    name: "Apple",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 8,
    name: "Netflix",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },
  {
    id: 10,
    name: "IBM",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 11,
    name: "Tesla",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    id: 13,
    name: "Spotify",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
  },
  {
    id: 14,
    name: "Ford",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
  },
];

const LogoCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "87%",
        margin: "auto",
        overflow: "hidden",
        textAlign: "center",
        padding:"10rem 0rem",
        
      }}
    >
      <Box mb="30px">
        <Slider {...settings}>
          {logoData.map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                filter: "grayscale(1) opacity(0.9)",
                transition: "filter 0.3s ease",
                "&:hover": {
                  filter: "grayscale(0) opacity(1)",
                },
              }}
            >
              <img
                src={logo.logoUrl}
                alt={`${logo.name} logo`}
                style={{ height: "40px", maxWidth: "100px" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default LogoCarousel;
