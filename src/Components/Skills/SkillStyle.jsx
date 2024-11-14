import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";


export const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: `${Theme.colors.base1} !important`,
        padding: theme.spacing(10, 0, 8, 0)
    },
    divider: {
        width: '65px',
        height: '4px',
        backgroundColor: Theme.colors.primary
    },
    responsiveImg: {
        width: '100%',
        height: 'auto'
    },
    sectionHeading: {
        fontSize: '3rem',
        color: '#257180',
        fontWeight: 'bold'
    },
    sectionDesc: {
        fontSize: '1.5rem',
        color: 'black',
        fontFamily: 'Times New Roman'
    },
    headingDesc: {
        fontSize: '2rem',
        color: '#257180',
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    educationDet: {
        fontSize: '1.5rem',
        color: 'black',
        // fontWeight:'bold',
        // textDecoration:'underline'
    }
}))