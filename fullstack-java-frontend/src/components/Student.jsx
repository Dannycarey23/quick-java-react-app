import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto', textAlign: 'center' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
  fetch("http://localhost:8081/student/add", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)
  }).then(() => {
    console.log("New Student added");
  })
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle} >
        <h1 style={{ color: 'blue' }}>
          <u>Add Student</u>
        </h1>

        
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' }, 
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="student-name"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            id="student-address"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
          <Button variant="contained" style={{ width: '25%' }} color="primary" onClick={handleClick}>Contained</Button>
        </Box>
      </Paper>    
    </Container>
  );
}
