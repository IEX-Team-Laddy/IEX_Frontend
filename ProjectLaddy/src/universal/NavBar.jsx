import { Routes, Route, NavLink } from "react-router-dom";
import { Button, Backdrop, Stack, Paper, Avatar } from "@mui/material";
import Landing from "../landing/Landing";
import Auth from "../auth/Auth";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import dna from "../images/dna.png";

export default function NavBar() {
  const [dashboard, renderDashboard] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(<div>English 🇺🇸</div>);
  // const [currentSession, setCurrentSession] = useState(null);
  // const [loginEmail, setLoginEmail] = useState("");

  function changeLang(elem) {
    setCurrentLang(elem);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (e) => {
    setOpen(true);
  };

  // console.log(currentLang.props.children);

  function renderDashboardOnSignIn(session) {
    // e.preventDefault();
    // setCurrentSession(session);
    // setLoginEmail(loginEmail);
    renderDashboard(session === null);
    console.log(session);
    console.log(dashboard);
  }

  function hideDashboard(e) {
    e.preventDefault();
    renderDashboard(false);
  }

  async function retrieveSession() {
    const { data, error } = await supabase.auth.getSession();
    renderDashboard(data.session !== null);
    console.log(data.session);
  }

  useEffect(() => {
    retrieveSession();
  }, []);

  const languageOptions = [
    <div>English 🇺🇸</div>,
    <div>Spanish 🇪🇸</div>,
    <div>Mandarin 🇨🇳</div>,
    <div>Hindi 🇮🇳</div>,
  ];

  return (
    <>
      {false ? (
        <></>
      ) : (
        <>
          <div>
            <nav
              style={{ backgroundColor: "white" }}
              className="navbar navbar-expand-lg navbar-dark"
            >
              <div>
                <img src={dna} width={50} height={50} />
              </div>
              <div id="navbar-brand" className="navbar-brand-aria">
                <NavLink
                  id="aria-nav-link"
                  to="/"
                  style={({ isActive }) => ({
                    color: "#ED7D31",
                    fontFamily: "Montserrat",
                  })}
                >
                  LADDY
                </NavLink>
              </div>
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
                <ul className="navbar-nav ml-auto">
                  {/* <li>
                    <div id="navbar-gpa" className="nav-item nav-link">
                      <NavLink
                        id="gpa-nav-link"
                        to="/"
                        style={({ isActive }) => ({
                          color: "#170F49",
                        })}
                      >
                        Home
                      </NavLink>
                    </div>
                  </li> */}
                  {/* <li>
                    <div id="navbar-gpa" className="nav-item nav-link">
                      <NavLink
                        id="gpa-nav-link"
                        to="/about"
                        style={({ isActive }) => ({
                          color: isActive ? "#170F49" : "grey",
                        })}
                      >
                        About
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div id="navbar-gpa" className="nav-item nav-link">
                      <NavLink
                        id="gpa-nav-link"
                        to="/blog"
                        style={({ isActive }) => ({
                          color: isActive ? "#170F49" : "grey",
                        })}
                      >
                        Blog
                      </NavLink>
                    </div>
                  </li> */}
                  {/* <li>
                <div id="navbar-gpa" className="nav-item nav-link">
                  <NavLink
                    id="gpa-nav-link"
                    to="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      renderSignUpPage(false);
                    }}
                    style={({ isActive }) => ({
                      color: isActive ? "#170F49" : "grey",
                    })}
                  >
                    Services
                  </NavLink>
                </div>
              </li>
              <li>
                <div id="navbar-gpa" className="nav-item nav-link">
                  <NavLink
                    id="gpa-nav-link"
                    to="/pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      renderSignUpPage(false);
                    }}
                    style={({ isActive }) => ({
                      color: isActive ? "#170F49" : "grey",
                    })}
                  >
                    Pricing
                  </NavLink>
                </div>
              </li> */}
                  <li>
                    <div id="currentLang" className="nav-item nav-link">
                      <Button
                        variant="contained"
                        onClick={handleOpen}
                        style={{
                          backgroundColor: "#EFF0F6",
                          borderRadius: 20,
                          padding: 15,
                          fontFamily: "DM Sans",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {currentLang}
                      </Button>
                      <Backdrop
                        sx={{
                          color: "#fff",
                          zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={open}
                        onClick={handleClose}
                      >
                        <Paper
                          elevation={10}
                          sx={{
                            backgroundImage:
                              "linear-gradient(#E98356, #B27FC6)",
                            padding: 10,
                            borderRadius: 10,
                          }}
                        >
                          <Stack spacing={2}>
                            {languageOptions
                              .filter(
                                (elem) =>
                                  elem.props.children !==
                                  currentLang.props.children
                              )
                              .map((elem, idx) => {
                                return (
                                  <Button
                                    variant="contained"
                                    key={idx}
                                    onClick={() => changeLang(elem)}
                                    style={{
                                      backgroundColor: "white",
                                      borderRadius: 20,
                                      color: "black",
                                      fontFamily: "DM Sans",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {elem}
                                  </Button>
                                );
                              })}
                          </Stack>
                        </Paper>
                      </Backdrop>
                    </div>
                  </li>
                  <li>
                    <div id="navbar-username" className="nav-item nav-link">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#9835FB",
                          borderRadius: 20,
                          padding: 15,
                          fontFamily: "DM Sans",
                          fontWeight: "bold",
                        }}
                      >
                        <NavLink
                          id="profile-nav-link"
                          to="/auth"
                          style={{
                            color: "white",
                          }}
                        >
                          Get started
                        </NavLink>
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </>
      )}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/blog" element={<Landing />} /> */}
        {/* <Route exact path="/services" element={<Landing />} />
        <Route exact path="/pricing" element={<Landing />} /> */}
        <Route exact path="/languages" element={<Landing />} />
        <Route
          exact
          path="/auth"
          element={<Auth renderDashboard={renderDashboardOnSignIn} />}
        />
        <Route exact path="*" element={<Landing />} />
      </Routes>
    </>
  );
}
