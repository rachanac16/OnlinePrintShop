import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {admin_mainListItems, admin_secondaryListItems} from "../ListItems/AdminListItems";
import {employee_mainListItems, employee_secondaryListItems} from "../ListItems/EmployeeListItems";
import {customer_mainListItems, customer_secondaryListItems} from "../ListItems/CustomerListItems";
import Drawer from "@material-ui/core/Drawer";
import LogOut from "../ListItems/LogOut";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        background: theme.palette.common.darkBlack,
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        height: '100vh',
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
        background: theme.palette.common.darkBlack,
        height: '100vh',
    },
    appBarSpacer: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function SideDrawer(props) {

    const classes = useStyles();

    let mainListItems = () => {
        if(props.status === "Admin"){
            return admin_mainListItems;
        }else if(props.status === "Employee"){
            return employee_mainListItems;
        }else if(props.status === "Customer"){
            return customer_mainListItems;
        }else return <div></div>;
    }

    let secondaryListItems = () => {
        if(props.status === "Admin"){
            return admin_secondaryListItems;
        }else if(props.status === "Employee"){
            return employee_secondaryListItems;
        }else if(props.status === "Customer"){
            return customer_secondaryListItems;
        }else return <div></div>;
    }

    return (<div>
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon} >
                <IconButton onClick={props.handleDrawerClose} style={{color:"white"}}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider color={"Secondary"}/>
            <List>{mainListItems()}</List>
            <Divider />
            <List>{secondaryListItems()}</List>
            <Divider />
            <List><LogOut toggleSignIn={() => props.toggleSignIn()}/></List>
        </Drawer>

    </div>);
}