import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EffortlessImage from "../assets/images/effortless-image.png";
import CustomizedImage from "../assets/images/customized-interface-image.png";
import MoreFeaturesImage from "../assets/images/power-image.png";
import SecureUpdateImage from "../assets/images/secure.png";
import styles from "./index.module.css";

const AdditionalPossibilities = () => {
  const sections = [
    {
      id: 1,
      title: "Effortless kiosk deployment & management",
      description:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      image: EffortlessImage,
    },
    {
      id: 2,
      title: "Customized interface for brand visibility",
      description:
        "Create a distinctive brand experience with customizable interfaces. Design personalized home screens, lock screens, and app layouts to enhance brand visibility and provide a cohesive user experience for your customers.",
      image: CustomizedImage,
    },
    {
      id: 3,
      title: "What more can you do with Hexnode kiosk?",
      description:
        "Extend your kiosk functionality with advanced features like remote control, screen sharing, device health monitoring, usage analytics, and content scheduling. Create an end-to-end solution tailored to your specific business needs.",
      image: MoreFeaturesImage,
    },
    {
      id: 4,
      title: "Secure and update your app ecosystem",
      description:
        "Maintain security across your kiosk fleet with automatic updates, app whitelisting, and security configurations. Keep your applications and content updated remotely without disrupting the user experience.",
      image: SecureUpdateImage,
    },
    {
      id: 5,
      title: "Customized interface for brand visibility",
      description:
        "Create a distinctive brand experience with customizable interfaces. Design personalized home screens, lock screens, and app layouts to enhance brand visibility and provide a cohesive user experience for your customers.",
      image: CustomizedImage,
    },
  ];

  const [expandedSection, setExpandedSection] = useState(1);

  const handleSectionClick = (sectionId) => {
    setExpandedSection(sectionId);
  };

  return (
    <div style={{ width: "87%", margin: "auto" }}>
      <Typography
        fontSize="40px"
        fontWeight="700"
        sx={{
          width: { xs: "100%", lg: "57%" },
          margin: "auto",
          textAlign: { xs: "start", md: "center" },
        }}
        pb={5}
        pt={8}
      >
        What additional possibilities does the Kiosk mode offer?
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <img
            src={
              sections.find((section) => section.id === expandedSection).image
            }
            alt={
              sections.find((section) => section.id === expandedSection).title
            }
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Stack>
            {sections.map((section) => (
              <Fragment key={section.id}>
                <Typography
                  fontSize="26px"
                  fontWeight="700"
                  padding="25px 0px"
                  borderBottom={
                    expandedSection !== section.id
                      ? "1px solid #f3f3f3"
                      : "none"
                  }
                  borderTop={section.id === 1 ? "none" : "1px solid #f3f3f3"}
                  onClick={() => handleSectionClick(section.id)}
                  sx={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                >
                  {section.title}
                </Typography>

                {expandedSection === section.id && (
                  <div
                    style={{
                      paddingBottom: "20px",
                      borderBottom: "1px solid #f3f3f3",
                    }}
                  >
                    <Typography
                      fontSize="18px"
                      color="#302f2a"
                      lineHeight="38px"
                      pb={2}
                    >
                      {section.description}
                    </Typography>
                    <Button
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        paddingBottom: "1rem",
                      }}
                      disableRipple
                    >
                      <span className={styles.tryBtn}>TRY FOR FREE </span>
                      <span style={{ marginLeft: "5px" }}>
                        <KeyboardArrowRightIcon
                          sx={{ paddingTop: "6px", color: "#dc0735" }}
                        />
                      </span>
                    </Button>
                  </div>
                )}
              </Fragment>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdditionalPossibilities;
