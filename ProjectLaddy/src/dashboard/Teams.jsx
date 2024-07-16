import { Add } from "@mui/icons-material";
import {
  Container,
  Button,
  Backdrop,
  Grid,
  Stack,
  TextField,
  Box,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Questionnaire from "./Questionnaire";
import axios from "axios";
import { supabase } from "../supabase";

export default function Teams({ userData }) {
  const [questionnaireOpen, showQuestionnaire] = useState(false);
  const [matchingStarted, startMatching] = useState(false);
  const [matchingModal, setMatchingModal] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  const [open, setOpen] = useState(false);
  const [groupNumber, setGroupNumber] = useState("");
  const [dayToday, setDayToday] = useState(1);
  const [totalMinutes, setTotalMinutes] = useState(0);

  useEffect(() => {
    const d = new Date();
    setDayToday(d.getDay());
    setTotalMinutes(d.getHours() * 60 + d.getMinutes());
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const URL = "https://iex-backend.onrender.com";
  // const URL = "http://localhost:3001";

  function seeGroups() {
    const config = {
      headers: {
        // Authorization: "Bearer YOUR_TOKEN",
        // "Content-Type": "text/plain",
      },
    };

    const className = ["IEX"];
    axios
      .post(URL + "/matches", className, config)
      .then((response) => {
        if (response.status === 200) {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].includes(userData.id)) {
              setGroupNumber(i + 1);
              addGrouping(i + 1);
              break;
            }
          }
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    seeGroups();
  }, []); // Add dependency array to avoid infinite loop

  async function addGrouping(groupNo) {
    const { data, error } = await supabase
      .from("users")
      .update({ group_no: groupNo })
      .eq("id", userData.id);
    if (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ fontFamily: "Montserrat", textAlign: "left" }}
      >
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <TextField
              label="Search for your class or project"
              sx={{ width: "100vw", backgroundColor: "white", borderRadius: 3 }}
              InputLabelProps={{
                style: { fontFamily: "Montserrat", color: "#30203C" },
              }}
            />
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ borderRadius: 100, backgroundColor: "#5D5FEF" }}
            >
              <Add />
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#30203C",
                padding: 3,
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'  // Align items to the left
              }}
            >
              <NavLink
                to="/coordinator"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <h4 style={{ fontWeight: "bold", textDecoration: 'underline', marginBottom: '10px' }}>IEX</h4>
              </NavLink>
              <h6 style={{ margin: 0 }}>Dev Desai</h6>
            </Container>
            <br />
            <p>NUS College Impact Experience Course</p>
            {!questionnaireOpen && !matchingStarted ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("IEX");
                }}
                style={{
                  color: "black",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Match me
              </div>
            ) : (
              <p style={{ fontWeight: "bold" }}>Your group: {groupNumber}</p>
            )}
          </Box>
        </Grid>
        <Container style={{ marginTop: 10 }}>
          {questionnaireOpen && (
            <Questionnaire
              startMatching={startMatching}
              closeQuestionnaire={showQuestionnaire}
              activeClass={activeClass}
              userData={userData}
            />
          )}
        </Container>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
          onClick={handleClose}
        >
          <Paper sx={{ padding: 5, borderRadius: 10, textAlign: "center" }}>
            <h3 style={{ color: "#275E96" }}>
              Trying to join a class or project?
            </h3>
            <h6>
              Type in the name of the class/project and the room code to join!
            </h6>
            <br />
            <TextField
              sx={{ width: "100%" }}
              InputProps={{
                style: { borderRadius: 30, backgroundColor: "#eee" },
              }}
              label="Name of class or project"
            />
            <TextField
              sx={{ marginTop: 2, width: "100%" }}
              InputProps={{
                style: { borderRadius: 30, backgroundColor: "#eee" },
              }}
              label="Room code or password"
            />
            <Button
              sx={{
                marginTop: 2,
                backgroundColor: "#275E96",
                borderRadius: 20,
                fontWeight: "bold",
              }}
              variant="contained"
            >
              Join now
            </Button>
          </Paper>
        </Backdrop>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={matchingModal}
          onClick={() => {
            setMatchingModal(false);
          }}
        >
          <Paper sx={{ padding: 5, borderRadius: 10, textAlign: "center" }}>
            <h3 style={{ color: "#275E96" }}>
              You're currently being matched!
            </h3>
            <h6>
              Give us some time! Once we're ready we will add you to a group
              with others that have similar profiles.
            </h6>
            <h6>
              We will add it to your project space so that you can easily load
              the interface!
            </h6>
          </Paper>
        </Backdrop>
      </Grid>
    </>
  );
}
