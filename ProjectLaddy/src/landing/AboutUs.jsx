import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          LADDY is dedicated to helping you find individuals with similar interests who will work well with you. Through the use of our matching algorithm with over 20 parameters, we endeavour to help you form your perfect project group.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our platform features an intuitive design for all users, allowing for easy networking and browsing of profiles. With a user-friendly interface, you can effortlessly connect with potential project partners.
        </Typography>
        {/* Add more content about your team, mission, vision, etc. */}
      </Box>
    </Container>
  );
};

export default AboutUs;
