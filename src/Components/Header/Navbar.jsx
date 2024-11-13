import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './HeaderStyle'
import HomeIcon from '@material-ui/icons/Home';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Navbar() {

    const classes = useStyles()
    // let navigate = useNavigate();

    const navlinks = [
        { label: 'About', Id: 'about' },
        { label: 'Skills', Id: 'skills' },
        { label: 'Contact', Id: 'contact' },
        { label: 'Experience', Id: 'experience' },
        { label: 'Project', Id: 'project' },
    ]

    function navigatePage(item) {
        console.log('item', item)
    }

    function navigateToHome() {
        // console.log('called')
        // let path = "/";
        // navigate(path);
    }

    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.toolbar}>
                {/* <Typography variant="h5" component='h6'>
                    Navbar
                </Typography> */}
                <IconButton>
                    <HomeIcon onClick={navigateToHome} />
                </IconButton>

                <Box className={classes.wraplink}>
                    {navlinks.map((item, index) =>
                        <Button>
                            <Link to={item.Id} className={classes.navlinks} smooth={true} duration={500}>{item.label}</Link>
                        </Button>)}
                </Box>


            </Toolbar>
        </AppBar>
    )
}
