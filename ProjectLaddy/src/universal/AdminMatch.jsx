import { Button } from "@mui/material";
import axios from "axios";

export default function AdminMatch() {
  const URL = "http://localhost:3001";

  function startMatching(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
      },
    };

    axios
      .post(URL + "/matches", "NPS2001A", config)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log(response);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <br />
      <Button
        onClick={startMatching}
        variant="contained"
        sx={{ backgroundColor: "#" }}
      >
        Match class
      </Button>
    </>
  );
}
