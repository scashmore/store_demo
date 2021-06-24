import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Typography, Card, CardMedia, CardContent} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Autorenew } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    alignContent: 'center'
  },
  appbar: {
    alignItems: 'center',
    top: 'auto',
  },
  tabs: {
      width: '100%',
      marginTop: '10%',
      
  },
  stores: {
      width: '100%'
  }
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Brevard" {...a11yProps(0)} />
          <Tab label="Asheville" {...a11yProps(1)} />
          <Tab label="Greenville" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabs}>
          <Card className={classes.stores}>
              <CardMedia className={classes.media} image=""/>
              <CardContent>
                  <Typography variant='h5' gutterBottom>
                        The original OP Taylors, locatated in beautiful, downtown Brevard!
                  </Typography>
              </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabs}>
          <Card className={classes.stores}>
              <CardMedia className={classes.media} image=""/>
              <CardContent>
                  <Typography variant='h5' gutterBottom>
                        Locatated in Biltmore Park!
                  </Typography>
              </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabs}>
          <Card className={classes.stores}>
              <CardMedia className={classes.media} image=""/>
              <CardContent>
                  <Typography variant='h5' gutterBottom>
                        Locatated in beautiful, downtown Greenville!
                  </Typography>
              </CardContent>
          </Card>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}