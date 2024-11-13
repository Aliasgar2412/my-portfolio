import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { projectStyles } from './ProjectStyles';
import Navbar from '../Header/Navbar';
import timeClockCalc from '../../images/time-clock-calculator-hero.webp';
import vectorAccordion from '../../images/vectorAccordion.jpg';
import zurico from '../../images/zurico.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Project() {
    const classes = useStyles();
    const proClasses = projectStyles();

    const projectLinks = [
        {
            label: 'Time Calculator',
            Id: 'timecalc',
            image: timeClockCalc,
            description: 'Calculate the difference of entered and exit time.',
            url: 'https://gotimesa.netlify.app',
        },
        {
            label: 'Accordion',
            Id: 'accordion',
            image: vectorAccordion,
            description: 'List of inputs and allowing to edit.',
            url: 'https://accordion.netlify.app',
        },
        {
            label: 'Zurico',
            Id: 'zurico',
            image: zurico,
            description: 'Shortcut code using Editor.',
            url: 'https://zurico.netlify.app',
        },
    ];


    function gotoProject(item) {
        window.open(item.url, '_blank');
    }

    function openModalForPro(item) {
        console.log(item, 'itme');
    }

    return (
        <div id="project" className={proClasses.cardWrapper}>
            <Navbar />
            {projectLinks.map((item, index) => (
                <Card className={classes.root} style={{ width: '100%' }} key={index}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Projects Images Missing"
                            height="140"
                            image={item.image}
                            title=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.label}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => gotoProject(item)}
                        >
                            Link
                        </Button>
                        <Button size="small" color="primary" onClick={() => openModalForPro(item)}>
                            About
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}
