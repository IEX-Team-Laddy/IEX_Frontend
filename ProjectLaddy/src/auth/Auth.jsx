import {
  Box,
  Button,
  Grid,
  Container,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Backdrop,
  Typography,
} from "@mui/material";
import {
  Badge,
  Email,
  Key,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import UniversalPopup from "../universal/UniversalPopup";
import Dashboard from "../dashboard/Dashboard";
import Asset3 from "../Assets/Asset3.png";

export default function Auth({ hideDashboard, showDashboard }) {
  const [session, setSession] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [currentLoginEmail, setLoginEmail] = useState("");
  const [dashboardOpen, openDashboard] = useState(false);

  // internal bad user input handling
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [mobileInvalid, setMobileInvalid] = useState(false);
  const [passwordMatching, setPasswordMatching] = useState(true);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);

  // supabase states
  const [accountCreationFail, setAccountCreationFail] = useState(false);
  const [accountCreationSuccess, setAccountCreationSuccess] = useState(false);
  const [accountLoginFail, setAccountLoginFail] = useState(false);
  const [currentUserEmailData, setCurrentUserEmailData] = useState([]);

  async function fetchUserData() {
    const { data } = await supabase.from("users").select();
    setCurrentUserEmailData(data.map(({ email }) => email));
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  function toggleVisibility(e) {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  }

  const validUsernameRegex = /^[a-zA-Z0-9]/;
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  async function supabaseLogIn(e) {
    e.preventDefault();
    const loginEmail = document.getElementById("user_login_email").value;
    const loginPassword = document.getElementById("user_login_password").value;
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    if (error) {
      setAccountLoginFail(true);
    } else {
      showDashboard();
    }
  }

  async function supabaseRecoverPassword(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      document.getElementById("user_login_email").value
    );
    console.log(data);
  }

  async function supabaseSignUp(e) {
    e.preventDefault();

    const signUpUsername = document.getElementById("user_first_name").value;
    const signUpEmail = document.getElementById("user_email").value;
    const signUpPassword = document.getElementById("user_password").value;
    const confirmSignUpPassword = document.getElementById(
      "user_confirm_password"
    ).value;

    let usernameError = null;
    let emailError = null;
    let emailTaken = null;
    let passwordError = null;
    let termsAndConditionsError = null;

    const errors = [
      usernameError,
      emailError,
      emailTaken,
      passwordError,
      termsAndConditionsError,
    ];

    if (
      !signUpUsername.match(validUsernameRegex) ||
      signUpUsername.match(validEmailRegex)
    ) {
      errors[0] = true;
      setUsernameInvalid(true);
    } else {
      errors[0] = false;
      setUsernameInvalid(false);
    }

    if (!signUpEmail.match(validEmailRegex)) {
      errors[1] = true;
      setEmailInvalid(true);
    } else {
      errors[1] = false;
      setEmailInvalid(false);
    }

    if (currentUserEmailData.includes(signUpEmail)) {
      errors[2] = true;
      setEmailTaken(true);
      document.getElementById("user_email").classList.add("error");
    } else {
      errors[2] = false;
      setEmailTaken(false);
    }

    if (!(signUpPassword === confirmSignUpPassword)) {
      errors[3] = true;
      setPasswordMatching(false);
      document.getElementById("user_password").classList.add("error");
      document.getElementById("user_confirm_password").classList.add("error");
    } else {
      errors[3] = false;
      setPasswordMatching(true);
    }

    if (!document.getElementById("termsAndConditionsError").checked) {
      errors[4] = true;
      document
        .getElementById("termsAndConditionsMessage")
        .classList.add("error");
    } else {
      errors[4] = false;
      document
        .getElementById("termsAndConditionsMessage")
        .classList.remove("error");
    }

    if (!errors.includes(true)) {
      const { error } = await supabase.auth.signUp({
        email: signUpEmail,
        password: signUpPassword,
        options: {
          data: {
            username: signUpUsername,
          },
        },
      });
      if (error) {
        setAccountCreationFail(true);
      } else {
        const { data, error } = await supabase.auth.getUser();
        await supabase.from("users").insert({
          email: signUpEmail,
          username: signUpUsername,
          university: "NUS",
          id: data.user.id,
        });
        setAccountCreationSuccess(true);
      }
    }
  }

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.data.subscription.unsubscribe();
  }, []);

  async function retrieveSession() {
    const { data, error } = await supabase.auth.getSession();
    data.session !== null ? showDashboard() : hideDashboard();
    openDashboard(data.session !== null);
  }

  useEffect(() => {
    retrieveSession();
  });

  function closePopUpLoginFail(e) {
    e.preventDefault();
    setAccountLoginFail(false);
  }

  function closePopUpSignUpFail(e) {
    e.preventDefault();
    setAccountCreationFail(false);
  }

  function closePopUpSignupSuccess(e) {
    e.preventDefault();
    setAccountCreationSuccess(false);
  }

  function handleCloseLoginFail() {
    setAccountLoginFail(false);
  }

  function handleCloseSignUpFail() {
    setAccountCreationFail(false);
  }

  function handleCloseSignUpSuccess() {
    setAccountCreationSuccess(false);
  }

  return (
    <>
      {dashboardOpen ? (
        <Dashboard hideDashboard={hideDashboard} />
      ) : (
        <Box sx={{ padding: 5 }}>
          <Backdrop
            sx={{
              color: "White",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={accountLoginFail}
            onClick={handleCloseLoginFail}
          >
            <UniversalPopup
              closePopUp={closePopUpLoginFail}
              popupText={"Login failed. Check email/password?"}
            />
          </Backdrop>
          <Backdrop
            sx={{
              color: "White",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={accountCreationFail}
            onClick={handleCloseSignUpFail}
          >
            <UniversalPopup
              closePopUp={closePopUpSignUpFail}
              popupText={"Signup failed. Check fields?"}
            />
          </Backdrop>
          {signUp ? (
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <Container
                  style={{
                    backgroundColor: "#FFFAF0",
                    padding: 20,
                    height: 595.92,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img width={600} src={Asset3} />
                </Container>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Container
                  style={{
                    backgroundColor: "#FFFAF0",
                    padding: 50,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: "#A87FDB",
                      textAlign: "Center",
                      mb: 1,
                    }}
                  >
                    Dive right in.
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#000000",
                      textAlign: "Center",
                      mb: 7,
                    }}
                  >
                    Set up your account.
                  </Typography>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="First Name"
                      id="user_first_name"
                      style={{ backgroundColor: "White", }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Badge />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      id="user_email"
                      style={{ backgroundColor: "White", marginTop: '30px'  }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {emailInvalid && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        Invalid email!
                      </Typography>
                    )}
                    {emailTaken && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        Email taken!
                      </Typography>
                    )}
                    <TextField
                      fullWidth
                      label="Password"
                      id="user_password"
                      type={passwordVisible ? "text" : "password"}
                      style={{ backgroundColor: "White", marginTop: '30px' }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Key />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={toggleVisibility}>
                              {passwordVisible ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      id="user_confirm_password"
                      type={passwordVisible ? "text" : "password"}
                      style={{ backgroundColor: "white", marginTop: '30px' }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Key />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={toggleVisibility}>
                              {passwordVisible ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {!passwordMatching && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        Passwords don't match!
                      </Typography>
                    )}
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="termsAndConditionsError"
                          sx={{
                            color: "black",
                            "&.Mui-checked": { color: "black" },
                          }}
                        />
                      }
                      style={{
                        color: "#7F7F7F",
                        fontSize: 10,
                      }}
                      label={
                        <div id="termsAndConditionsMessage">
                          "I agree to the Terms and Conditions"
                        </div>
                      }
                    />
                  </Stack>
                  <br />
                  <Button
                    variant="contained"
                    onClick={supabaseSignUp}
                    style={{
                      backgroundColor: "#4B72C2",
                      fontFamily: "Montserrat",
                      fontSize: 12,
                      display: "flex",
                      justifyContent: "left",
                    }}
                  >
                    Sign me Up!
                  </Button>
                  <hr style={{ borderWidth: 1, borderColor: "black" }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: 15,
                      color: "#7F7F7F",
                      textAlign: "left",
                    }}
                  >
                    Already have an account?
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSignUp(false);
                        setEmailInvalid(false);
                        setEmailTaken(false);
                        setPasswordMatching(true);
                      }}
                      style={{
                        backgroundColor: "#FFFAF0",
                        border: "none",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        color: "#4B72C2",
                        cursor: "pointer",
                      }}
                    >
                      Sign In
                    </button>
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <Container
                  style={{
                    backgroundColor: "#FFFAF0",
                    padding: 20,
                    height: 740.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img width={700} src={Asset3} />
                </Container>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Container
                  style={{
                    backgroundColor: "#FFFAF0",
                    height: 740.5,
                    padding: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: "normal",
                        fontsize: "72",
                        color: "#E98356",
                        marginTop: "-200px",
                        textAlign: "Center",
                        mb: 6,
                      }}
                    >
                      Log In.
                    </Typography>
                    <Stack spacing={1}> {/* Adjusted spacing to 1 */}
                      <TextField
                        fullWidth
                        label="Email Address"
                        id="user_login_email"
                        style={{ backgroundColor: "white" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Password"
                        id="user_login_password"
                        type={passwordVisible ? "text" : "password"}
                        style={{ backgroundColor: "white", marginTop: '20px' }}/* Adjusted margin-top */
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Key />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={toggleVisibility}>
                                {passwordVisible ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Montserrat",
                          fontSize: 15,
                          color: "#7F7F7F",
                          textAlign: "left",
                          mt: 1, // Add space below "Log In."
                        }}
                      >
                        Need an account?
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSignUp(true);
                          }}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            fontFamily: "Montserrat",
                            fontWeight: "bold",
                            color: "#553BF1",
                            cursor: "pointer",
                          }}
                        >
                          Sign Up.
                        </button>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Montserrat",
                          fontSize: 15,
                          color: "#7F7F7F",
                          textAlign: "left",
                          mt: -1 // Adjusted margin-top to reduce space
                        }}
                      >
                        Forgot password?
                        <button
                          onClick={supabaseRecoverPassword}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            fontFamily: "Montserrat",
                            fontWeight: "bold",
                            color: "#553BF1",
                            cursor: "pointer",
                          }}
                        >
                          Recover.
                        </button>
                      </Typography>
                    </Stack>
                    <br />
                    <Button
                      variant="contained"
                      onClick={supabaseLogIn}
                      style={{
                        width: 200,
                        backgroundImage: "linear-gradient(#893BE6, #F19065)",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        fontSize: 12,
                        borderRadius: 15,
                      }}
                    >
                      Log In.
                    </Button>
                  </div>
                </Container>
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </>
  );
}
