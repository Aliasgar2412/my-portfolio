import React from 'react';
import { Box, Typography, Slider, Grid, Card, CardContent, CardActions, makeStyles, Tooltip } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    mainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
    },
    cardsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: '20px',
        maxWidth: '100%',
        width: '100%',
        marginTop: '20px',
    },
    card: {
        flexBasis: 'calc(33.333% - 20px)',
        maxWidth: 345,
    },
    sectionHeading: {
        fontSize: '3rem',
        color: '#257180',
        fontWeight: 'bold'
    },
    description: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2, // Limit to 2 lines
        overflow: 'hidden',
        textOverflow: 'ellipsis', // Adds "..." for overflowing text
    },
});


const skillsData = [
    { name: 'JavaScript', description: 'Advanced knowledge in JavaScript, ES6+, async programming, and DOM manipulation.' },
    { name: 'React', description: 'Building dynamic, reusable components and state management with React.' },
    { name: 'CSS/SCSS', description: 'Proficient in responsive design, Flexbox, Grid, and writing maintainable styles.' },
    { name: 'HTML', description: 'HTML is the standard markup language for Web pages.' },
    { name: 'Bootstrap', description: 'Bootstrap is a free, open source front-end development framework for the creation of websites and web apps.' },
    { name: 'Git', description: 'Version control using Git for managing source code and collaboration.' },
    { name: 'Redux', description: 'State management using Redux for handling global state in React applications.' },
    { name: 'Material-UI', description: 'React components for faster and easier web development.' },
    { name: 'Material Table', description: 'Material-table is a simple and powerful Datatable for React based on Material-UI Table with some additional features.' },
];


const valuetext = (value) => {
    return `${value}%`;
};

const SkillsPage = () => {

    const classes = useStyles();

    return (
        <div id="skills" className={classes.mainWrapper}>
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: 4,
                    paddingRight: 4,
                }}
            >

                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    gutterBottom
                    sx={{
                        position: 'sticky',
                        top: 0,
                        backgroundColor: 'white',
                        zIndex: 1,
                        padding: 2,
                    }}
                    className={classes.sectionHeading}
                >
                    My Skills
                </Typography>

                <Grid container spacing={3} justifyContent="center" sx={{ flexGrow: 1 }}>
                    {skillsData.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                                <CardContent sx={{ flexGrow: 1 }} style={{ height: "5rem" }} >
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        {skill.name}
                                    </Typography>
                                    <Tooltip title={skill.description}>
                                        <Typography variant="body2" color="textSecondary" className={classes.description} paragraph >
                                            {skill.description}
                                        </Typography>
                                    </Tooltip>
                                </CardContent>


                                {/* <CardActions sx={{ paddingBottom: 2 }}>
                                    <Slider
                                        value={70}
                                        valueLabelDisplay="auto"
                                        valueLabelFormat={valuetext}
                                        min={0}
                                        max={100}
                                        step={5}
                                        disabled
                                        sx={{ width: '100%' }}
                                    />
                                </CardActions> */}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default SkillsPage;
