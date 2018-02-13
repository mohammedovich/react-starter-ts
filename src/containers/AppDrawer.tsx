import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ListItem from "material-ui/List/ListItem";
import ListItemIcon from "material-ui/List/ListItemIcon";
import ListItemText from "material-ui/List/ListItemText";
import EdiIcon from "material-ui-icons/Edit";
import AddIcon from "material-ui-icons/Add";
import ListIcon from "material-ui-icons/List";
import Paper from "material-ui/Paper/Paper";

import { withStyles } from "material-ui/styles";
import { WithStyles } from "material-ui/styles";

const decorate = withStyles({
  closeDrawerIcon: {
    justifyContent: "flex-end",
  },
  paperContent: {
    flexGrow: 1,
  },
});

interface AppDrawerState {
  open: boolean;
}

interface AppDrawerProps {
  children: React.ReactNode;
}

type PropsWithStyle = AppDrawerProps & WithStyles<"closeDrawerIcon" | "paperContent">;

const DecoratedClass = decorate<AppDrawerProps>(
  class AppDrawer extends React.Component<PropsWithStyle, AppDrawerState> {
    public state = {
      open: false,
    };

    private openDrawer = () => {
      this.setState({
        open: true,
      });
    }

    private closeDrawer = () => {
      this.setState({
        open: false,
      });
    }

    public render() {
      const { open } = this.state;
      const {
        children,
        classes: {
          closeDrawerIcon,
          paperContent,
        },
      } = this.props;

      return (
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.openDrawer} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer variant="persistent" anchor="left" open={open}>
            <ListItem button classes={{root: closeDrawerIcon}} onClick={this.closeDrawer}>
              <ListItemIcon >
                <ChevronLeftIcon />
              </ListItemIcon>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="View Todos" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <EdiIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Todos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Todo" />
            </ListItem>
          </Drawer>

          <Paper classes={{root: paperContent}}>
            {children}
          </Paper>
        </React.Fragment>
      );
    }
  },
);

export default DecoratedClass;
