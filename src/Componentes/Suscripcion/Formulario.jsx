import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const FormularioSuscripcion = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const validarEmail = (correo) => {
    return /\S+@\S+\.\S+/.test(correo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarEmail(email)) {
      setError("Por favor ingresa un correo válido.");
      return;
    }
    setError("");
    setMensaje("¡Gracias por suscribirte a nuestras novedades!");
    setEmail("");
    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 4,
        mb: 3,
        p: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #e0e7ef 0%, #f8fafc 100%)",
        borderRadius: 4,
        boxShadow: "0 8px 32px 0 rgba(60,72,88,0.12)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        mb={2}
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          letterSpacing: 1,
          textShadow: "0 2px 8px #b0bec5",
        }}
      >
        ¡Suscríbete a nuestras novedades!
      </Typography>
      <TextField
        label="Correo electrónico"
        variant="outlined"
        size="medium"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          mb: 2,
          background: "#fff",
          borderRadius: 2,
        }}
        error={!!error}
        helperText={error}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          fontWeight: "bold",
          fontSize: 16,
          py: 1.2,
          borderRadius: 2,
          boxShadow: "0 2px 8px 0 rgba(25,118,210,0.10)",
          letterSpacing: 1,
        }}
      >
        Suscribirme
      </Button>
      {mensaje && (
        <Typography color="success.main" mt={3} fontWeight="bold" fontSize={16}>
          {mensaje}
        </Typography>
      )}
    </Box>
  );
};

export default FormularioSuscripcion;