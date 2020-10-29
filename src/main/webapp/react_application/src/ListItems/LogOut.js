import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({}));

export default function LogOut(props) {

    const classes = useStyles();

    return (
        <div style={{color:"white"}}>
            <ListItem button onClick={props.toggleSignIn}>
                <ListItemIcon style={{color:"white"}}>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out"/>
            </ListItem>
    </div>);
}