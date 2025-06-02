import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      px: 2,
      mt: "auto",
      backgroundColor: "#1976d2",
      color: "#fff",
      textAlign: "center",
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Mi Aplicación —{" "}
      <Link href="#" color="inherit" underline="hover">
        Contacto
      </Link>
    </Typography>
  </Box>
);

export default Footer;