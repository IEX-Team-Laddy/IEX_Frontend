// mui imports
import { Button, Card, Paper, Stack } from "@mui/material";

export default function UniversalPopup({ popupText, closePopUp }) {
  return (
    <Card
      sx={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        textAlign: "center",
        padding: 5,
        backgroundColor: "#f5f7fa",
        border: "1px solid black",
        borderRadius: 3,
      }}
      elevation={5}
    >
      <Stack sx={{ alignItems: "center" }} direction="column" spacing={3}>
        <Paper
          sx={{
            padding: 2,
            backgroundColor: "#F0D4C4",
            color: "black",
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
          elevation={2}
        >
          <div id="universal-popup-text">{popupText}</div>
        </Paper>
        <Button
          sx={{
            backgroundImage: "linear-gradient(#893BE6, #F19065)",
            fontWeight: "bold",
          }}
          variant="contained"
          onClick={closePopUp}
        >
          Ok
        </Button>
      </Stack>
    </Card>
  );
}
