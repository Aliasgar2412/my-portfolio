import { makeStyles } from "@material-ui/core";
import React from "react";
import { Theme } from "../Theme";
import Image from '../../images/21026081.jpg'


export const useStyles = makeStyles(() => ({
    HeaderWrapper: {
        width: '100%',
        minHeight: "100vh",
        height: 'auto',
        // backgroundColor:Theme.colors.base1,
        background: `linear-gradient(to bottom right,#04303140,#00606473),url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    HeaderContainer: {
        width: '85%',
        minHeight: "90vh",
        height: 'auto',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'left',
        justifyContent: 'center',
        padding: '20px',
        gap: '8px',
    },
    headerHello: {
        color: 'white',
        fontSize: "1.5rem"
    },
    headerTitle: {
        color: 'white',
        fontSize: '3.5rem',
        // textAlign: 'left'
    },
    headerDesc: {
        // color: 'white',
        color: '#71a337',
        fontSize: '1.5rem',
    },
    headerDescTwo: {
        color: 'white',
        fontSize: '1rem',
    },
    buttonDesc: {
        color: 'white',
        fontSize: '1.5rem',
        backgroundColor: '#71a337',
        width: '30%'
    },
    navbar: {
        backgroundColor: `${Theme.colors.base1} !important`,
        color: `${Theme.colors.base2} !important`,
    },
    toolbar: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    },
    navlinks: {
        color: '#0f7698',
        textDecoration: 'none',
    },
    paper: {
        position: 'absolute',
        width: 400,
        // backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        // boxShadow: Theme.shadows[5],
        // padding: Theme.spacing(2, 4, 3),
    },
    // wraplink: {
    //     display: 'flex',
    //     justifyContent: 'space-around',
    //     width: '12.5rem',
    // },

}))
