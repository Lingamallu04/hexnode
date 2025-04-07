import React from "react";
import styles from "./index.module.css";
import { Box, Typography } from "@mui/material";
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
    <>
      <Box className={styles.mainTopBox}>
        <Navbar />
      </Box>
      <SecondBox />
      <Box sx={{ backgroundColor: "#1a1c2b" }}>
        <ThirdBox />
      </Box>
      <Box>
        <SpecificModes />
      </Box>
      <Box>
        <AdditionalPossibilities />
      </Box>
      <Box sx={{ backgroundColor: "#f7f7f7" }}>
        <Feedback />
      </Box>
      <Box sx={{ backgroundColor: "#f7f7f7" }}>
        <LogoCarousel />
      </Box>
      <Box>
        <PlotformSupport />
      </Box>
      <Box sx={{ backgroundColor: "#020919" }}>
        <SignupTrail />
      </Box>

      <Box sx={{ backgroundColor: "#f2f2f2" }}>
        <div
          style={{
            width: "87%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          <Typography fontSize="12px" color="rgb(85, 101, 117)">
            <span>Terms of Use</span>-<span>Privacy</span>-<span>Cookies</span>
          </Typography>
          <Typography fontSize="12px" color="rgb(85, 101, 117)">
            Copyright © 2025 Mitsogo Inc. All Rights Reserved.
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default LandingPage;
