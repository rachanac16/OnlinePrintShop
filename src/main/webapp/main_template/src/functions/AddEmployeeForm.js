import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            // maxWidth:475
        },
    },
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    fixedHeight: {
        height: 240,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
    },
    addButton: {
        backgroundColor: theme.palette.common.deepYellow,
    },
    textFieldStyle:{
        width:"48%",
        margin:"1%"
    },
    form:{
        width:"100%",
    },
    buttonDiv:{
        padding:theme.spacing(2),
    },
    paperHeader:{
        backgroundColor: theme.palette.common.darkBlack,
        padding:theme.spacing(2),
        color: "white",
    }
}));
export default function AddEmployeeForm() {

    const classes = useStyles();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const formBody = {
        "firstName":firstName,
        "lastName":lastName,
        "address":address,
        "phoneNumber":phoneNumber,
        "email":email,
        "password":password,
        "status":status
    }

    let handleSubmit=()=>{
        const options = {
            url: 'http://localhost:8080/addStaff',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: formBody,
        };

        axios(options).then(response => console.log(response.status));
        setOpen(true);
        // window.location.reload();
    }

    return (
        <div>
            <div className={classes.appBarSpacer} />
            <Container maxWidth={"lg"} className={classes.container}>
                <Paper>
                    <form  autoComplete="off" autoCapitalize className={classes.form} onSubmit={handleSubmit}>
                        <Paper className={classes.paperHeader}>
                            <Typography variant={"h5"}>
                            Employee Form
                            </Typography>
                        </Paper>
                        <div>
                            <TextField
                                required
                                label="First Name"
                                id="firstName"
                                defaultValue=""
                                variant={"outlined"}
                                onChange={event => setFirstName(event.target.value)}
                                className={classes.textFieldStyle}
                            />
                            <TextField
                                required
                                label="Last Name"
                                id="lastName"
                                defaultValue=""
                                variant={"outlined"}
                                className={classes.textFieldStyle}
                                onChange={event => setLastName(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Password"
                                id="password"
                                defaultValue="abcdefgh"
                                variant={"outlined"}
                                className={classes.textFieldStyle}
                                onChange={event => setPassword(event.target.value)}
                            />
                            <TextField
                                required
                                label="Status"
                                id="status"
                                defaultValue="Employee/Admin"
                                variant={"outlined"}
                                className={classes.textFieldStyle}
                                onChange={event => setStatus(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                id="email"
                                defaultValue=""
                                variant={"outlined"}
                                required
                                className={classes.textFieldStyle}
                                onChange={event => setEmail(event.target.value)}
                            />
                            <TextField
                                label="Phone Number"
                                id="phoneNumber"
                                defaultValue=""
                                variant={"outlined"}
                                required
                                className={classes.textFieldStyle}
                                onChange={event => setPhoneNumber(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Address"
                                id="address"
                                defaultValue=""
                                variant={"outlined"}
                                multiline
                                rows={4}
                                fullWidth
                                required
                                className={classes.buttonDiv}
                                onChange={event => setAddress(event.target.value)}
                            />
                        </div>

                        <div className={classes.buttonDiv}>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.addButton}
                                fullWidth
                            >
                                <Typography color='primary'>Add Employee</Typography>
                            </Button>
                        </div>


                    </form>
                </Paper>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Container>
        </div>
    );
}