import { Box } from "@mui/material";

export default function FeedbackForm() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(#B27FC6, #E98356)",
        padding: 3,
        borderRadius: 5,
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf6QHIBKd-e4p28mfqIKmGFTlve8624Q1ypZOz8DV342aGf0Q/viewform?embedded=true"
        width="640"
        height="1014"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Box>
  );
}
