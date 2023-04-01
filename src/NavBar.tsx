import { AppBar, Button, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import React from 'react';

interface NavBarProps {
    title: string;
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: useTheme().spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        marginRight: useTheme().spacing(1),
      },
}));

const NavBar: React.FC<NavBarProps> = ({ title }) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Link to="/" className={classes.link}>
                        <Button color="inherit">
                            <Typography variant="button">
                                Home
                            </Typography>
                        </Button>
                    </Link>
                    <Link to="/about" className={classes.link}>
                        <Button color="inherit">
                            <Typography variant="button">
                                About
                            </Typography>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;