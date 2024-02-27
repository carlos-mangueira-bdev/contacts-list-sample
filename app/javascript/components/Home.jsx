import React, { useEffect, useState } from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ContactsList from "./ContactsList";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  main: {
    flexDirection: "row",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
    },
  },
  content: {
    marginBottom: "70px",
    [theme.breakpoints.down('xs')]: {
      marginBottom: "170px",
    },
  }
}));

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const url = '/api/v1/contacts';
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setContacts(response))
  }, [])

  return (
    <Box padding={4} className={classes.content}>
      <Box display="flex">
        <Grid container alignItems="center" className={classes.main} >
          <Box flexGrow='1'>
          <h2 className={classes.root}>Schedule a Visit</h2>
          </Box>
          <Box display="flex">
          <Grid container alignItems="center" className={classes.main}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<HomeIcon />}
              style={{margin: "10px"}}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EventIcon />}
              style={{margin: "10px"}}
            >
              My Visits
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
              style={{margin: "10px"}}
            >
              Add a Contact
            </Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <ContactsList {...contacts} />
    </Box>
  );
};
