import React from 'react';
import {Container, Typography} from '@mui/material';

//import {makeStyles} from '@mui/styles'

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     padding: theme.spacing(3, 0),
//     color: theme.palette.common.white,
//   },
// }));

const Footer = () => {
// const classes = useStyles();

  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          My Awesome Website
        </Typography>
        <Typography variant="subtitle1" align="center">
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
