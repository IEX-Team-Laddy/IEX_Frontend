import { Container, Box, Grid, Avatar, Stack, Icon } from "@mui/material";
import {
  Instagram,
  Facebook,
  LinkedIn,
  YouTube,
  Twitter,
  Email,
} from "@mui/icons-material";
import Landing2 from "../images/rando.jpg";
import Landing3 from "../images/rando2.jpg";
import Landing4 from "../images/Landing3.jpg";
import IEXVideo from "../images/LADDYIntro.mp4";

export default function Landing() {
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
                fontSize: 40,
                textAlign: "left",
                color: "#4D4D4D",
              }}
            >
              Ready to find your perfect project partner?
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <iframe
              width="560vw"
              height="315vw"
              src={IEXVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ backgroundColor: "white" }}>
        <Grid
          container
          spacing={2}
          style={{ padding: 30 }}
          // alignItems="center"
          // justifyContent="center"
          // style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={6}>
            <Container
              maxWidth="sm"
              style={{
                fontFamily: "Inter",
                fontSize: 40,
                textAlign: "left",
              }}
            >
              Struggling to find like-minded others?
            </Container>
            <br />
            <Container
              maxWidth="sm"
              style={{
                fontFamily: "Montserrat",
                fontSize: 15,
                textAlign: "left",
                color: "#6F7CB2",
              }}
            >
              We at LADDY are dedicated to help you reach out to others that
              share the same interests and work well with you. With the use of
              our very own matching algorithm, we endeavour to help you form
              your perfect project group.
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img width={"250vw"} src={Landing4} />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}>
            <Container style={{ textAlign: "left" }}>
              <Stack spacing={1}>
                <div>
                  <img src={Landing2} />
                </div>
                <p style={{ fontSize: 20, fontWeight: "bold" }}>
                  Carefully curated questionnaire
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 15,
                    color: "#5D6970",
                  }}
                >
                  Our questions are designed to ensured that you are matched as
                  accurately as possible to others
                </p>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container style={{ textAlign: "left" }}>
              <Stack spacing={1}>
                <div>
                  <img src={Landing2} />
                </div>
                <p style={{ fontSize: 20, fontWeight: "bold" }}>
                  Free and easy to use
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 15,
                    color: "#5D6970",
                  }}
                >
                  Intuitive design for all users, allowing for easy networking
                  and browsing of profiles
                </p>
              </Stack>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <Box style={{ backgroundColor: "white" }}>
        <Grid
          container
          spacing={2}
          style={{ padding: 30 }}
          // alignItems="center"
          // justifyContent="center"
          // style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={6}>
            <img width={"250vw"} src={Landing3} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container
              maxWidth="sm"
              style={{
                fontFamily: "Inter",
                fontSize: 40,
                textAlign: "left",
              }}
            >
              You are special
            </Container>
            <br />
            <Container
              maxWidth="sm"
              style={{
                fontFamily: "Montserrat",
                fontSize: 15,
                textAlign: "left",
                color: "#6F7CB2",
              }}
            >
              We know how tough, lonely and frustrating it can be to find others
              to work on a project you are highly passionate about. LADDY was
              the same. Whether you are a student, free-lancer, social activist,
              or corporate worker, we got you.
              <br />
              <br />
              XX% of LADDY’s users are greatly satisfied with the cohesiveness
              of their matched teams, and have gone on to foster meaningful
              personal relationships that extend beyond the initial project.
            </Container>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <Box style={{}}>
        <Grid
          container
          spacing={2}
          style={{ padding: 30 }}
          // alignItems="center"
          // justifyContent="center"
          // style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: 40,
              }}
            >
              What are you waiting for? Start matching!
            </p>
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
        {/* <Container
          maxWidth="sm"
          style={{
            fontFamily: "Inter",
            fontSize: 15,
            color: "#939EA4",
            backgroundColor: "#FFEDE7",
            padding: 30,
          }}
        > */}
        <div>© 2023 LADDY</div>
        <Facebook sx={{ color: "#0072b1" }} />
        <LinkedIn sx={{ color: "#0072b1" }} />
        <Twitter sx={{ color: "#1DA1F2" }} />
        <YouTube sx={{ color: "red" }} />
        <Instagram sx={{ color: "black" }} />
        <Email sx={{ color: "green" }} />
        {/* </Container> */}
      </div>
    </>
  );
}
