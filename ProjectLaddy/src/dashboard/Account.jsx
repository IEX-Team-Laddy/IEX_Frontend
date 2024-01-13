import {
  Container,
  Button,
  Grid,
  Stack,
  Avatar,
  TextField,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import pfp from "../images/mepfp.jpg";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function Account({ loginEmail }) {
  const [edit, startEditMode] = useState(false);
  const [userData, setCurrentUserData] = useState({});

  async function retrieveCurrentUserData() {
    const { data } = await supabase
      .from("users")
      .select()
      .eq("email", loginEmail);
    setCurrentUserData(data[0]);
  }

  useEffect(() => {
    retrieveCurrentUserData();
  }, []);

  async function updateUserDetails() {
    const { error } = await supabase
      .from("users")
      .update({
        display_name:
          document.getElementById("newDisplayName").value === ""
            ? userData.display_name
            : document.getElementById("newDisplayName").value,
        major:
          document.getElementById("newMajor").value === ""
            ? userData.major
            : document.getElementById("newMajor").value,
        university:
          document.getElementById("newUniversity").value === ""
            ? userData.university
            : document.getElementById("newUniversity").value,
        year_of_study:
          document.getElementById("newYearOfStudy").value === ""
            ? userData.year_of_study
            : document.getElementById("newYearOfStudy").valu,
        email:
          document.getElementById("newEmail").value === ""
            ? userData.email
            : document.getElementById("newEmail").value,
        biography:
          document.getElementById("newBiography").value === ""
            ? userData.biography
            : document.getElementById("newBiography").value,
        telegram:
          document.getElementById("newTelegram").value === ""
            ? userData.telegram
            : document.getElementById("newTelegram").value,
      })
      .eq("email", loginEmail);
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ fontFamily: "Montserrat", textAlign: "left" }}
    >
      <Grid item xs={12}></Grid>
      <Grid item xs={12} sx={{ padding: 2, marginTop: 2 }}>
        <Stack direction="row" spacing={2}>
          <Avatar src={pfp} style={{ width: 100, height: 100 }} />
          <Stack>
            <p style={{ fontWeight: 600 }}>{userData.display_name}</p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 15,
                textAlign: "left",
              }}
            >
              {userData.major} | {userData.university}
            </p>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          onClick={(e) => {
            e.preventDefault();
            startEditMode(!edit);
          }}
          endIcon={<Edit />}
          sx={{ borderColor: "black", color: "black" }}
        >
          Edit Profile
        </Button>
      </Grid>
      {edit && (
        <>
          <Grid item xs={12}>
            <Container sx={{ backgroundColor: "white", padding: 2 }}>
              <p>
                Display name:<div>{userData.display_name}</div>
                {/* {edit ? (
                  <TextField fullWidth id="newDisplayName" />
                ) : (
                  <div>{userData.display_name}</div>
                )} */}
              </p>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container sx={{ backgroundColor: "white", padding: 2 }}>
              <p>
                Major:{" "}
                {edit ? (
                  <TextField fullWidth id="newMajor" />
                ) : (
                  <div>{userData.major}</div>
                )}
              </p>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container sx={{ backgroundColor: "white", padding: 2 }}>
              <p>
                University:{" "}
                {edit ? (
                  <TextField fullWidth id="newUniversity" />
                ) : (
                  <div>{userData.university}</div>
                )}
              </p>
            </Container>
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <p>
            Year of study:{" "}
            {edit ? (
              <TextField fullWidth id="newYearOfStudy" />
            ) : (
              <div>{userData.year_of_study}</div>
            )}
          </p>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <p>
            Email:{" "}
            {edit ? (
              <TextField fullWidth id="newEmail" />
            ) : (
              <div>{userData.email}</div>
            )}
          </p>
        </Container>
      </Grid>
      {/* <Grid item xs={12}>
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
      </Grid> */}
      <Grid item xs={12}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <p>
            Bio:{" "}
            {edit ? (
              <TextField fullWidth id="newBiography" />
            ) : (
              <div>{userData.biography}</div>
            )}
          </p>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
          <p>
            Telegram:{" "}
            {edit ? (
              <TextField fullWidth id="newTelegram" />
            ) : (
              <div>{userData.telegram}</div>
            )}
          </p>
        </Container>
      </Grid>
      {edit && (
        <Grid item xs={12}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              updateUserDetails();
            }}
            variant="contained"
            sx={{ backgroundColor: "black" }}
          >
            Save changes
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
