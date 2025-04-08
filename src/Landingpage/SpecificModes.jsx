import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Single from "../assets/images/single-app-kios-image.png";
import Multi from "../assets/images/multi-app-kiosk-image.png";
import Web from "../assets/images/web-based-kiosk-image.png";
import Digital from "../assets/images/digital-signage-kiosk-image.png";
import Asam from "../assets/images/asam-kiosk-image.png";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return value === index && <Box>{children}</Box>;
};

const tabsData = [
  {
    label: "Single App Kiosk",
    title: "Powerful Single-App Kiosk solutions for enhanced control",
    image: Single,
    features: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use Hexnode's Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices.",
    ],
  },
  {
    label: "Multi App Kiosk",
    title: "Versatile Multi-App Kiosk for diverse business needs",
    image: Multi,
    features: [
      "Configure multiple applications to run in kiosk mode on a single device.",
      "Allow users to switch between approved applications as needed.",
      "Maintain security by restricting access to only authorized applications.",
      "Perfect for environments requiring multiple functionalities from a single device.",
    ],
  },
  {
    label: "Web-based Kiosk",
    title: "Streamlined Web-based Kiosk for online interactions",
    image: Web,
    features: [
      "Transform devices into dedicated web browsers with access to specific URLs only.",
      "Create a seamless online experience with customizable browser settings.",
      "Implement website whitelisting for enhanced security.",
      "Ideal for information portals, online catalogs, and public internet access points.",
    ],
  },
  {
    label: "ASAM Kiosk",
    title: "Advanced Single App Mode Kiosk for iOS devices",
    image: Asam,
    features: [
      "Lock iOS devices to a single application with Apple's ASAM technology.",
      "Deploy enterprise applications in a controlled environment.",
      "Utilize Apple's native kiosk technology for optimal performance.",
      "Perfect for iOS-centric deployments requiring application focus.",
    ],
  },
  {
    label: "Digital signages",
    title: "Dynamic Digital Signage solutions for impactful communication",
    image: Digital,
    features: [
      "Convert any device into a digital signage display for information broadcasting.",
      "Schedule content rotation and updates remotely.",
      "Deliver dynamic content including images, videos, and web content.",
      "Ideal for lobbies, waiting areas, retail spaces, and public information displays.",
    ],
  },
];

const SpecificModes = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChangeTab = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        textAlign: "center",
        padding: "5rem 0rem",
      }}
    >
      <Typography
        fontSize="36px"
        fontWeight="700"
        mb={5}
        lineHeight="45px"
        letterSpacing="normal"
      >
        Specific kiosk modes for unique use cases
      </Typography>
      <Tabs
        onChange={handleChangeTab}
        value={activeTab}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          "& .MuiTabs-flexContainer": {
            width: "100%",
            display: "flex",
          },
          "& .MuiButtonBase-root": {
            flex: 1,
            fontSize: "22px",
            padding: "26px 0px",
            color: "rgba(2, 10, 25, 0.5)",
            textTransform: "capitalize !important",
            minWidth: "200px",
            border: "1px solid rgb(229, 231, 235)",
            transition: "all 1s ease-in-out",
            position: "relative",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "transparent",
          },
          "& .Mui-selected": {
            color: "#fff !important",
            fontWeight: "600 !important",
            backgroundColor: "#000",
            transition: "all 1s ease-in-out",
          },
        }}
      >
        {tabsData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {tabsData.map((tab, index) => (
        <TabPanel key={index} value={activeTab} index={index}>
          <Box sx={{ backgroundColor: "#f7f7f7", padding: "40px" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }} textAlign="left">
                <Typography
                  fontSize="26px"
                  fontWeight="700"
                  pb={4}
                  fontStyle="normal"
                  letterSpacing="0"
                >
                  {tab.title}
                </Typography>
                <Stack spacing={3}>
                  {tab.features.map((feature, idx) => (
                    <>
                      <Stack direction="row" spacing={2}>
                        <CheckIcon sx={{ color: "green" }} />
                        <Typography
                          key={idx}
                          fontSize="18px"
                          fontWeight="400"
                          color="rgb(51, 51, 51)"
                        >
                          {feature}
                        </Typography>
                      </Stack>
                    </>
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
                <img
                  src={tab.image}
                  alt={tab.label}
                  style={{ maxWidth: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
      ))}
    </div>
  );
};

export default SpecificModes;
