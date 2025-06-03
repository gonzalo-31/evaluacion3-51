import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Banner = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: { xs: 250, sm: 320, md: 450 },
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mt: 0,
    }}
  >
    <Box
      component="img"
      src="/imagenes/descargar.jpg"
      alt="Banner"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: 2,
      }}
    />
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        color: "#fff",
        textAlign: "center",
        px: { xs: 2, sm: 4 },
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2.2rem", md: "3rem" },
          fontWeight: "bold",
          mb: 2,
        }}
      >
        ¡Bienvenido a la Tienda!
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          mb: 4,
        }}
      >
        Insumos para tejido, lanas naturales y vellón de alta calidad.<br />
        Encuentra los mejores productos aquí para tus proyectos de tejido.
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: { xs: 2, sm: 4 },
          px: { xs: 3, sm: 6 },
          py: { xs: 1, sm: 1.5 },
          fontSize: { xs: "1rem", sm: "1.2rem" },
          background: "linear-gradient(90deg, #91AA9D 0%, #ffffff 100%)",
          color: "#333",
          borderRadius: "30px",
          fontWeight: "bold",
          boxShadow: "0 4px 16px rgba(25,118,210,0.15), 0 2px 8px rgba(0,0,0,0.10)",
          letterSpacing: "1px",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            background: "linear-gradient(90deg, #91AA9D 20%, #e0e7ef 100%)",
            transform: "scale(1.07)",
            boxShadow: "0 8px 24px rgba(25,118,210,0.25), 0 4px 16px rgba(0,0,0,0.15)",
          },
        }}
        onClick={() => window.location.href = "/productos"}
      >
        Descubre más
      </Button>
    </Box>
  </Box>
);

export default Banner;
