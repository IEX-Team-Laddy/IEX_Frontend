import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Link } from '@mui/material';
import Alagappan from "../Assets/Photo_Alagappan.jpg";
import Linus from "../Assets/Photo_Linus.jpg";
import Dev from "../Assets/Photo_Dev.jpeg";
import Donovan from "../Assets/Photo_Donovan.jpeg";
import Yash from "../Assets/Photo_Yash.jpg";
import Asset9 from "../Assets/Asset9.png";
import Asset10 from "../Assets/Asset10.png";
import Asset11 from "../Assets/Asset11.png";
import Asset12 from "../Assets/Asset12.png";

const founders = [
  {
    name: 'Linus',
    role: 'Chief Algorithm Architect',
    linkedin: 'https://www.linkedin.com/in/linuslee71/',
    image: Linus
  },
  {
    name: 'Alagappan',
    role: 'Chief Database Architect',
    linkedin: 'https://www.linkedin.com/in/alagappan5/',
    image: Alagappan
  },
  {
    name: 'Dev',
    role: 'Chief Product and Strategy Officer',
    linkedin: 'https://www.linkedin.com/in/devvratdesai/',
    image: Dev
  },
  {
    name: 'Donovan',
    role: 'Chief Data Analytics Officer',
    linkedin: 'https://www.linkedin.com/in/donovan-lim/',
    image: Donovan
  },
  {
    name: 'Yash',
    role: 'Chief Engineering Manager',
    linkedin: 'https://www.linkedin.com/in/yashwit/',
    image: Yash
  },
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        paddingTop: 8,
        backgroundColor: '#FFFaf0',
        fontFamily: 'Inter',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {founders.map((founder, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src={founder.image}
                  alt={founder.name}
                  sx={{ width: 150, height: 150, margin: '0 auto', marginBottom: 3, borderRadius: '50%' }}
                />
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', marginTop: 5 }}>
                  <span style={{ color: '#F26322' }}>{founder.name.charAt(0)}</span>{founder.name.slice(1)}
                </Typography>
                <Typography variant="body1" sx={{ color: 'black' }}>
                  {founder.role}
                </Typography>
                <Link 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener" 
                  sx={{ 
                    color: '#FCBD94', 
                    textDecoration: 'none', 
                    '&:hover': {
                      color: '#F26322',
                    },
                  }}
                >
                  LinkedIn
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ marginTop: 10, position: 'relative', zIndex: 1 }}>
          <Typography variant="body1" sx={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 2, paddingRight: 2, color: 'black', textAlign: 'left', fontSize: '1.2rem' }}>
            Forming professional groups with strong synergies can be a daunting challenge, especially in new environments like university. We recognized this problem firsthand and wanted to tackle it head-on. Our journey began with a simple question: How can we help people find the right teammates to achieve their fullest potential together?
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 2, paddingRight: 2, color: 'black', textAlign: 'left', fontSize: '1.2rem' }}>
            To address this issue, we embarked on a mission to understand the dynamics of successful teams. We held discussions with a diverse array of professionals from various industries, including athletes from national sports teams, military tangos, and corporate leaders. Their insights were invaluable, highlighting the importance of complementary skills, shared goals, and effective communication.
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 2, paddingRight: 2, color: 'black', textAlign: 'left', fontSize: '1.2rem' }}>
            Armed with this knowledge, we saw the potential and possibilities of using a genetic algorithm to create optimal team formations. Our vision extends beyond just NUS classes and students. We aim to scale this solution for businesses, creating forums and marketplaces for idea exchange and matchmaking for startups. Imagine a platform where you can find the perfect co-founder or team to bring your innovative ideas to life.
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 2, paddingRight: 2, color: 'black', textAlign: 'left', fontSize: '1.2rem' }}>
            At LADDY, we are passionate about fostering meaningful collaborations and helping individuals achieve success through the power of teamwork. We believe that by leveraging technology and data-driven insights, we can transform the way people connect and work together.
          </Typography>
        </Box>
      </Container>
      <img
        src={Asset9}
        alt="Background Asset 9"
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '20%',
          height: 'auto',
          opacity: 0.05,
          zIndex: 0,
        }}
      />
      <img
        src={Asset10}
        alt="Background Asset 10"
        style={{
          position: 'absolute',
          top: '80%',
          right: '5%',
          width: '20%',
          height: 'auto',
          opacity: 0.05,
          zIndex: 0,
        }}
      />
      <img
        src={Asset11}
        alt="Background Asset 11"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '20%',
          height: 'auto',
          opacity: 0.05,
          zIndex: 0,
        }}
      />
      <img
        src={Asset12}
        alt="Background Asset 12"
        style={{
          position: 'absolute',
          bottom: '40%',
          right: '10%',
          width: '20%',
          height: 'auto',
          opacity: 0.05,
          zIndex: 0,
        }}
      />
    </Box>
  );
}
