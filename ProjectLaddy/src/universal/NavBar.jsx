import { Routes, Route, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Landing from "../landing/Landing";
import Auth from "../auth/Auth";
import AdminMatch from "../universal/AdminMatch"; // Ensure this path is correct
import { useState } from "react";
import { supabase } from "../supabase";
import logo from "../Assets/Asset1.png";
import { Link as ScrollLink } from 'react-scroll';

export default function NavBar() {
  const [dashboard, renderDashboard] = useState(false);
  const [navBar, navBarOpen] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (e) => {
    setOpen(true);
  };

  function renderDashboardOnSignIn(session) {
    renderDashboard(session === null);
  }

  function hideDashboard() {
    renderDashboard(false);
  }

  function showDashboard() {
    renderDashboard(true);
  }

  return (
    <>
      {dashboard ? (
        <></>
      ) : (
        <>
          <div>
            <nav
              style={{ backgroundColor: "#fffaf0" }}
              className="navbar navbar-expand-lg navbar-dark"
            >
              <div>
                <img src={logo} width={220} height={40} />
              </div>
              <div id="navbar-brand" className="navbar-brand-aria"></div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  backgroundColor: "#170F49",
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto" style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between' }}>
                  <li style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button color="inherit" component={NavLink} to="/" style={{ color: '#000000', marginRight: '40px' }}>Home</Button>
                      <Button color="inherit" href="#about-us" style={{ color: '#000000', marginRight: '40px' }}>About Us</Button>
                      <Button color="inherit" component="a" href="https://forms.gle/PWsDFzBuRWWryAaA6" target="_blank" style={{ color: '#000000', marginRight: '40px' }}>Questionnaire</Button>
                      <Button color="inherit" component="a" href="mailto:projectladdy@gmail.com" style={{ color: '#000000', marginRight: '40px' }}>Contact Us</Button>
                    </div>
                  </li>
                </ul>
              </div>
              <li style={{ listStyleType: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#30203C",
                    borderRadius: 20,
                    padding: 9,
                    fontWeight: "normal",
                    marginRight: "30px",
                  }}
                >
                  <NavLink
                    id="profile-nav-link"
                    to="/auth"
                    style={{
                      color: "White",
                    }}
                  >
                    Get started
                  </NavLink>
                </Button>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#FFFAF0",
                    borderRadius: 20,
                    padding: 9,
                    marginRight: "40px",
                  }}
                >
                  <NavLink
                    id="profile-nav-link"
                    to="/auth"
                    style={{
                      color: "Black",
                    }}
                  >
                    Log In
                  </NavLink>
                </Button>
              </li>
            </nav>
          </div>
        </>
      )}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/languages" element={<Landing />} />
        <Route
          exact
          path="/auth"
          element={
            <Auth
              showDashboard={showDashboard}
              hideDashboard={hideDashboard}
            />
          }
        />
        <Route exact path="/adminmatch" element={<AdminMatch />} />
      </Routes>
    </>
  );
}
