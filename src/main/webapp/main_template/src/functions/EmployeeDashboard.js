import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {mainListItems, secondaryListItems} from "./EmployeeListItems";
import EmployeeHome from "./EmployeeHome";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        backgroundColor: theme.palette.common.deepYellow,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: theme.palette.common.darkBlack,
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
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

const routes = [
    {
        path: "/onlinePrintShop/employeeDashboard/employeeHome",
        component: EmployeeHome,
    },
];


export default function EmployeeDashboard() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="primary"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="primary" noWrap className={classes.title}>
                            Employee Dashboard
                        </Typography>
                        {/*<IconButton color="inherit">*/}
                        {/*    <Badge badgeContent={4} color="secondary">*/}
                        {/*        <NotificationsIcon />*/}
                        {/*    </Badge>*/}
                        {/*</IconButton>*/}
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon} >
                        <IconButton onClick={handleDrawerClose} style={{color:"white"}}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider color={"Secondary"}/>
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
                <main className={classes.content}>
                    {/*<Breadcrumbs aria-label="breadcrumb" style={{paddingTop:100}}>*/}
                    {/*    <Link color="inherit" href="/" onClick={()=>{document.location="/"}}>*/}
                    {/*        Material-UI*/}
                    {/*    </Link>*/}
                    {/*    <Link color="inherit" href="/getting-started/installation/" onClick={()=>{document.location="/"}}>*/}
                    {/*        Core*/}
                    {/*    </Link>*/}
                    {/*    <Typography color="textPrimary">Breadcrumb</Typography>*/}
                    {/*</Breadcrumbs>*/}
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                    </Switch>

                </main>
            </Router>
        </div>
    );
}

function RouteWithSubRoutes(route) {
    console.log("route: "+route)
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}