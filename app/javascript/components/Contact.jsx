import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  blue: {
    color: theme.palette.primary.main
  },
  blue_bg: {
    backgroundColor: theme.palette.primary.main
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: "20px"
  },
  avatar: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function Contact(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.avatar}>
        <Avatar className={classes.blue_bg}>{props.first_name ? props.first_name[0]: 'h'}</Avatar>
      </div>
      <Box
        component="div"
        textOverflow="ellipsis"
        overflow="hidden"
      >
      <h2 className={classes.blue} style={{textAlign: "center"}}>{props.first_name + " " + props.last_name}</h2>
      </Box>
      <Box
        component="div"
        textOverflow="ellipsis"
        overflow="hidden"
      >
      <span className={classes.blue}><b>{props.facility_name}</b></span>
      </Box>
      <span className={classes.blue}>Booking #: {props.booking_code}</span>
      <span className={classes.blue}>Booking Date: {props.booking_date}</span>
      <span className={classes.blue}>DOB (Age): {props.date_of_birth ? props.date_of_birth : "Unknown"}</span>
      <Box mt={2} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<VideoCallIcon />}
        >
          Visit Now
        </Button>
      </Box>
      <Box mt={2} display={"flex"} justifyContent={"center"}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ScheduleIcon />}
      >
        Schedule a Visit
      </Button>
      </Box>
    </Paper>
  );
}