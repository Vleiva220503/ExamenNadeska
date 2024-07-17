import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBarComponent from './components/AppBarComponent';
import CallControls from './components/CallControls';
import SnackbarAlerts from './components/SnackbarAlerts';
import { createCall, joinCall } from './utils';

const App = () => {
  const [url, setUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [copyOpen, setCopyOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCreateCall = async () => {
    const callUrl = await createCall();
    if (callUrl) {
      setUrl(callUrl);
      setInfoOpen(true);
    }
  };

  const handleJoinCall = () => {
    if (!joinCall(inputUrl)) {
      setAlertOpen(true);
    }
  };

  const handleAlertClose = () => setAlertOpen(false);
  const handleInfoClose = () => setInfoOpen(false);
  const handleCopyClose = () => setCopyOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopyOpen(true);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2', // Blue light in dark mode
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#d32f2f', // Pink light in dark mode
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <CallControls 
        url={url}
        inputUrl={inputUrl}
        setInputUrl={setInputUrl}
        handleCreateCall={handleCreateCall}
        handleJoinCall={handleJoinCall}
        handleCopy={handleCopy}
        darkMode={darkMode}
      />
      <SnackbarAlerts 
        alertOpen={alertOpen}
        handleAlertClose={handleAlertClose}
        infoOpen={infoOpen}
        handleInfoClose={handleInfoClose}
        copyOpen={copyOpen}
        handleCopyClose={handleCopyClose}
      />
    </ThemeProvider>
  );
};

export default App;
