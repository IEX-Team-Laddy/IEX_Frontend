import { Avatar, Button, Container, Grid, Paper, Stack } from "@mui/material";
import pfp from "../images/mepfp.JPG";
import { Edit } from "@mui/icons-material";

export default function HomeScreen() {
  return (
    <Grid container spacing={2} sx={{ textAlign: "left" }}>
      <Grid item xs={12} sx={{ padding: 2, marginTop: 2 }}>
        <Stack direction="row" spacing={2}>
          <Avatar src={pfp} style={{ width: 100, height: 100 }} />
          <Stack>
            <p style={{ fontFamily: "Montserrat", fontWeight: 600 }}>
              Yashwit Polapragada <Edit fontSize="small" />
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 15,
                textAlign: "left",
              }}
            >
              CS | NUS <Edit fontSize="small" />
            </p>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <h5>
            <u>Current Classes / Projects</u>
          </h5>
          <br />
          <p>
            NUS: NGT2001, <i>Global Social Thought</i>
          </p>
          <p>Research in Quantum Physics</p>
        </Container>
      </Grid>
      <Grid item xs={4}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <h5>
            <u>Passions and interests</u>
          </h5>
          <br />
          <p>Sports Analysis</p>
          <p>Statistics and Mathematical Analysis</p>
        </Container>
      </Grid>
      <Grid item xs={4}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <h5>
            <u>Work style</u>
          </h5>
          <br />
          <p>Small but consistent effort</p>
          <p>Work early, finish early</p>
        </Container>
      </Grid>
      <Grid item xs={8}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <h5>
            <u>Fun facts about me</u>
          </h5>
          <br />
          <p>Love all kind of animals</p>
          <p>Actively looking for fishing buddies</p>
          <p>
            Hope to find a kindred soul that shares the same interest in
            contemplating endlessly about the cosmos
          </p>
        </Container>
      </Grid>
      <Grid item xs={4}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <h5>
            <u>Ratings (based on past projects)</u>
          </h5>
        </Container>
      </Grid>
    </Grid>
  );
}
