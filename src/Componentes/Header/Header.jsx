import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center", ml: 5 }}>
        <img
          src="/imagenes/logo.png"
          alt="Logo"
          style={{
            height: 70,
            width: 70,
            marginRight: 20,
            borderRadius: "50%", // Hace la imagen circular
            objectFit: "cover"
          }}
        />
        <Typography variant="h5" component="div">
          Tejelanas.Vivi
        </Typography>
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 2, mr: 18 }}>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/productos">Productos</Button>
        <Button color="inherit" component={Link} to="/sobre-nosotros">Sobre Nosotros</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ mr: 2 }}> siguenos en nuestras redes sociales</Typography>
      <IconButton
        color="inherit"
        component="a"
        href="https://www.instagram.com/teje_lanas.vivi/" // Cambia por tu enlace real
        target="_blank"
        rel="noopener"
        sx={{ mr: 1 }}
      >
        <img
          src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
          alt="Instagram"
          style={{ width: 50, height: 50 }}
        />

      </IconButton>
      <IconButton
        color="inherit"
        component="a"
        href="https://www.facebook.com/MezcliMam" // Cambia por tu enlace real
        target="_blank"
        rel="noopener"
        sx={{ mr: 5 }}
      >
         <img
          src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000"
          alt="Facebook"
          style={{ width: 50, height: 50 }}
        />
      </IconButton>
      </Box>
        </Toolbar>
  </AppBar>
);

export default Header;