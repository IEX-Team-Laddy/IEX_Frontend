import { Add, SetMealSharp } from "@mui/icons-material";
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
  // const [groupMembers, setGroupMembers] = useState([]);
  const [dayToday, setDayToday] = useState(1);
  const [totalMinutes, setTotalMinutes] = useState(0);

  useEffect(() => {
    const d = new Date();
    setDayToday(d.getDay());
    setTotalMinutes(d.getHours * 60 + d.getMinutes);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (e) => {
    setOpen(true);
  };

  const URL = "https://iex-backend.onrender.com";
  // const URL = "http://localhost:3001";

  function seeGroups() {
    // e.preventDefault();

    const config = {
      headers: {
        // Authorization: "Bearer YOUR_TOKEN",
        // "Content-Type": "text/plain",
      },
    };

    const className = ["NPS2001A"];
    axios
      .post(URL + "/matches", className, config)
      .then((response) => {
        if (response.status == 200) {
          // const group = response.data.filter((group) =>
          //   group.includes(userData.id)
          // );
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].includes(userData.id)) {
              setGroupNumber(i + 1);
              addGrouping(i + 1);
              break;
            }
          }
          // if (groupNumber !== "") {
          //   for (let j = 0; j < response.data[groupNumber - 1].length; j++) {
          //     findMembers(response.data[groupNumber - 1][j]);
          //   }
          // }
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  useEffect(() => {
    seeGroups();
  });

  const groupMembers = [];

  async function addGrouping(groupNo) {
    const { data, error } = await supabase
      .from("users")
      .update({ group_no: groupNo })
      .eq("id", userData.id);
    // groupMembers.push(data[0].username);
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
                style: { fontFamily: "Montserrat", color: "#CB8909" },
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
        {(dayToday === 1 || dayToday === 4) &&
          totalMinutes >= 16 * 60 + 5 &&
          totalMinutes <= 17 * 60 + 55 && (
            <Grid item xs={4}>
              <Box
                sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
              >
                <Container
                  sx={{
                    backgroundColor: "#CB8909",
                    padding: 3,
                    color: "white",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  <h4 style={{ fontWeight: "bold" }}>NPS2001A</h4>
                  <h6>Dr. Mikhail Filippov</h6>
                </Container>
                <br />
                <p>Matrix Unplugged: Using Computer for Real-World Problems</p>
                {!questionnaireOpen && !matchingStarted ? (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      showQuestionnaire(true);
                      setActiveClass("NPS2001A");
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
                  <p style={{ fontWeight: "bold" }}>
                    Your group: {groupNumber}
                  </p>
                )}
              </Box>
            </Grid>
          )}
        {(dayToday === 3 || dayToday === 5) &&
          totalMinutes >= 10 * 60 + 5 &&
          totalMinutes <= 11 * 60 + 55 && (
            <Grid item xs={4}>
              <Box
                sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
              >
                <Container
                  sx={{
                    backgroundColor: "#CB8909",
                    padding: 3,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  <h4 style={{ fontWeight: "bold" }}>NPS2001B</h4>
                  <h6>May Lim</h6>
                </Container>
                <br />
                <p>Matrix Unplugged: Using Computer for Real-World Problems</p>
                {!questionnaireOpen ? (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      showQuestionnaire(true);
                      setActiveClass("NPS2001B");
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
                  <p style={{ fontWeight: "bold" }}>
                    Your group: {groupNumber}
                  </p>
                )}
              </Box>
            </Grid>
          )}
        {(dayToday === 4 || dayToday === 5) &&
          totalMinutes >= 12 * 60 + 5 &&
          totalMinutes <= 13 * 60 + 55 && (
            <Grid item xs={4}>
              <Box
                sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
              >
                <Container
                  sx={{
                    backgroundColor: "#CB8909",
                    padding: 3,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  <h4 style={{ fontWeight: "bold" }}>NPS2001C</h4>
                  <h6>Dr. Jonathan Kang</h6>
                </Container>
                <br />
                <p>Matrix Unplugged: Using Computer for Real-World Problems</p>
                {!questionnaireOpen ? (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      showQuestionnaire(true);
                      setActiveClass("NPS2001C");
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
                  <p style={{ fontWeight: "bold" }}>
                    Your group: {groupNumber}
                  </p>
                )}
              </Box>
            </Grid>
          )}
        {(dayToday === 4 || dayToday === 5) &&
          totalMinutes >= 14 * 60 + 5 &&
          totalMinutes <= 15 * 60 + 55 && (
            <Grid item xs={4}>
              <Box
                sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
              >
                <Container
                  sx={{
                    backgroundColor: "#CB8909",
                    padding: 3,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  <h4 style={{ fontWeight: "bold" }}>NPS2001D</h4>
                  <h6>Dr. Jonathan Kang</h6>
                </Container>
                <br />
                <p>Matrix Unplugged: Using Computer for Real-World Problems</p>
                {!questionnaireOpen ? (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      showQuestionnaire(true);
                      setActiveClass("NPS2001D");
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
                  <p style={{ fontWeight: "bold" }}>
                    Your group: {groupNumber}
                  </p>
                )}
              </Box>
            </Grid>
          )}
        <Grid item xs={12}>
          {questionnaireOpen && (
            <>
              <br />
              <Questionnaire
                matchingStart={() => {
                  // e.preventDefault();
                  startMatching(true);
                  setMatchingModal(true);
                }}
                closeQuestionnaire={() => {
                  showQuestionnaire(false);
                }}
                activeClass={activeClass}
                userData={userData}
              />
            </>
          )}
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr. Kiven Strohm</h4>
            </Container>
            <br />
            <p>IEX Bandung</p>
            <p>Social Design as Worldmaking in Singapore</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr. Kiven Strohm");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr. Ng Keng Khoon</h4>
            </Container>
            <br />
            <p>Bajautopia in Sabah, Malaysia</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr. Ng Keng Khoon");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr. Lee Chee Keng</h4>
            </Container>
            <br />
            <p>
              IEx Eastern Thailand: Tourism development – Winners, Losers, and
              Alternatives
            </p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr. Lee Chee Keng");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr. Leung Wing Sze</h4>
            </Container>
            <br />
            <p>Inclusion in Education</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr. Leung Wing Sze");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Assoc Prof Lee Kah Wee</h4>
            </Container>
            <br />
            <p>100% Housing</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Assoc Prof Lee Kah Wee");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>A/P Miguel Escobar Varela</h4>
            </Container>
            <br />
            <p>Digital Documentation of Indonesian Arts Communities</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("A/P Miguel Escobar Varela");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Chang Yueh Siang</h4>
            </Container>
            <br />
            <p>“This belongs to us”: Communities and Heritage Conservation</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Chang Yueh Siang");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Alberto Perez Pereiro</h4>
            </Container>
            <br />
            <p>Postconflict Cambodia</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Alberto Perez Pereiro");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Cheng Yi'En</h4>
            </Container>
            <br />
            <p>IEx Innovate Education (Innov-Ed) in Vietnam-Mekong Delta</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Cheng Yi'En");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Nurhidayahti</h4>
            </Container>
            <br />
            <p>Self-help + Communities</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Nurhidayahti");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Assoc Prof Peter Vail</h4>
            </Container>
            <br />
            <p>Project Chiang Mai</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Assoc Prof Peter Vail");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Shivani Gupta</h4>
            </Container>
            <br />
            <p>Gender Matters Everyday</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Shivani Gupt");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Yong Han Poh</h4>
            </Container>
            <br />
            <p>Empowering Communities: Inclusive Research for Social Change</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Yong Han Poh");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Tan Sok Teng</h4>
            </Container>
            <br />
            <p>Rohingya Refugees in Malaysia</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Tan Sok Teng");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Jerome Kok</h4>
            </Container>
            <br />
            <p>Farming in an urban nation</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Jerome Kok");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Julius Batista</h4>
            </Container>
            <br />
            <p>Can bamboo make a difference?</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Julius Batista");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Kelly Siman</h4>
            </Container>
            <br />
            <p>
              IDEAS (Inter-Disciplinary Environmental impAct Solutions) Group
            </p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Kelly Siman");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Lim Chee Han</h4>
            </Container>
            <br />
            <p>The Practical Realities of Well-Being</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Lim Chee Han");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>May Lim</h4>
            </Container>
            <br />
            <p>Technology for Social Good</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("May Lim");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Michelle Lee</h4>
            </Container>
            <br />
            <p>Let's Green this Little Red Dot!</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Michelle Lee");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Shaun Lin</h4>
            </Container>
            <br />
            <p>Environmental and Community Impact, Cambodia</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Shaun Lin");
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
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}>
            <Container
              sx={{
                backgroundColor: "#CB8909",
                padding: 3,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {/* <h4 style={{ fontWeight: "bold" }}>IEX Bandung</h4> */}
              <h4 style={{ fontWeight: "bold" }}>Dr Mikhail Filippov</h4>
            </Container>
            <br />
            <p>Digital Communities</p>
            <p>Technologies for social good. CivTech</p>
            {!questionnaireOpen ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  showQuestionnaire(true);
                  setActiveClass("Dr Mikhail Filippov");
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
        {/* <Grid item xs={4}>
        <Box sx={{ backgroundColor: "white", padding: 2 }}>
          <Container
            sx={{
              backgroundColor: "#CB8909",
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>IEX</div>
            <div style={{ color: "black", textDecoration: "underline" }}>
              Match me
            </div>
          </Container>
          <br />
          <h5>Current groups:</h5>
          <p>Group 1</p>
          <p>Group 2</p>
        </Box>
      </Grid> */}
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
