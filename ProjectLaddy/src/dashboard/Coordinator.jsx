import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Button, Paper, MenuItem, Select, TextField } from '@mui/material';

const Coordinator = () => {
  const totalParticipants = 100;
  const [groups, setGroups] = useState([
    { name: 'Group 1', members: ['Person A', 'Person B', 'Person C', 'Person D', 'Person E'] },
    { name: 'Group 2', members: [] },
    { name: 'Group 3', members: [] },
    { name: 'Group 4', members: [] },
    { name: 'Group 5', members: [] },
  ]);
  const [numGroups, setNumGroups] = useState(20);
  const [selectedParticipant, setSelectedParticipant] = useState('');

  const handleStartMatching = () => {
    // Redistribute participants into groups
    const newGroups = Array.from({ length: numGroups }, (_, i) => ({
      name: `Group ${i + 1}`,
      members: [],
    }));

    for (let i = 0; i < totalParticipants; i++) {
      newGroups[i % numGroups].members.push(`Participant ${i + 1}`);
    }

    setGroups(newGroups);
    console.log('Start Matching button clicked');
  };

  const handleParticipantChange = (event) => {
    setSelectedParticipant(event.target.value);
  };

  const handleNumGroupsChange = (event) => {
    setNumGroups(event.target.value);
  };

  return (
    <Container sx={{ backgroundColor: '#FFFaf0', padding: 4, fontFamily: 'Inter' }}>
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#FCBD94',
              color: '#30203C',
              padding: 2,
              textAlign: 'center',
              borderRadius: 1,
              fontFamily: 'Inter',
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: 'Inter' }}>Room Code: 12345</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Number of Groups"
            type="number"
            value={numGroups}
            onChange={handleNumGroupsChange}
            fullWidth
            sx={{ backgroundColor: '#FFFaf0', color: '#30203C', fontFamily: 'Inter' }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            sx={{
              width: '100%',
              backgroundColor: '#F26322',
              color: '#FFFaf0',
              '&:hover': { backgroundColor: '#FCBD94', color: '#30203C' },
              fontFamily: 'Inter',
            }}
            onClick={handleStartMatching}
          >
            Start Matching
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: '#30203C', marginBottom: 2, fontFamily: 'Inter' }}>
            No. of Participants Registered: {totalParticipants}
          </Typography>
          <Select
            value={selectedParticipant}
            onChange={handleParticipantChange}
            displayEmpty
            fullWidth
            sx={{ backgroundColor: '#FFFaf0', color: '#30203C', fontFamily: 'Inter' }}
          >
            <MenuItem value="" disabled>
              Select Participant
            </MenuItem>
            {Array.from({ length: totalParticipants }, (_, i) => (
              <MenuItem key={i} value={`Participant ${i + 1}`} sx={{ fontFamily: 'Inter' }}>
                Participant {i + 1}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {groups.map((group, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Paper elevation={3}>
              <Box sx={{ backgroundColor: '#30203C', color: 'white', padding: 1, fontFamily: 'Inter' }}>
                <Typography variant="h6" align="center" sx={{ textDecoration: 'underline', fontFamily: 'Inter' }}>
                  {group.name}
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: '#FFFaf0', color: '#30203C', padding: 1, fontFamily: 'Inter' }}>
                {group.members.length > 0 ? (
                  group.members.map((member, idx) => (
                    <Typography key={idx} variant="body1" sx={{ fontFamily: 'Inter' }}>
                      {member}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="body1" sx={{ fontFamily: 'Inter' }}>No members</Typography>
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
