import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Idc from "../assets/images/idc.png";
import Gart from "../assets/images/gartner.png";
import Forrester from "../assets/images/forrester.png";
import styles from "./index.module.css";

const ThirdBox = () => {
  return (
    <div className={styles.thirdBox}>
      <Grid
        container
        sx={{
          padding: "30px 0px",
          width: { xs: "87%", lg: "80%", xl: "65%", xxl: "50%" },
          margin: "auto",
        }}
        spacing={{ xs: 3, md: 1 }}
      >
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
          padding="0px 50px"
          borderRight="1px solid #474958"
        >
          <Stack spacing={3} maxWidth="340px">
            <span>
              <img src={Idc} alt="" />
            </span>
            <Typography className={styles.subTitleThird}>
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
          padding="0px 50px"
          borderRight="1px solid #474958"
        >
          <Stack spacing={3} maxWidth="340px">
            <span>
              <img src={Gart} alt="" />
            </span>
            <Typography className={styles.subTitleThird}>
              Hexnode was recognized in the 2025 Gartner® Market Guide for
              Unified Endpoint Management Tools.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }} padding="0px 50px">
          <Stack spacing={3} maxWidth="340px">
            <span>
              <img src={Forrester} alt="" width="185px" height="28px" />
            </span>
            <Typography className={styles.subTitleThird}>
              Forrester includes Hexnode as a Notable vendor in The Unified
              Endpoint Management Landscape, Q3 2023.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default ThirdBox;
