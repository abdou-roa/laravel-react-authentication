import React, { useState } from 'react';
import { Container, Typography, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../util/api';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
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

  const handleRegister = async (e) => {
    e.preventDefault();
    let formElement = document.querySelector('#registerForm');
    let formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);
    const btnPointer = document.querySelector("#register-btn");
    btnPointer.innerHTML = 'Please wai..';
    btnPointer.setAttribute('disabled', true);

    try {
      const response = await api.post('/register', formDataJSON).then((response)=>{
        btnPointer.innerHTML = 'Register';
        btnPointer.removeAttribute('disabled');
        let data = response.data;
        if(!data.status){
            alert("something went wrong, try again later.");
            return 0;
        }
        return navigate('/auth/login/');
    
      });
      const data = response.data;

      // Handle registration success
      console.log('User registered:', data);

      // Redirect or perform any other actions as needed
    } catch (error) {
      // Handle registration failure
      console.error('Registration failed:', error);

      // Display an error message or perform other actions as needed
    }
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs" sx={{ p: '10rem' }}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleRegister} id="registerForm">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="register-btn"
          >
            Register
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Register;
