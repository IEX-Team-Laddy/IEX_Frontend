import { Box, Button, Divider } from "@mui/material";
import { useState } from "react";
import Questions from "./Questions";
import { Cancel, Close } from "@mui/icons-material";

export default function Questionnaire({
  matchingStart,
  closeQuestionnaire,
  activeClass,
  userData,
}) {
  const [submittedQuestionnaire, submitQuestionnaire] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(#E98356, #B27FC6)",
          fontFamily: "Montserrat",
          color: "white",
          padding: 3,
        }}
      >
        <Cancel
          onClick={() => closeQuestionnaire()}
          sx={{
            cursor: "pointer",
          }}
        />
        <p style={{ fontSize: 30 }}>
          Welcome to the Questionnaire - {activeClass}
        </p>
        <div style={{ textAlign: "left", fontSize: 15 }}>
          <p>
            We are thrilled to have you as part of our upcoming project, and we
            believe it's going to be an exciting journey filled with creativity,
            innovation, and collaboration. To help us get to know you better and
            ensure we form the perfect teams, we kindly request your
            participation in a brief questionnaire.
          </p>
          <p>
            Your input will play a crucial role in matching you with like-minded
            individuals who share your passions and skills. We aim to build
            teams that complement each other, creating a dynamic and productive
            working environment. This questionnaire will help us understand your
            unique strengths, interests, and goals, so we can assemble teams
            that maximize everyone's potential.
          </p>
          <p>
            Your thoughts and insights matter, and we're excited to learn more
            about you. Please take a few moments to complete the questionnaire,
            as it will be instrumental in crafting an enriching and rewarding
            project experience for all involved.
          </p>
          <p>
            Thank you for being a part of this incredible journey. Let's embark
            on this adventure together and turn our collective vision into
            reality!
          </p>
          <p>
            If you have any questions or need further assistance, please don't
            hesitate to contact us. Your satisfaction and comfort in this
            project are of utmost importance.
          </p>
          <p>We can't wait to see what we can achieve together!</p>
        </div>
        {/* <Divider
              sx={{ borderBottomWidth: 3, borderBottomColor: "white" }}
            />
            <br /> */}
        {/* <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeT_2KmqIqDS6yMWgKHgOPFcpiJVVYuMXQiV3wx88GUv-SRFw/viewform?embedded=true"
            width="640"
            height="7312"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe> */}
        {/* <Questions /> */}
        {/* <h4 style={{ textAlign: "left" }}>Section 1: Who you are</h4>
          <p style={{ textAlign: "left" }}>
            The standard boring stuff. This won't take long
          </p>
          <br />
          <h4 style={{ textAlign: "left" }}>
            Section 2: Who you really are :)
          </h4>
          <p style={{ textAlign: "left" }}>
            Your interests, styles, expertise etc. Getting more interesting
          </p>
          <br />
          <h4 style={{ textAlign: "left" }}>
            Section 3: Who should we look for (for you)
          </h4>
          <p style={{ textAlign: "left" }}>Your preferences :)</p> */}
        {/* <br />
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                submitQuestionnaire(true);
              }}
              sx={{
                borderRadius: 20,
                fontSize: 10,
                padding: 1.5,
                fontWeight: "bold",
                backgroundImage: "linear-gradient(#B27FC6, #E98356)",
                marginLeft: "auto",
              }}
            >
              Submit Questionnaire
            </Button> */}
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          fontFamily: "Montserrat",
          color: "white",
          padding: 3,
        }}
      >
        <Questions
          matchingStart={matchingStart}
          closeQuestionnaire={closeQuestionnaire}
          activeClass={activeClass}
          userData={userData}
        />
      </Box>
    </>
  );
}

{
  /* <div style={{ fontSize: 30, fontWeight: 300 }}>
<p>Thank you for your time!</p>
<p>Creating your profile...</p>
</div> */
}
