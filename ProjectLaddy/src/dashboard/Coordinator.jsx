import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Button, Paper } from '@mui/material';

const Coordinator = () => {
  const [groups, setGroups] = useState([
    { name: 'Group 1', members: ['Person A', 'Person B', 'Person C', 'Person D', 'Person E'] },
    { name: 'Group 2', members: [] },
    { name: 'Group 3', members: [] },
    { name: 'Group 4', members: [] },
    { name: 'Group 5', members: [] },
  ]);

  const handleStartMatching = () => {
    // Logic for starting matching
    console.log('Start Matching button clicked');
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6">No. of Participants Registered</Typography>
          <Typography variant="body1">100/100</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" color="primary" sx={{ width: '100%' }}>
            No of Groups: 20
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" color="secondary" sx={{ width: '100%' }} onClick={handleStartMatching}>
            Start Matching
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" color="secondary" sx={{ width: '100%' }}>
            Room Code: 12345
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {groups.map((group, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#30203C', color: 'white' }}>
              <Typography variant="h6" align="center" sx={{ textDecoration: 'underline' }}>
                {group.name}
              </Typography>
              <Box sx={{ backgroundColor: 'white', color: 'black', padding: 1, marginTop: 2 }}>
                {group.members.length > 0 ? (
                  group.members.map((member, idx) => (
                    <Typography key={idx} variant="body1">
                      {member}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="body1">No members</Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Coordinator;
