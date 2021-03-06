import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import {Link, useLocation} from 'react-router-dom'

import logo from '../../assets/coffee.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
          <AppBar position='sticky' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color="inherit">
                    <img src={logo} alt="store.js" height="25px" className={classes.image}/>
                    Shop Demo
                </Typography>
                <div className={classes.grow} />
                <Typography component={Link} to="/" variant='h6' color="inherit" style={{marginRight: '2%'}}>
                        Store
                    </Typography>
                    <Typography component={Link} to="/aboutus" variant='h6' color="inherit" style={{marginRight: '2%'}}>
                        About Us
                    </Typography>
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
          </AppBar>  
        </>
    )
}

export default Navbar
