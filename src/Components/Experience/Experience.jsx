import { Box, Grid, Hidden, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './ExperienceStyles'
import myImage from '../../images/35947994.jpg'
import Navbar from '../Header/Navbar'

export default function Experience() {

    const classes = useStyles()

    return (
        <Box id='experience' className={classes.section}>
            <Navbar />
            <Grid container spacing={6}>
                <Grid item sm={5}>
                    <img src={myImage} alt='My Image' className={classes.responsiveImg} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Typography variant='h4' align='left' className={classes.sectionHeading}>
                        Professional Experience...
                    </Typography>
                    <br />
                    <Typography variant='body1' component='h6' align='left' className={classes.sectionDesc}>
                        I have 3 years of experience as a software developer working at Finacus Solutions Pvt Ltd.
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
                        I am working on a core banking system, contributing to key areas such as:
                        <br />
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color: '#257180'
                            }}>React Development : </span> Developed dynamic user interfaces using react
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color: '#257180'
                            }}>Service Integration : </span> Successfully integrated multiple services,reducing data retrieval time and improving overall application.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color: '#257180'
                            }}>UI Design : </span> Utilized Material UI to create intuitive design.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color: '#257180'
                            }}>State Management : </span> Implemented redux for state management.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color: '#257180'
                            }}>Application Deployement : </span> Developed applications on production servers following security protocols.
                        </li>
                        <li>
                            <span style={{
                                fontWeight: 'bold',
                                color: '#257180'
                            }}>Product Integration : </span> Conducted integration tasks that ensured 100% compatibility between components.
                        </li>
                    </Typography>

                </Grid>
            </Grid>
        </Box>
    )
}
