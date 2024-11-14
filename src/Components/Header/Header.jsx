import { Box, Button, makeStyles, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./HeaderStyle";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import BubbleEffect from "../Bubble/BubbleEffect";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  // Download Resume function
  function downloadResume() {
    const link = document.createElement("a");
    link.href = "/AliUpdatedResume.pdf";
    link.download = "AliUpdatedResume.pdf";
    link.click();
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div id="home" style={{ height: "100vh" }}>
      <BubbleEffect />
      <Box className={classes.HeaderWrapper}>
        <Navbar />
        <Box className={classes.HeaderContainer}>
          <Typography
            variant="h6"
            component="h6"
            className={classes.headerHello}
          >
            Hello 👋, I'm
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            className={classes.headerTitle}
          >
            Aliasgar Shaikh
          </Typography>

          <Typography
            variant="h4"
            component="h6"
            className={classes.headerDesc}
          >
            Software Developer
          </Typography>

          <Typography
            variant="h6"
            component="h6"
            className={classes.headerDescTwo}
          >
            3 Years of Experience
          </Typography>

          <Button
            variant="contained"
            className={classes.buttonDesc}
            onClick={downloadResume}
          >
            Resume Download
          </Button>
        </Box>
      </Box>

      {/* Modal for download confirmation */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className={classes.modal}
      >
        <Box className={classes.modalContent}>
          <Typography variant="h6" className={classes.modalTitle}>
            Resume Downloading...
          </Typography>
          <Typography variant="body1" className={classes.modalBody}>
            Your resume is now downloading. Thank you for your interest!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
            className={classes.modalButton}
          >
            Close
          </Button>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
}
