import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../images/coverpic.jfif';
import axios from "axios";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website is ready
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.common.deepYellow,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.common.deepYellow,
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [staff, setStaff] = useState({"staffId":null,"firstName":null,"lastName":null,"address":null,"phoneNumber":null,"email":null,"password":null,"status":null})

    let routeChange=(staff)=> {
        if(staff.status === "Admin"){
            document.location=`/onlinePrintShop/adminDashboard/adminHome`;
        }else if(staff.status === "Employee"){
            document.location=`/onlinePrintShop/employeeDashboard/employeeHome`;
        }else{
            document.location=`/onlinePrintShop/customerDashboard/customerHome`;
        }
    }

    let handleSubmit=()=>{
        axios.get("http://localhost:8080/email="+email+"/password="+password)
            .then(response => {
                if(response.status === 200){
                    console.log(response.data);
                    if(response.data.staffId === 0) {
                        alert("incorrect username or password");
                    }else {
                        setStaff(response.data);
                        routeChange(response.data);
                    }
                }else{
                    alert("error connecting server");
                    console.log("error");
                }
            });
    }

    return (
        <div>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" color={"primary"}>
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name={"email"}
                                label="Email Address"
                                autoComplete
                                autoFocus
                                onChange={event => {setEmail(event.target.value)}}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                name={"password"}
                                autoComplete="current-password"
                                onChange={event => {setPassword(event.target.value)}}
                            />
                            {/*{*/}
                            {/*    staff.staffId === 0?*/}
                            {/*        alert("incorrect username or password")*/}
                            {/*    :*/}
                            {/*        routeChange(staff)*/}

                            {/*}*/}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                // label="Remember me"
                                label = {<Typography color='primary'>Remember Me</Typography>}
                            />
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                <Typography color='primary'>Sign in</Typography>
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}