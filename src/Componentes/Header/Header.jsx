import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/productos" },
  { label: "Sobre Nosotros", to: "/About_us" },
  { label: "Preguntas Frecuentes", to: "/Preguntas" }
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg,rgba(197, 197, 198, 0.8) 0%,rgba(185, 188, 191, 0.8) 100%)",
        boxShadow: "0 4px 24px 0 rgba(60,72,88,0.10)"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, sm: 3, md: 5 } }}>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
          >
            <img
              src="/imagenes/logo.png"
              alt="Logo"
              style={{
                height: 50,
                width: 50,
                marginRight: 16,
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              Tejelanas.Vivi
            </Typography>
          </Box>
        </Box>


        <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center", gap: 2 }}>
          {navLinks.map((nav) => (
            <Button key={nav.to} color="inherit" component={Link} to={nav.to}>
              {nav.label}
            </Button>
          ))}
        </Box>


        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.instagram.com/teje_lanas.vivi/"
            target="_blank"
            rel="noopener"
            sx={{ mr: 1 }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              alt="Instagram"
              style={{ width: 36, height: 36 }}
            />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.facebook.com/MezcliMam"
            target="_blank"
            rel="noopener"
            sx={{ mr: { xs: 0, md: 2 } }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000"
              alt="Facebook"
              style={{ width: 36, height: 36 }}
            />
          </IconButton>
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", ml: 1 }}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>


        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: { width: 240 }
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img
                src="/imagenes/logo.png"
                alt="Logo"
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 12,
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Tejelanas.Vivi
              </Typography>
            </Box>
            <Divider />
            <List>
              {navLinks.map((nav) => (
                <ListItem key={nav.to} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={nav.to}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={nav.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;