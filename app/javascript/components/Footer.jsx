import React from 'react';
import { Box, Typography, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "80px"
  },
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  }
}));

export default function Footer() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Box className={classes.root} bgcolor="text.secondary" color="background.paper">
        <Box pt={2} pl={2} display="flex" flexDirection="row" alignItems="center">
          <Typography className={classes.links}>
            <Link href="#" onClick={preventDefault} color="inherit">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              English
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              Spanish
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              French
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              Test Your Equipment
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              WebRTC Test
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              Speed Test
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              Ice Tester
            </Link>
            <span>|</span>
            <Link href="#" onClick={preventDefault} color="inherit">
              Help Center
            </Link>
          </Typography>
        </Box>
        <Box pt={1} pl={2} display="flex" flexDirection="row" alignItems="center">
          <Typography color="inherit" ml={2}>US Server. Copyright ©2024 ViaPath Technologies. All rights reserved.</Typography>
        </Box>
      </Box>
    </>
  );
}