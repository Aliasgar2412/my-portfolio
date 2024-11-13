import { Box, Button, makeStyles, Modal, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from './HeaderStyle'
import Navbar from './Navbar'
import About from '../About/About'
import Footer from '../Footer/Footer'
import BubbleEffect from '../Bubble/BubbleEffect'


export default function Header() {

    const [openModal, setopenModal] = useState(false)
    const classes = useStyles()

    function downloadResume() {
        // setopenModal(true)
        const link = document.createElement('a');
        link.href = '/AliUpdatedResume.pdf';  // Adjust the path if necessary
        link.download = 'AliUpdatedResume.pdf'; // Specify the download file name
        link.click();
    }


    return (
        <div id='home' style={{ height: '100vh' }}>
            <BubbleEffect />
            <Box className={classes.HeaderWrapper}>
                <Navbar />
                <Box className={classes.HeaderContainer}>
                    <Typography variant='h6' component='h6' className={classes.headerHello}>
                        Hello 👋, I'm
                    </Typography>
                    <Typography variant='h1' component='h4' className={classes.headerTitle}>
                        Aliasgar Shaikh
                    </Typography>
                    <Typography variant='h4' component='h6' className={classes.headerDesc}>
                        Software Developer
                    </Typography>
                    <Typography variant='h6' component='h6' className={classes.headerDescTwo}>
                        3 Years of Experience
                    </Typography>

                    <Button variant="contained" className={classes.buttonDesc} onClick={downloadResume}>
                        Resume Download
                    </Button>

                </Box>

            </Box>
            <Footer />
        </div>
    )
}
