import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui.icons'

import logo from '../../assets/coffee.png'
const Navbar = () => {
    return (
        <>
          <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant='h6' className={classes.title} color="inherit">
                    <img src={logo} alt="store.js" height="25px" className={classes.image}/>
                    Shop Demo
                </Typography>
            </Toolbar>
          </AppBar>  
        </>
    )
}

export default Navbar
