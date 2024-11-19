import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./ExperienceStyles";
import myImage from "../../images/cropimage.jpg";
import Navbar from "../Header/Navbar";

export default function Experience() {
  const classes = useStyles();

  return (
    <Box id="experience" className={classes.section}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {" "}
          {/* Added spacing here */}
          {/* Image Section */}
          <Grid
            item
            xs={12}
            sm={5}
            container
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={myImage}
              alt="My Image"
              className={classes.responsiveImg}
            />
          </Grid>
          {/* Text Section */}
          <Grid item xs={12} sm={7}>
            <Typography
              variant="h4"
              align="left"
              className={classes.sectionHeading}
            >
              Professional Experience...
            </Typography>
            <Typography
              variant="body1"
              component="h6"
              align="left"
              className={classes.sectionDesc}
            >
              I have 3 years of experience as a software developer currently working at
              Finacus Solutions Pvt Ltd starting from Nov 2021.
            </Typography>
            {/* <div style={{
              display:'flex',
              justifyContent:'space-between'
            }}>
              <Typography
                variant="body1"
                component="h6"
                align="left"
                className={classes.educationDet}
              >
                Finacus Solutions Pvt Ltd
              </Typography>
              <Typography
                variant="body1"
                component="h6"
                align="right"
                className={classes.educationDet}
              >
                2021-Present
              </Typography>
            </div> */}
            <Typography
              variant="body1"
              component="h6"
              align="left"
              className={classes.educationDet}
            >
              I am working on a core banking system, contributing to key areas
              such as:
              <ul className={classes.ul}>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#257180",
                    }}
                  >
                    React Development :{" "}
                  </span>{" "}
                  Developed dynamic user interfaces using React.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#257180",
                    }}
                  >
                    Service Integration :{" "}
                  </span>{" "}
                  Successfully integrated multiple services, reducing data
                  retrieval time and improving overall application performance.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#257180",
                    }}
                  >
                    UI Design :{" "}
                  </span>{" "}
                  Utilized Material UI to create an intuitive design.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#257180",
                    }}
                  >
                    State Management :{" "}
                  </span>{" "}
                  Implemented Redux for state management.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#257180",
                    }}
                  >
                    Application Deployment :{" "}
                  </span>{" "}
                  Developed applications on production servers following
                  security protocols.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#257180",
                    }}
                  >
                    Product Integration :{" "}
                  </span>{" "}
                  Conducted integration tasks that ensured 100% compatibility
                  between components.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
