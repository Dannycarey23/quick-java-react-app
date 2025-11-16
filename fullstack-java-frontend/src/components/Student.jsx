import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto', textAlign: 'center' };
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

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
            id="student-location"
            label="Student Location"
            variant="outlined"
            fullWidth
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
        </Box>
      </Paper>    
    </Container>
  );
}
