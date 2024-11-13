import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from '../About/AboutStyles'
import myImage from '../../images/contactimage.jpg'
import Navbar from "../Header/Navbar";
import { useRef, useState } from "react";
import Swal from "sweetalert2";


export default function Contact() {

    const classes = useStyles()
    const [firstName, setFirstName] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')

    const firstName_ref = useRef(null)

    function onSubmit() {
        console.log('firstName_ref', firstName_ref)
        // if (firstName === "") {
        //     Swal.fire({
        //         title: "Error.",
        //         text: "Name cannot be empty!",
        //         icon:'error',
        //     }).then((event) => {
        //         // if (event.isConfirmed) {
        //             // setTimeout(() => {
        //             //     firstName_ref.current.focus()    
        //             // }, 800);
        //             requestAnimationFrame(() => {
        //                 firstName_ref.current?.focus();
        //             });
        //         // }
        //     })
        //     return
        // }
        // else if (email === "") {
        //     Swal.fire({
        //         title: "Email cannot be empty.",
        //     })
        //     return
        // }
        // else if (message === "") {
        //     Swal.fire({
        //         title: "Message cannot be empty.",
        //     })
        //     return
        // }
        // else{
        Swal.fire({
            title: "Success.",
            icon: 'success',
            text: "Your Response has been submitted.",
        }).then((event) => {
            if (event.isConfirmed) {
                setFirstName('')
                setemail('')
                setmessage('')
            }
        })
        return
        // }
    }

    return (
        <Box className={classes.section} id='contact'>
            <Navbar />
            <Typography variant='h4' align='center' className={classes.sectionHeading}>
                Contact Me
            </Typography>
            <br />
            <hr />
            <br />
            <Grid container spacing={3}>

                <Grid item sm={6}>
                    <div style={{ marginLeft: "1.2rem" }}>
                        <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                            Email ID :
                        </Typography>
                        <br />
                        <Typography variant='body1' component='h6' align='left' className={classes.educationDet}>
                            skaliasgar2412@gmail.com
                            <br />
                            skaliasgar2412@icloud.com
                        </Typography>
                        <br />
                        <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                            Mobile Number :
                        </Typography>
                        <br />
                        <Typography variant='body1' component='h6' align='left' className={classes.educationDet}>
                            9820716710
                        </Typography>
                        <br />
                    </div>
                </Grid>

                <Grid item xs={6} sm={6}>
                    <Paper variant="outlined" style={{ width: '95%', paddingLeft: '10px' }} square>
                        <div>
                            <Typography variant='h5' component='h6' align='left' className={classes.formLabel}>
                                Your Name
                            </Typography>
                        </div>
                        <div>
                            <TextField innerRef={firstName_ref} value={firstName} onChange={(e) => setFirstName(e.target.value)} id="outlined-basic" variant="outlined" style={{
                                width: '90%'
                            }} />
                        </div>
                        <div>
                            <Typography variant='h5' component='h6' align='left' className={classes.formLabel}>
                                Your Email
                            </Typography>
                        </div>
                        <div>
                            <TextField value={email} onChange={(e) => setemail(e.target.value)} id="outlined-basic" variant="outlined" style={{
                                width: '90%'
                            }} />
                        </div>
                        <div>
                            <Typography variant='h5' component='h6' align='left' className={classes.formLabel}>
                                Message
                            </Typography>
                        </div>
                        <div>
                            <TextField value={message} onChange={(e) => setmessage(e.target.value)} id="outlined-basic" variant="outlined" multiline rows={4} style={{
                                width: '90%'
                            }} />
                        </div>
                        <div style={{
                            marginTop: '5px',
                            marginBottom: '5px',
                        }}>
                            <Button variant="outlined" color="primary" onClick={onSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    )
}