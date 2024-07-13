import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Groups2Outlined,
  Home,
  QuestionAnswer,
  Person,
  Chat,
  ExitToApp,
  DensityMedium,
} from "@mui/icons-material";
import HomeScreen from "./HomeScreen";
import Questionnaire from "./Questionnaire";
import Teams from "./Teams";
import Account from "./Account";
import FeedbackForm from "./FeedbackForm";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Dashboard({ hideDashboard }) {
  const [sideBarOpen, openSideBar] = useState(false);
  const [homeOpen, openHome] = useState(false);
  const [questionnaireOpen, openQuestionnaire] = useState(false);
  const [teamsOpen, openTeams] = useState(true);
  const [accountOpen, openAccount] = useState(false);
  const [feedbackOpen, openFeedback] = useState(false);
  const [userData, setUserData] = useState({});
  const [loginEmail, setLoginEmail] = useState("");

  async function retrieveCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    setUserData(data.user);
    setLoginEmail(data.user.email);
  }

  async function signOut(e) {
    e.preventDefault();
    hideDashboard();
    const { data, error } = await supabase.auth.signOut();
  }

  useEffect(() => {
    retrieveCurrentUser();
  }, []);

  const list = (anchor) => (
    <Box sx={{ width: "auto" }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            {/* <ListItemIcon>
              < />
            </ListItemIcon> */}
            <Button
              onClick={signOut}
              endIcon={<ExitToApp />}
              variant="outlined"
              sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
            >
              Sign Out
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              e.preventDefault();
              openSideBar(false);
              openHome(true);
              openQuestionnaire(false);
              openTeams(false);
              openAccount(false);
            }}
          >
            <ListItemIcon>
              <Home sx={{ color: "purple" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Dashboard"}
              sx={{ textDecoration: homeOpen ? "underline" : "none" }}
            />
          </ListItemButton>
        </ListItem> */}
        {/* <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              e.preventDefault();
              openSideBar(false);
              openHome(false);
              openQuestionnaire(true);
              openTeams(false);
              openAccount(false);
            }}
          >
            <ListItemIcon>
              <QuestionAnswer sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Questionnaire"}
              sx={{ textDecoration: questionnaireOpen ? "underline" : "none" }}
            />
          </ListItemButton>
        </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              e.preventDefault();
              openSideBar(false);
              openHome(false);
              openQuestionnaire(false);
              openTeams(true);
              openAccount(false);
              openFeedback(false);
            }}
          >
            <ListItemIcon>
              <Groups2Outlined sx={{ color: "orange" }} />
            </ListItemIcon>
            <ListItemText primary={"Teams"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              e.preventDefault();
              openSideBar(false);
              openHome(false);
              openSideBar(false);
              openQuestionnaire(false);
              openTeams(false);
              openAccount(true);
              openFeedback(false);
            }}
          >
            <ListItemIcon>
              <Person sx={{ color: "pink" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Account"}
              sx={{ textDecoration: accountOpen ? "underline" : "none" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              e.preventDefault();
              openSideBar(false);
              openHome(false);
              openSideBar(false);
              openQuestionnaire(false);
              openTeams(false);
              openAccount(false);
              openFeedback(true);
            }}
          >
            <ListItemIcon>
              <Chat sx={{ color: "blue" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Feedback"}
              sx={{ textDecoration: feedbackOpen ? "underline" : "none" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {!sideBarOpen && (
        <Button
          onClick={(e) => {
            e.preventDefault();
            openSideBar(true);
          }}
          sx={{
            display: "flex",
            backgroundColor: "#F86204",
          }}
          variant="contained"
        >
          <DensityMedium />
        </Button>
      )}
      <br />
      <div
        onClick={(e) => {
          e.preventDefault();
          openSideBar(false);
        }}
      >
        {homeOpen && <HomeScreen />}
        {questionnaireOpen && <Questionnaire />}
        {teamsOpen && <Teams userData={userData} />}
        {accountOpen && <Account loginEmail={loginEmail} />}
        {feedbackOpen && <FeedbackForm />}
      </div>
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <Drawer anchor="left" open={sideBarOpen} hideBackdrop>
        {list("left")}
      </Drawer>
    </div>
  );
}
