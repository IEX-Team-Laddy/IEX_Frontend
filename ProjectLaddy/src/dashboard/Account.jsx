import { Container, Grid, Stack, Avatar } from "@mui/material";
import { Edit } from "@mui/icons-material";
import pfp from "../images/mepfp.jpg";

export default function Account() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ fontFamily: "Montserrat", textAlign: "left" }}
    >
      <Grid item xs={12} sx={{ padding: 2, marginTop: 2 }}>
        <Stack direction="row" spacing={2}>
          <Avatar src={pfp} style={{ width: 100, height: 100 }} />
          <Stack>
            <p style={{ fontWeight: 600 }}>
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
      <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", fontWeight: "bold", padding: 2 }}
        >
          <p>University/Company: NUS</p>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", fontWeight: "bold", padding: 2 }}
        >
          <p>Year of Study/Work: 3</p>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", fontWeight: "bold", padding: 2 }}
        >
          <Stack direction="row" spacing={1}>
            <div>Email(s):</div>
            <Stack direction="column">
              <div>yashwit@u.nus.edu</div>
              <div>yashwitpo@gmail.com</div>
            </Stack>
          </Stack>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", fontWeight: "bold", padding: 2 }}
        >
          <Stack direction="row" spacing={1}>
            <div>Languages(s) spoken:</div>
            <Stack direction="column">
              <div>English</div>
              <div>Mandarin</div>
            </Stack>
          </Stack>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", fontWeight: "bold", padding: 2 }}
        >
          <p>
            Biography: Energetic sports lover, sports analyst, pursuing a degree
            in sports admin
          </p>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", fontWeight: "bold", padding: 2 }}
        >
          <Stack direction="row" spacing={1}>
            <div>Links(s):</div>
            <Stack direction="column">
              <div>Telegram: @yashpola</div>
              <div>Linkedin: www.linkedin.com/in/</div>
            </Stack>
          </Stack>
        </Container>
      </Grid>
    </Grid>
  );
}
