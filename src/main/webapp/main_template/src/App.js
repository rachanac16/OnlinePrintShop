import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import SignInSide from "./functions/SignInSide";
import AdminDashboard from "./functions/AdminDashboard";
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import EmployeeList from "./functions/EmployeeList";
import AdminHome from "./functions/AdminHome";
import EmployeeDashboard from "./functions/EmployeeDashboard";
import EmployeeHome from "./functions/EmployeeHome";
import CustomerDashboard from "./functions/CustomerDashboard";
import CustomerHome from "./functions/CustomerHome";

const routes = [
    {
        path: "/signIn",
        component: SignInSide,
    },
    {
        path: "/onlinePrintShop/adminDashboard",
        component: AdminDashboard,
        routes: [
            {
                path: "/onlinePrintShop/adminDashboard/adminHome",
                component: AdminHome
            },
            {
                path: "/onlinePrintShop/adminDashboard/employeeList",
                component: EmployeeList,
            },

        ]
    },
    {
        path: "/onlinePrintShop/employeeDashboard",
        component: EmployeeDashboard,
        routes: [
            {
                path: "/onlinePrintShop/employeeDashboard/employeeHome",
                component: EmployeeHome
            },
        ]
    },
    {
        path: "/onlinePrintShop/customerDashboard",
        component: CustomerDashboard,
        routes: [
            {
                path: "/onlinePrintShop/customerDashboard/customerHome",
                component: CustomerHome
            },
        ]
    },


];

function App() {
  return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <GlobalStyles/>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </MuiThemeProvider>
  );
}

function RouteWithSubRoutes(route) {
    console.log("from app");
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
export default App;
