import React from "react";
import {
  Button,
  Container,
  TextField,
  Box,
  IconButton,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const getTextFieldProps = (darkMode, disabled = false) => ({
  fullWidth: true,
  margin: "normal",
  variant: "outlined",
  style: {
    backgroundColor: disabled ? (darkMode ? "#555" : "#edf6f9") : darkMode ? "#333" : "#edf6f9",
    borderRadius: "5px",
  },
  InputProps: {
    style: {
      color: darkMode ? "#fff" : "#000",
      fontWeight: "bold",
    },
  },
  InputLabelProps: {
    style: { color: darkMode ? "#fff" : "#000" },
  },
});

const CallControls = ({
  url,
  inputUrl,
  setInputUrl,
  handleCreateCall,
  handleJoinCall,
  handleCopy,
  darkMode,
}) => {
  return (
    <Container
      maxWidth="sm"
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "30px",
          textAlign: "center",
          background: darkMode
            ? "linear-gradient(to right, #434343, #000000)"
            : "linear-gradient(to right, #f8ffae, #43c6ac)",
          borderRadius: "15px",
        }}
      >
        <Box mb={3}>
          <Button
            variant="contained"
            onClick={handleCreateCall}
            fullWidth
            startIcon={<VideoCallIcon />}
            style={{
              marginBottom: "20px",
              backgroundColor: "#006d77",
              color: "#edf6f9",
              fontWeight: "bold",
              padding: "10px 0",
              borderRadius: "10px",
            }}
          >
            Crear Reunión
          </Button>
          {url && (
            <Box mt={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={10}>
                  <TextField
                    value={url}
                    disabled
                    {...getTextFieldProps(darkMode, true)}
                    InputProps={{
                      ...getTextFieldProps(darkMode, true).InputProps,
                      style: {
                        ...getTextFieldProps(darkMode, true).InputProps.style,
                        WebkitTextFillColor: darkMode ? "#fff" : "#000", // Ensures better visibility in dark mode
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    onClick={handleCopy}
                    aria-label="copy to clipboard"
                    style={{ backgroundColor: "#83c5be", color: "#006d77" }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Typography
                variant="body1"
                mt={2}
                style={{ color: "#006d77", fontWeight: "bold" }}
              >
                Comparta el link para unir a alguien a la llamada o pegue la url
                en la parte de abajo.
              </Typography>
            </Box>
          )}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Ingresa un código o vínculo"
            {...getTextFieldProps(darkMode)}
          />
          <Button
            variant="contained"
            onClick={handleJoinCall}
            disabled={!inputUrl.trim()}
            startIcon={<GroupAddIcon />}
            style={{
              marginLeft: "10px",
              backgroundColor: "#006d77",
              color: "#edf6f9",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            Unirse
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CallControls;
