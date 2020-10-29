import React from 'react';
import './App.css';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignInSide from "./components/SignInSide";
import {withStyles} from "@material-ui/core/styles";
import TopBar from "./functions/TopBar";
import GlobalStyles from "./GlobalStyles";
import SideDrawer from "./functions/SideDrawer";
import AdminHome from "./functions/AdminHome";
import EmployeeHome from "./functions/EmployeeHome";
import CustomerHome from "./functions/CustomerHome";

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
});

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isSignedIn:false,
            open:true,
            status:"Admin"
        }
    }

    handleDrawerOpen = () => {
        this.setState({open:true});
    };
    handleDrawerClose = () => {
        this.setState({open:false});
    };

    checkSignedIn = () => {
        return this.state.isSignedIn?
            this.checkStatus()
            :
            <SignInSide isSignedIn={this.state.isSignedIn} toggleSignIn={() => this.changeSignInStatus()}/>;
    }

    checkStatus = () => {
        if(this.state.status === "Admin"){
            return <div>
                <AdminHome/>
            </div> ;
        }else if(this.state.status === "Employee"){
            return <div>
                <EmployeeHome/>
            </div>  ;
        }else if(this.state.status === "Customer"){
            return <div>
                <CustomerHome/>
            </div>  ;
        }
        return <div>
        </div>  ;
    }

    changeSignInStatus = () =>{
        this.setState({
            isSignedIn: !this.state.isSignedIn,
        });
        console.log("clicked");
        console.log(this.state.isSignedIn);
    }

    render() {
        const { classes } = this.props;
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <GlobalStyles/>
                    <div className={classes.root}>
                        {
                            this.state.isSignedIn ?
                                <div>
                                    <TopBar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose} status={this.state.status}/>
                                    <SideDrawer open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose} status={this.state.status} toggleSignIn={() => this.changeSignInStatus()}/>
                                </div>
                                :
                            <div></div>
                        }
                        <div className={classes.content}>
                            <Switch>
                                <Route exact path="/">
                                    <div>
                                        {this.checkSignedIn()}
                                    </div>
                                </Route>

                            </Switch>
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>

      );
    }
}

export default withStyles(useStyles)(App);
