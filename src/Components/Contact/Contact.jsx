import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from '../About/AboutStyles'
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';  // Import the emailjs-com package

export default function Contact() {

    const classes = useStyles()
    const [firstName, setFirstName] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')

    const firstName_ref = useRef(null)

    function onSubmit() {
        if (firstName === "") {
            Swal.fire({
                title: "Error.",
                text: "Name cannot be empty!",
                icon: 'error',
            }).then(() => {
                firstName_ref.current?.focus();
            })
            return;
        }
        else if (email === "") {
            Swal.fire({
                title: "Error.",
                text: "Email cannot be empty!",
                icon: 'error',
            });
            return;
        }
        else if (message === "") {
            Swal.fire({
                title: "Error.",
                text: "Message cannot be empty!",
                icon: 'error',
            });
            return;
        }

        // Using EmailJS to send the email
        const templateParams = {
            from_name: firstName,
            from_email: email,
            message: message,
        };

        emailjs.send(
            'service_oln9kn6', // Replace with your service ID
            'template_c3jggzf', // Replace with your template ID
            templateParams,
            '2JGfmCk3gjWShSjxj' // Replace with your user ID from EmailJS
        )
            .then((response) => {
                Swal.fire({
                    title: "Success!",
                    text: "Your response has been submitted.",
                    icon: 'success',
                }).then(() => {
                    setFirstName('');
                    setemail('');
                    setmessage('');
                });
            }, (err) => {
                Swal.fire({
                    title: "Error.",
                    text: "Something went wrong while sending your message.",
                    icon: 'error',
                });
            });
    }

    function openGit() {
        window.open("https://github.com/Aliasgar2412", '_blank');
    }

    return (
        <Box className={classes.section} id='contact'>
            <Typography variant='h4' align='center' className={classes.sectionHeading}>
                Contact Me
            </Typography>
            <hr />
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <div style={{ marginLeft: "1.2rem" }}>
                        <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                            Email ID <EmailIcon />
                        </Typography>
                        <Typography variant='body1' component='h6' align='left' className={classes.educationDet}>
                            skaliasgar2412@gmail.com
                            <br />
                            skaliasgar2412@icloud.com
                        </Typography>
                        <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                            Mobile Number <PhoneAndroidIcon />
                        </Typography>
                        <Typography variant='body1' component='h6' align='left' className={classes.educationDet}>
                            9820716710
                        </Typography>
                        <Typography variant='h5' component='h6' align='left' className={classes.headingDesc}>
                            GitHub <GitHubIcon />
                        </Typography>
                        <Typography variant='body1' component='h6' align='left' className={classes.educationDet}>
                            <Link onClick={() => openGit()}>
                                https://github.com/Aliasgar2412
                            </Link>
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <Paper variant="outlined" style={{ width: '95%', paddingLeft: '10px' }} square>
                        <Typography variant='h5' component='h6' align='left' className={classes.formLabel}>
                            Your Name
                        </Typography>
                        <TextField innerRef={firstName_ref} value={firstName} onChange={(e) => setFirstName(e.target.value)} id="outlined-basic" variant="outlined" style={{ width: '90%' }} />
                        <Typography variant='h5' component='h6' align='left' className={classes.formLabel}>
                            Your Email
                        </Typography>
                        <TextField value={email} onChange={(e) => setemail(e.target.value)} id="outlined-basic" variant="outlined" style={{ width: '90%' }} />
                        <Typography variant='h5' component='h6' align='left' className={classes.formLabel}>
                            Message
                        </Typography>
                        <TextField value={message} onChange={(e) => setmessage(e.target.value)} id="outlined-basic" variant="outlined" multiline rows={4} style={{ width: '90%' }} />
                        <Button variant="outlined" color="primary" onClick={onSubmit} style={{ marginTop: '5px', marginBottom: '5px' }}>
                            Submit
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
