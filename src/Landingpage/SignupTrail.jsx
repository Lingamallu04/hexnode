import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./index.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SignupTrail = () => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        overflow: "hidden",
        textAlign: "center",
        padding: "4rem 0rem",
      }}
    >
      <Typography fontSize="42px" fontWeight="700" color="#fff" pb={4}>
        Sign up and try Hexnode free for 14 days!
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        mt={3}
        display="flex"
        justifyContent="center"
      >
        <TextField
          placeholder="Your Work Email"
          variant="outlined"
          sx={{
            borderRadius: "4px",
            width: {
              xs: "300px",
              md: "324px",
            },
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-root": {
              color: "#6c6c6c",
              borderColor: "#fff",
              height: "52px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D9DBE1",
            },
            "& input::placeholder": {
              fontSize: "18px",
              color: "#6c6c6c",
            },
          }}
        />

        <Button className={styles.demoBtn}>GET STARTED NOW!</Button>
      </Stack>
      <Typography
        fontSize="20px"
        color="#fff"
        mt={4}
        display="flex"
        alignItems="center"
        justifyContent={{ xs: "start", sm: "center" }}
      >
        No credit cards required.
        <span style={{ color: "#dd0638", fontSize: "22px" }}>
          Request Demo
        </span>{" "}
        <span style={{ marginLeft: "8px" }}>
          <KeyboardArrowRightIcon
            sx={{ paddingTop: "9px", color: "#dc0735" }}
          />
        </span>
      </Typography>
    </Box>
  );
};

export default SignupTrail;
