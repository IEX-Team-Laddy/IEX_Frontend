import { Add } from "@mui/icons-material";
import {
  Container,
  Backdrop,
  Grid,
  Stack,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { useState } from "react";

export default function Teams() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (e) => {
    setOpen(true);
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{ fontFamily: "Montserrat", textAlign: "left" }}
    >
      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Search for your class or project"
            sx={{ width: "100vw" }}
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
      <Grid item xs={4}>
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
            <div>HS1501</div>
            <div style={{ color: "black", textDecoration: "underline" }}>
              Match me
            </div>
          </Container>
          <br />
          <h5>Current groups:</h5>
          <p>Group 1</p>
          <p>Group 2</p>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ backgroundColor: "white", padding: 2 }}>
          <Container
            sx={{
              backgroundColor: "#CB8909",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>EC3303</div>
            <div style={{ color: "black", textDecoration: "underline" }}>
              Match me
            </div>
          </Container>
          <br />
          <h5>Current groups:</h5>
          <p>Group 1</p>
          <p>Group 2</p>
        </Box>
      </Grid>
      <Grid item xs={4}>
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
      </Grid>
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
    </Grid>
  );
}
