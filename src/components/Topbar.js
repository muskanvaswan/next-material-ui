import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: '100%',
    flexShrink: 0,

  },
  drawerPaper: {
    width: '100%',
  },
  drawerPaperBright :{
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.9,
    color: theme.palette.primary.contrastText,
    zIndex: theme.zIndex.drawer + 1,
    fill: theme.palette.primary.contrastText,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function TopBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Drawer
        className={clsx(classes.drawer, "primary")}
        variant="persistent"
        anchor="bottom"
        open={open}
        classes={{
          paper: (props.bright? classes.drawerPaperBright: classes.drawerPaper),
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>

            <ExpandMoreIcon />
          </IconButton>
        </div>

        <List>
          <ListItemLink key='Home' href="/">
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemLink>
          {login ?
            <ListItemLink key='Dashboard' href="/user/dashboard">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemLink>
            :
            <ListItemLink key='Sign In' href="/accounts/sign-in">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary='Sign In' />
            </ListItemLink>
          }
          <ListItemLink key='Shop Now' href="/shop">
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary='Shop Now' />
          </ListItemLink>
        </List>

        <List>
          <ListItem button key='About Us'>
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary='About Us' />
          </ListItem>
          <ListItem button key='Contact Us'>
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary='Contact Us' />
          </ListItem>
          <ListItem button key='Privacy Policy'>
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary='Privacy Policy' />
          </ListItem>
        </List>
      </Drawer>
      <Toolbar />

    </React.Fragment>
  );
}
