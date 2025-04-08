import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Fire from "../assets/images/amazon-fire.png";
import Apple from "../assets/images/apple-tv.svg";
import Android from "../assets/images/android.svg";
import Ios from "../assets/images/ios.svg";
import Windows from "../assets/images/windows.svg";
import Samsung from "../assets/images/android-tv.svg";

const platformImages = [
  { src: Apple, alt: "Apple TV" },
  { src: Android, alt: "Android" },
  { src: Fire, alt: "Amazon Fire" },
  { src: Ios, alt: "IOS" },
  { src: Windows, alt: "Windows" },
  { src: Samsung, alt: "Samsung" },
];

const PlotformSupport = () => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        overflow: "hidden",
        textAlign: "center",
        padding: "6rem 0rem",
      }}
    >
      <Typography fontSize="40px" fontWeight="700" pb={6}>
        Platforms supported
      </Typography>
      <Grid container spacing={1}>
        {platformImages.map((item, index) => (
          <Grid size={{ xs: 6, md: 2 }}>
            <Box
              key={index}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlotformSupport;
