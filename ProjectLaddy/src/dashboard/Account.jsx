import {
  Container,
  Button,
  Grid,
  Stack,
  Avatar,
  TextField,
  Divider,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
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
            : document.getElementById("newUniversity").value.toString(),
        year_of_study:
          document.getElementById("newYearOfStudy").value === ""
            ? userData.year_of_study
            : document.getElementById("newYearOfStudy").value,
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
    startEditMode(false);
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ fontFamily: "Montserrat", textAlign: "left" }}
    >
      <Grid item xs={12}></Grid>
      {/* <Grid item xs={12} sx={{ padding: 2, marginTop: 2 }}>
        <Stack direction="row" spacing={2}>
          <Avatar src={userpfpicon} style={{ width: 100, height: 100 }} />
        </Stack>
      </Grid> */}
      {/* {edit && (
        <> */}
      <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
        >
          <p style={{ fontWeight: "600" }}>
            Display name:
            <div style={{ fontWeight: "400" }}>{userData.display_name}</div>
          </p>
          {edit && (
            <TextField fullWidth id="newDisplayName" label="New display name" />
          )}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          {/* </Container> */}
          {/* </Grid>
      <Grid item xs={12}> */}
          {/* <Container */}
          {/* sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}> */}
          <p style={{ fontWeight: "600" }}>
            Major: <div style={{ fontWeight: "400" }}>{userData.major}</div>
          </p>
          {edit && <TextField fullWidth id="newMajor" label="New major" />}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          {/* </Container>
      </Grid>
      <Grid item xs={12}> */}
          {/* <Container
          sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
        > */}
          <p style={{ fontWeight: "600" }}>
            University:{" "}
            <div style={{ fontWeight: "400" }}>{userData.university}</div>
          </p>
          {edit && (
            <TextField fullWidth id="newUniversity" label="New university" />
          )}
          {/* </Container>
      </Grid> */}
          {/* </>
      )} */}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          {/* <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
        > */}
          <p style={{ fontWeight: "600" }}>
            Year of study:{" "}
            <div style={{ fontWeight: "400" }}>{userData.year_of_study}</div>
          </p>
          {edit && (
            <TextField
              fullWidth
              id="newYearOfStudy"
              label="New year of study"
            />
          )}
          {/* </Container>
      </Grid> */}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          {/* <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
        > */}
          <p style={{ fontWeight: "600" }}>
            Email: <div style={{ fontWeight: "400" }}>{userData.email}</div>
          </p>
          {edit && <TextField fullWidth id="newEmail" label="New email" />}
          {/* </Container>
      </Grid> */}
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
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          {/* <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
        > */}
          <p style={{ fontWeight: "600" }}>
            Bio: <div style={{ fontWeight: "400" }}>{userData.biography}</div>
          </p>
          {edit && <TextField fullWidth id="newBiography" label="New bio" />}
          {/* </Container>
      </Grid> */}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          {/* <Grid item xs={12}>
        <Container
          sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
        > */}
          <p style={{ fontWeight: "600" }}>
            Telegram:{" "}
            <div style={{ fontWeight: "400" }}>{userData.telegram}</div>
          </p>
          {edit && (
            <TextField fullWidth id="newTelegram" label="New telegram" />
          )}
          {/* </Container>
      </Grid> */}
          <br />
          {edit && (
            // <Grid item xs={12}>
            <>
              <br />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  updateUserDetails();
                }}
                variant="contained"
                sx={{ backgroundColor: "black", borderRadius: 3 }}
              >
                Save changes
              </Button>
            </>
          )}
          {!edit && (
            // <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                startEditMode(!edit);
              }}
              endIcon={<Edit />}
              sx={{
                borderColor: "white",
                borderRadius: 3,
                color: "white",
                backgroundColor: "black",
              }}
            >
              Edit Profile
            </Button>
          )}
        </Container>
      </Grid>
    </Grid>
  );
}
