import React, { useState } from 'react';
import { Container, Typography, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../util/api';

const Login = () => {
  // const classes = useStyles();
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = document.querySelector("#loginForm");
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);
    const btnPointer = document.querySelector("#login-btn");
    btnPointer.innerHTML = 'Please wai..';
    btnPointer.setAttribute('disabled', true);
   
    api.post('/login', formDataJSON).then((response) => {
        btnPointer.innerHTML = 'Login';
        btnPointer.removeAttribute('disabled');
        const data = response.data;
        const token = data["auth-token"];
        if (!token) {
            alert('Unable to login. Please try after some time.');
            return;
        }
        localStorage.clear();
        localStorage.setItem('auth-token', token);
        console.log('Form submitted:', formData);
        setTimeout(() => {
          navigate('/');
        }, 500);                        
    }).catch((error) => {
        btnPointer.innerHTML = 'Login';
        btnPointer.removeAttribute('disabled');
        alert("Oops! Some error occured.");
    });
  };

  return (
    <React.Fragment>    
        <Container component="main" maxWidth="xs" sx={{p:"10rem"}}>
        <Typography component="h1" variant="h5">
            Login
        </Typography>
        <form  onSubmit={handleSubmit} id='loginForm'>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="email"
            name="email"
            autoComplete="Email Address"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="login-btn"
            >
            Sign In
            </Button>
        </form>
        <p>Not logged in? <a href="http://127.0.0.1:8000/auth/register/">create account here.</a></p>
        </Container>
    </React.Fragment>
  );
};

export default Login;







//import {makeStyles} from '@mui/styles'

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     marginTop: theme.spacing(2),
//   },
// }));
