import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./AboutStyles";
import myImage from "../../images/profile-pic.png";

export default function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <Box className={classes.section}>
        <Grid container spacing={3} className={classes.gridContainer}>
          {/* Profile Image */}
          <Grid item xs={12} sm={4} md={3} className={classes.imageWrapper}>
            <img
              src={myImage}
              alt="My Image"
              className={classes.responsiveImg}
            />
          </Grid>
          {/* About */}
          <Grid item xs={12} sm={8} md={9}>
            <Typography
              variant="h3"
              align="left"
              className={classes.sectionHeading}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              align="left"
              className={classes.sectionDesc}
            >
              I'm Aliasgar Shaikh, a software developer with over 3 years of
              experience in the IT field. I am currently working as a junior
              software developer at Finacus Solutions. I have a Master's in
              Information Technology (MSC-IT). I'm a quick learner and always
              strive to deliver quality work. I'm passionate about exploring new
              technologies and continually learning.
            </Typography>

            <Typography variant="h5" className={classes.subHeading}>
              Location:
            </Typography>
            <ul className={classes.list}>
              <li>
                <span className={classes.boldText}>Mumbai</span>
              </li>
              <li>
                <span className={classes.boldText}>Maharashtra</span>
              </li>
              <li>
                <span className={classes.boldText}>India</span>
              </li>
            </ul>

            <Typography variant="h5" className={classes.subHeading}>
              Languages:
            </Typography>
            <ul className={classes.list}>
              <li>
                <span className={classes.boldText}>English</span>
              </li>
              <li>
                <span className={classes.boldText}>Hindi</span>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
