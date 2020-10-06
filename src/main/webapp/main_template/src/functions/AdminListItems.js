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


export const mainListItems = (
    <div style={{color:"white"}}>
        <ListItem button onClick={()=>document.location = "/onlinePrintShop/adminDashboard/adminHome"} >
            <ListItemIcon style={{color:"white"}}>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button onClick={()=>document.location = "/onlinePrintShop/adminDashboard/employeeList"}>
            <ListItemIcon style={{color:"white"}}>
                <WorkIcon/>
            </ListItemIcon>
            <ListItemText primary="Employees" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div style={{color:"white"}}>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"white"}}>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
        <ListItem button onClick={()=>document.location = "/signIn"}>
            <ListItemIcon style={{color:"white"}}>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
        </ListItem>
    </div>
);