import React from "react";
import styles from "./index.module.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import SecondBox from "./SecondBox";
import Navbar from "./ResponsiveNavbar";
import ThirdBox from "./ThirdBox";
import AdditionalPossibilities from "./AdditionalPossibilities";
import Feedback from "./Feedback";
import LogoCarousel from "./TrustedCompanies";
import PlotformSupport from "./PlotformSupport";
import SignupTrail from "./SignupTrail";
import SpecificModes from "./SpecificModes";

const LandingPage = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        display: "flex",
        justifyContent: {
          xs: "flex-start",
          lg: "center",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: {
            xs: "100%",
            md: "95%",
            lg: "90%",
            xl: "1700px",
          },
        }}
      >
        <Box sx={{ width: "100%", margin: "auto" }}>
          <Navbar />
        </Box>
        <SecondBox />
        <Box
          sx={{
            backgroundColor: "#1a1c2b",
          }}
        >
          <ThirdBox />
        </Box>
        <Box
          sx={{
            backgroundColor: "#f7f7f7",
          }}
        >
          <SpecificModes />
        </Box>
        <Box
          sx={{
            paddingBottom: "3rem",
          }}
        >
          <AdditionalPossibilities />
        </Box>

        <Box sx={{ backgroundColor: "#f7f7f7" }}>
          <Feedback />
        </Box>
        <Box
          sx={{
            backgroundColor: "#f7f7f7",
          }}
        >
          <LogoCarousel />
        </Box>
        <PlotformSupport />
        <Box sx={{ backgroundColor: "#020919" }}>
          <SignupTrail />
        </Box>
        <Box sx={{ backgroundColor: "#f2f2f2" }}>
          <Box
            sx={{
              width: "90%",
              margin: "auto",
              padding: "30px 0px",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontSize="12px" color="rgb(85, 101, 117)">
                <span>Terms of Use</span>-<span>Privacy</span>-
                <span>Cookies</span>
              </Typography>
              <Typography fontSize="12px" color="rgb(85, 101, 117)">
                Copyright © 2025 Mitsogo Inc. All Rights Reserved.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
