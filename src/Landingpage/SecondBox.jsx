import React from "react";
import { Box, Typography, Button, Stack, Grid, TextField } from "@mui/material";
import styles from "./index.module.css";
import MobileImg from "../assets/images/hexnode-latest.jpg";

const SecondBox = () => {
  return (
    <div
      style={{
        paddingTop: "10rem 0rem 8rem 0rem",
        backgroundColor: "#020919",
        marginTop: "70px",
      }}
    >
      <Grid
        container
        sx={{
          width: "87%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        spacing={8}
      >
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            backgroundColor: "#020919",
            marginTop: { xs: "60px !important", md: 0 },
          }}
          className={styles.leftContent}
        >
          <Typography className={styles.mainTitle}>
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row", lg: "row" }}
            spacing={3}
            mt={3}
          >
            <Box>
              <TextField
                placeholder="Your Work Email"
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    color: "#6c6c6c",
                    borderColor: "#fff",
                    height: "52px",
                    width: "280px",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D9DBE1",
                  },
                }}
              />
            </Box>
            <Box>
              <Button className={styles.demoBtn}>GET STARTED NOW!</Button>
            </Box>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <img src={MobileImg} alt="" width="100%" height="100%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default SecondBox;
