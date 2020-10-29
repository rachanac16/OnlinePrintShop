import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
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
    fixedHeight: {
        height: 240,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    tableCellStyle:{
    },
    table:{},
    paperHeader:{
        backgroundColor: theme.palette.common.darkBlack,
        padding:theme.spacing(2),
        color: "white",
    },
    modifyButton:{
        color:theme.palette.common.black,
        backgroundColor:theme.palette.common.deepYellow,
        '&:hover': {
            backgroundColor: "#f5a23c",
        },
    },
    deleteButton:{
        color:theme.palette.common.white,
        backgroundColor:theme.palette.common.softRed,
        '&:hover': {
            backgroundColor: "#974e49",
        },
    },
    addButton:{
        color:theme.palette.common.black,
        padding:theme.spacing(1),
        margin:theme.spacing(0, 8, 1 , 0),
        backgroundColor:theme.palette.common.deepYellow,
        '&:hover': {
            backgroundColor: "#f5a23c",
        },
    },

}));
export default function Employees() {

    const classes = useStyles();

    const [staffList, setStaffList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/staff")
            .then((response) => {
                if(response.status){
                    setStaffList(response.data);
                }
            });
    },[])



    return (
        <div>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>

                    <TableContainer component={Paper}>
                        <Grid container component={Paper} className={classes.paperHeader} >
                            <Grid item xs={6} style={{paddingTop:10, paddingLeft:10}}>
                                    <Typography variant={"h5"}>
                                        Employee Form
                                    </Typography>
                            </Grid>
                            <Grid item xs={6} style={{paddingTop:10, paddingLeft:10}} >
                                <Grid container justify={"flex-end"}>
                                    <Button variant="contained" className={classes.addButton} href={"/onlinePrintShop/adminDashboard/addEmployeeForm"}>
                                        Add Employee
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                        <hr/>
                        <Table  className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"center"}>SID</TableCell>
                                    <TableCell align={"center"}>First Name</TableCell>
                                    <TableCell align={"center"}>Last Name</TableCell>
                                    <TableCell align={"center"}>Email</TableCell>
                                    <TableCell align={"center"}>Phone Number</TableCell>
                                    <TableCell align={"center"}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {staffList.length === 0?
                                    <TableRow>
                                        <TableCell colSpan="5">
                                            <Typography variant={"h5"} align={"center"} >There are no members available</Typography>
                                        </TableCell>
                                    </TableRow>
                                    :
                                    staffList.map(staff => (
                                        <TableRow key={staff.staffId}>
                                            <TableCell align={"center"}>{staff.staffId}</TableCell>
                                            <TableCell align={"center"}>{staff.firstName}</TableCell>
                                            <TableCell align={"center"}>{staff.lastName}</TableCell>
                                            <TableCell align={"center"}>{staff.email}</TableCell>
                                            <TableCell align={"center"}>{staff.phoneNumber}</TableCell>
                                            <TableCell align={"center"}>
                                                <ButtonGroup>
                                                    <Button variant={"outlined"} color={"primary"} className={classes.modifyButton}>
                                                        Modify
                                                    </Button>
                                                    <Button variant={"outlined"} color={"primary"} className={classes.deleteButton}>
                                                        Delete
                                                    </Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Container>
        </div>
    );
}