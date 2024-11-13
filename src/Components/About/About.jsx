import { Box, Grid, Hidden, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useStyles } from './AboutStyles'
import myImage from '../../images/profile-pic.png'
import Navbar from '../Header/Navbar'
import { useLocation } from 'react-router-dom'

export default function About() {

    const classes = useStyles()
    // const location = useLocation();

    // useEffect(() => {
    //     if (location.hash) {
    //         const element = document.querySelector(location.hash);
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     }
    // }, [location]);

    return (
        <div id='about' style={{ height: '100vh' }}>
            <Box className={classes.section}>
                <Navbar />
                <Grid container spacing={6}>
                    <Grid item sm={3}>
                        <img src={myImage} alt='My Image' className={classes.responsiveImg} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography variant='h4' align='left' className={classes.sectionHeading}>
                            About...
                        </Typography>
                        <br />
                        <Typography variant='body1' component='h6' align='left' className={classes.sectionDesc}>
                            I'm Aliasgar Shaikh, a software developer with over 3 Years of experience in the IT field. I have been working as a junior software developer at Finacus Solutions. My highest education is Master's in Information Technology (MSC-IT). I'm a quick learner and I love to explore new technologies. I have an eye for detail and I strive to deliver quality work. I'm a passionate coder who is always looking for opportunities to learn and grow.
                        </Typography>

                        <br />
                        <hr />
                        <br />

                        <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                            Location :
                        </Typography>
                        <br />
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color:'black'
                            }}>Mumbai </span>
                        </li>
                        <br />
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color:'black'
                            }}>Maharashtra </span>
                        </li>
                        <br />
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color:'black'
                            }}>India </span>
                        </li>
                        <br />
                        <hr />
                        <br />

                        <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                            Languages :
                        </Typography>
                        <br />
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color:'black'
                            }}>English </span>
                        </li>
                        <br />
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color:'black'
                            }}>Hindi </span>
                        </li>
                        <br />
                        <hr />
                        <br />

                        {/* <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                        Professional Experience :
                    </Typography>
                    <br />
                    <Typography variant='body1' component='h6' align='left' className={classes.educationDet}>
                        Finacus Solutions Pvt Ltd
                        <span style={{
                            float: 'right',
                            marginRight: '10px'
                        }}>
                            2021-Present
                        </span>
                    </Typography>
                    <Typography variant='body1' component='h6' align='left' className={classes.educationDet}>
                        I have 3 years of experience working on a core banking system, contributing to key areas such as:
                        <br />
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                            }}>React Development : </span> Developed dynamic user interfaces using react
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                            }}>Service Integration : </span> Successfully integrated multiple services,reducing data retrieval time and improving overall application.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                            }}>UI Design : </span> Utilized Material UI to create intuitive design.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                            }}>State Management : </span> Implemented redux for state management.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                            }}>Application Deployement : </span> Developed applications on production servers following security protocols.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                            }}>Product Integration : </span> Conducted integration tasks that ensured 100% compatibility between components.
                        </li>
                    </Typography> */}

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
