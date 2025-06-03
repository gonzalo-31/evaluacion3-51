import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: { xs: 2, sm: 3 },
      px: { xs: 1, sm: 4 },
      mt: "auto",
      background: "linear-gradient(135deg,rgb(176, 180, 183) 0%, #e0e7ef 100%)",
      color: "#374151",
      textAlign: "center",
      fontSize: { xs: "0.9rem", sm: "1rem" }
    }}
  >
    <Typography
      variant="body2"
      sx={{
        fontSize: { xs: "0.9rem", sm: "1rem" }
      }}
    >
      © {new Date().getFullYear()} tejelanasVivi — Todos los derechos reservados 
    </Typography>
  </Box>
);

export default Footer;