import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const AppBarComponent = ({ darkMode, toggleDarkMode }) => (
  <AppBar position="static" style={{ backgroundColor: darkMode ? '#333' : '#4CAF50' }}>
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', color: darkMode ? '#f5f5f5' : '#fff' }}>
        Simulación de llamada examen Nadeska
      </Typography>
      <IconButton edge="end" color="inherit" onClick={toggleDarkMode}>
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;
