import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  IconButton,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./index.module.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const mobileMenuDrawer = (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ p: 2 }}>
        {/* <BlackLogo /> */}
        hexnode
      </Box>
      <Box>
        <Button className={styles.freeTrailBtn}>14 DAY FREE TRAIL</Button>
      </Box>
    </Box>
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = isScrolled || isHovered ? "#fff" : "#000";
  const textColor = isScrolled || isHovered ? "#000" : "#fff";
  return (
    <Box
      className={styles.topNav}
      position="fixed"
      zIndex={9999}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        top: 0,
        width: "100%",
        transition: "background-color 0.3s ease, color 0.3s ease",
        backgroundColor,
        boxShadow:
          isScrolled || isHovered ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Grid
        container
        sx={{
          display: { xs: "none", lg: "flex" },
          width: "87%",
          margin: "auto",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" sx={{ color: textColor }}>
          hexnode
        </Typography>

        <Button className={styles.freeTrailBtn}>14 DAY FREE TRAIL</Button>
      </Grid>
      <Grid
        container
        sx={{
          display: { xs: "flex", lg: "none", width: "87%", margin: "auto" },
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" sx={{ color: textColor }}>
          hexnode
        </Typography>

        <Grid item>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: textColor }} />
          </IconButton>
        </Grid>
      </Grid>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {mobileMenuDrawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
