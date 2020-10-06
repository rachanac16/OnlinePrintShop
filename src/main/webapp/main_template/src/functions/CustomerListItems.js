import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HistoryIcon from '@material-ui/icons/History';
import NoteIcon from '@material-ui/icons/Note';
export const mainListItems = (
    <div style={{color:"white"}}>
        <ListItem button onClick={()=>document.location = "/onlinePrintShop/customerDashboard/customerHome"} >
            <ListItemIcon style={{color:"white"}}>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Order History" />
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Presets" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div style={{color:"white"}}>
        <ListItem button onClick={()=>document.location = "/signIn"}>
            <ListItemIcon style={{color:"white"}}>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
        </ListItem>
    </div>
);