import {
  Container,
  Button,
  Grid,
  Avatar,
  TextField,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import logo from "../Assets/Asset1.png";
import Asset6 from "../Assets/Asset6.png";

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
      <Grid item xs={12} sx={{ position: 'relative' }}>
        <img src={logo} alt="Asset1" style={{ position: 'absolute', top: '-50px', right: '0', width: '200px', height: '40px' }} />
      </Grid>

      <Grid item xs={8}>
        <Container
          sx={{
            backgroundColor: "#fffaf0",
            borderRadius: 3,
            padding: 2,
            border: '2px solid #F86204',
            position: 'relative'
          }}
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
          <p style={{ fontWeight: "600" }}>
            Major: <div style={{ fontWeight: "400" }}>{userData.major}</div>
          </p>
          {edit && <TextField fullWidth id="newMajor" label="New major" />}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          <p style={{ fontWeight: "600" }}>
            University:{" "}
            <div style={{ fontWeight: "400" }}>{userData.university}</div>
          </p>
          {edit && (
            <TextField fullWidth id="newUniversity" label="New university" />
          )}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
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
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          <p style={{ fontWeight: "600" }}>
            Email: <div style={{ fontWeight: "400" }}>{userData.email}</div>
          </p>
          {edit && <TextField fullWidth id="newEmail" label="New email" />}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          <p style={{ fontWeight: "600" }}>
            Bio: <div style={{ fontWeight: "400" }}>{userData.biography}</div>
          </p>
          {edit && <TextField fullWidth id="newBiography" label="New bio" />}
          <br />
          <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
          <br />
          <p style={{ fontWeight: "600" }}>
            Telegram:{" "}
            <div style={{ fontWeight: "400" }}>{userData.telegram}</div>
          </p>
          {edit && (
            <TextField fullWidth id="newTelegram" label="New telegram" />
          )}
          <br />
          {edit && (
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
        </Container>
      </Grid>

      <Grid item xs={4}>
        <Container
          sx={{
            backgroundColor: "#fffaf0",
            borderRadius: 3,
            padding: 2,
            border: '2px solid #F86204',
            position: 'relative',
            marginBottom: 2,
          }}
        >
          <Avatar
            src={userData.avatar_url}
            sx={{ width: 120, height: 120, marginBottom: 2, mx: 'auto' }}
          />
          <TextField fullWidth id="newFirstName" label="First Name" sx={{ mb: 2 }} />
          <TextField fullWidth id="newLastName" label="Last Name" sx={{ mb: 2 }} />
          <TextField fullWidth id="newPhoneNumber" label="Phone Number" sx={{ mb: 2 }} />
          {!edit && (
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
                width: '100%',
                marginTop: 'auto'
              }}
            >
              Edit Profile
            </Button>
          )}
        </Container>
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          alt="Asset6"
          src={Asset6}
        />
      </Grid>
    </Grid>
  );
}
