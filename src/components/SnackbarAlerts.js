import React from 'react';
import { Snackbar, Alert } from "@mui/material";

const SnackbarAlerts = ({ alertOpen, handleAlertClose, infoOpen, handleInfoClose, copyOpen, handleCopyClose }) => (
  <>
    <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
      <Alert onClose={handleAlertClose} severity="error">
        URL no válida, verifique la url.
      </Alert>
    </Snackbar>
    <Snackbar open={infoOpen} autoHideDuration={6000} onClose={handleInfoClose}>
      <Alert onClose={handleInfoClose} severity="info">
        Copie el siguiente vínculo para unirse a la llamada.
      </Alert>
    </Snackbar>
    <Snackbar open={copyOpen} autoHideDuration={6000} onClose={handleCopyClose}>
      <Alert onClose={handleCopyClose} severity="success">
        Link copiado al portapapeles.
      </Alert>
    </Snackbar>
  </>
);

export default SnackbarAlerts;
