import { Box, Grid, Typography, Divider } from "@mui/material";
import { useState } from "react";
import Questions from "./Questions";
import { Cancel } from "@mui/icons-material";
import Asset8 from "../Assets/Asset8.png";

export default function Questionnaire({
  startMatching,
  closeQuestionnaire,
  activeClass,
  userData,
}) {
  const [submittedQuestionnaire, submitQuestionnaire] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fffaf0",
          border: '2px solid #F86204',
          borderRadius: 5,
          color: "#000000",
          padding: 3,
          marginLeft: '0px',
          maxWidth: '1200px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Cancel
          onClick={() => closeQuestionnaire()}
          sx={{
            cursor: "pointer",
            position: 'absolute',
            top: '50px',
            right: '10px',
          }}
        />
        <Typography
          variant="h4"
          component="p"
          sx={{
            fontSize: 40,
            textAlign: "center",
            fontWeight: "bold",
            color: "#30203C",
            marginBottom: 5,
          }}
        >
          Welcome to the Questionnaire!
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={4}>
            <img
              width={"130%"}
              src={Asset8}
              style={{
                marginBottom: '100px',
                marginLeft: '-10%',
                maxHeight: '300px',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" sx={{ fontSize: 15, padding: 2, textAlign: "left", marginBottom: 1, marginTop: -12 }}>
              We are thrilled to have you as part of our upcoming project, and we
              believe it's going to be an exciting journey filled with creativity,
              innovation, and collaboration. To help us get to know you better and
              ensure we form the perfect teams, we kindly request your
              participation in a brief questionnaire.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 15, padding: 2, textAlign: "left", marginBottom: 1, marginTop: 0 }}>
              Your input will play a crucial role in matching you with like-minded
              individuals who share your passions and skills. We aim to build
              teams that complement each other, creating a dynamic and productive
              working environment. This questionnaire will help us understand your
              unique strengths, interests, and goals, so we can assemble teams
              that maximize everyone's potential.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ marginTop: '-80px' }}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#F86204',
                color: 'white',
                padding: 2,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Section 1:
              </Typography>
              <Typography variant="body1">
                Who are you?
              </Typography>
              <Typography variant="body2">
                The standard boring stuff. This part won’t take too long. We wanna get a feel of who are you!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#F86204',
                color: 'white',
                padding: 2,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Section 2:
              </Typography>
              <Typography variant="body1">
                Who are you, Really?
              </Typography>
              <Typography variant="body2">
                Your interests, styles, expertise etc. Getting more interesting. We want to really get to know you!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#F86204',
                color: 'white',
                padding: 2,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Section 3:
              </Typography>
              <Typography variant="body1">
                What are you looking for?
              </Typography>
              <Typography variant="body2">
                What are your preferences, and who do you want to work with? We want to find the best for you!
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ backgroundColor: '#fffaf0', color: '#30203C', padding: 2, borderRadius: 2, marginTop: '50px', textAlign: 'center' }}>
          <Typography variant="body1">
            Thank you for being a part of this incredible journey. Let's embark on this adventure together and turn our collective vision into reality! If you have any questions or need further assistance, please don't hesitate to contact us. Your satisfaction and comfort in this project are of utmost importance. We can't wait to see what we can achieve together!
          </Typography>
        </Box>

        <Divider sx={{ backgroundColor: '#F86204', height: '1px', margin: '60px auto', width: '85%' }} />
        
        <Box
          sx={{
            marginTop: '20px',
            backgroundColor: "#fffaf0",
            color: "white",
            padding: 3,
          }}
        >
          <Questions
            startMatching={startMatching}
            closeQuestionnaire={closeQuestionnaire}
            activeClass={activeClass}
            userData={userData}
          />
        </Box>
      </Box>
    </>
  );
}
