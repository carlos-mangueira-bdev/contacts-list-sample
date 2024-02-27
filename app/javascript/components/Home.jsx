import React, { useEffect, useState } from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
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
    <Box padding={4} marginBottom={"70px"}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box flexGrow='1'>
        <h2 className={classes.root}>Schedule a Visit</h2>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            style={{marginRight: "16px"}}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EventIcon />}
            style={{marginRight: "16px"}}
          >
            My Visits
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonAddIcon />}
          >
            Add a Contact
          </Button>
        </Box>
      </Box>
      <ContactsList {...contacts} />
    </Box>
  );
};
