import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Stack, Typography, Button, Divider } from "@mui/material";
import { Facebook, LinkedIn, Twitter, YouTube, Instagram, Email } from "@mui/icons-material";
import { NavLink } from 'react-router-dom'; // Ensure NavLink is imported
import Asset8 from "../Assets/Asset8.png";
import Landing3 from "../images/rando2.jpg";
import Asset6 from "../Assets/Asset6.png";
import IEXVideo from "../images/LADDYIntro.mp4";
import hero from "../Assets/Asset21.png";
import logo from "../Assets/Asset1.png";

const interests = [
  "Painting", "Writing", "Volunteer Work", "Photography",
  "Traveling", "Reading", "Biology", "Languages",
  "Cooking", "Baking", "Music", "Debating",
  "Gaming", "Sports", "Astrology", "Stargazing",
  "Film", "Science", "Mathematics", "Social Events", "Basketball"
];

const rotatingTexts = [
  "Positive", "Enthusiastic", "Organized", "Analytical", 
  "Creative", "Decisive", "Dedicated", "Encouraging", "Proactive"
];

export default function Landing() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [currentRotatingText, setCurrentRotatingText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotatingText((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 400); // Change text every 0.4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleInterestClick = (interest) => {
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(interest)
        ? prevSelected.filter((item) => item !== interest)
        : [...prevSelected, interest]
    );
  };

  return (
    <>
      <Box>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={6}>
            <Container
              maxWidth="sm"
              style={{
                fontFamily: "Inter",
                fontSize: 56,
                textAlign: "left",
                color: "black",
                fontStyle: "bold",
                marginLeft: '-50px',
                marginBottom: '12px',
              }}
            >
              Struggling to form the perfect team?
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 18,
                  color: "black",
                  marginTop: '12px',
                  marginLeft: '0px',
                  textAlign: 'left'
                }}
              >
                LADDY is dedicated to helping you find individuals with similar interests who will work well with you. 
                Through the use of our matching algorithm with over 20 parameters, we endeavour to help you form your perfect project group.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '40px', justifyContent: 'flex-start' }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#F86204",
                    borderRadius: 20,
                    padding: '10px 20px',
                    fontFamily: "DM Sans",
                    fontWeight: "normal",
                    textAlign: 'center',
                    whiteSpace: 'normal',
                    lineHeight: 1.5,
                    marginRight: '50px',
                    minWidth: '150px',
                  }}
                  component="a"
                  href="https://forms.gle/PWsDFzBuRWWryAaA6"
                  target="_blank"
                >
                  Get a free work <br /> personality report!
                </Button>
                <Divider orientation="vertical" flexItem sx={{ margin: '0 20px', backgroundColor: '#F86204', height: '100px' }} />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#F86204",
                    borderRadius: 20,
                    padding: '10px 20px',
                    fontFamily: "DM Sans",
                    fontWeight: "normal",
                    textAlign: 'center',
                    whiteSpace: 'normal',
                    lineHeight: 1.5,
                    marginLeft: '45px',
                    minWidth: '180px',
                  }}
                >
                  <NavLink
                    to="/auth"
                    style={{
                      color: "White",
                      textDecoration: 'none',
                    }}
                  >
                    Form a team!
                  </NavLink>
                </Button>
              </Box>
            </Container>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div>
              <img src={hero} width={750} height={700} />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12} sm={6} sx={{ marginTop: '0px' }}>
        <video width="1000vw" height="800vw" controls>
          <source src={IEXVideo} type="video/mp4" />
        </video>
      </Grid>
      
      <Grid item xs={12} sm={6} sx={{ marginTop: '200px' }}>
        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fffaf0', 
            padding: '30px', 
            borderRadius: '16px', 
            border: '2px solid #F86204', 
            marginLeft: '20px',
            maxWidth: '650px',
            position: 'relative'
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                marginBottom: '20px', 
                color: '#ED7D31', 
                fontWeight: 'bold' 
              }}
            >
              Section 2: Who You Really Are
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                marginBottom: '30px', 
                fontWeight: 'bold' 
              }}
            >
              Choose Your Interests
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {interests.map((interest, index) => (
                <Grid item key={index}>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      backgroundColor: selectedInterests.includes(interest) ? '#FFA07A' : '#ED7D31', 
                      color: 'white', 
                      borderRadius: '16px', 
                      minWidth: '100px', 
                      minHeight: '50px', 
                      margin: '5px',
                      '&:hover': {
                        backgroundColor: '#D56A29'
                      },
                      '&:active': {
                        backgroundColor: '#FFA07A'
                      }
                    }}
                    onClick={() => handleInterestClick(interest)}
                  >
                    {interest}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', top: '275%', right: '7%', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'normal', color: '#000000', display: 'inline', paddingRight: '10px' }}>
            Find your 
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ED7D31', display: 'inline', paddingRight: '5px' }}>
            {rotatingTexts[currentRotatingText]}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'normal', color: '#000000', display: 'inline', paddingLeft: '10px' }}>
            Team.
          </Typography>
        </Box>
      </Grid>

      <Box sx={{ paddingTop: '150px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          We focus on finding the <span style={{ color: '#ED7D31' }}>right</span> team.
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', paddingLeft: '50px', textAlign: 'Left' }}>
              Carefully curated questions
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '20px', paddingLeft: '50px', textAlign: 'left' }}>
              Our platform features an intuitive design for all users, allowing for easy
              networking and browsing of profiles. With a user-friendly interface, you can
              effortlessly connect with potential project partners.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img width={"100%"} src={Asset6} style={{ marginTop: '-100px', paddingLeft: '50px' }} />
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ marginTop: '-50px' }}>
          <Grid item xs={12} sm={4}>
            <img width={"150%"} src={Asset8} style={{ marginTop: '-150px', paddingLeft: '20px' }} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '-150px', textAlign: 'left', paddingLeft: '100px' }}>
              Free and easy to use
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '0px', textAlign: 'left', paddingLeft: '100px' }}>
              Our questions are designed to ensure you are matched as accurately as possible.
              Each question aims to gather detailed insights like your skills, interests, and preferences. 
              This comprehensive approach helps us to create precise matches, enhancing the likelihood of successful and productive collaborations.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <br />
      <br />
      <div
        style={{
          backgroundColor: "#FFEDE7",
          padding: 20,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>© 2023 LADDY</div>
        <Facebook sx={{ color: "#0072b1" }} />
        <LinkedIn sx={{ color: "#0072b1" }} />
        <Twitter sx={{ color: "#1DA1F2" }} />
        <YouTube sx={{ color: "red" }} />
        <Instagram sx={{ color: "black" }} />
        <Email sx={{ color: "green" }} />
      </div>
    </>
  );
}
