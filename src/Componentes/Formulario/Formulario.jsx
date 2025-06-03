import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, IconButton, DialogTitle, Dialog, DialogContent, DialogActions, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

const FormularioContacto = ({ onClose, productoProp }) => {
  const location = useLocation();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [producto, setProducto] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [colorSeleccionado, setColorSeleccionado] = useState("");


  const tallas = productoProp?.tallas || [];
  const colores = productoProp?.colores || [];


  useEffect(() => {
    if (productoProp) {
      setProducto(productoProp.nombre);
      if (productoProp.tipo === "producto") {
        setMensaje(`Hola, me interesa el producto: ${productoProp.nombre}`);
      } else if (productoProp.tipo === "servicio") {
        setMensaje(`Hola, me interesa el servicio: ${productoProp.nombre}`);
      } else {
        setMensaje(`Hola, me interesa el producto/servicio: ${productoProp.nombre}`);
      }
    } else if (location.state && location.state.producto) {
      setProducto(location.state.producto);
      setMensaje(`Hola, me interesa el producto/servicio: ${location.state.producto}`);
    }
  }, [productoProp, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setOpenConfirm(true);
    setNombre("");
    setEmail("");
    setMensaje("");
    setProducto("");
    setTallaSeleccionada("");
    setColorSeleccionado("");
    setTimeout(() => setEnviado(false), 4000);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
    if (onClose) onClose();
  };

  return (
    <>
      <Box
        sx={{
          p: 4,
          background: "linear-gradient(135deg, #e0e7ef 0%, #f8fafc 100%)",
          borderRadius: 4,
          boxShadow: "0 8px 32px 0 rgba(60,72,88,0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 480,
          width: "100%",
          position: "relative",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <DialogTitle sx={{ p: 0, mb: 2, width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              letterSpacing: 1,
              textShadow: "0 2px 8px #b0bec5",
              display: "inline-block",
            }}
          >
            Contáctanos
          </Typography>
          {onClose && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
        <TextField
          label="Nombre"
          variant="outlined"
          size="medium"
          fullWidth
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          sx={{ mb: 2, background: "#fff", borderRadius: 2 }}
        />
        <TextField
          label="Correo electrónico"
          variant="outlined"
          size="medium"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2, background: "#fff", borderRadius: 2 }}
        />
        <TextField
          label="Producto o servicio"
          variant="outlined"
          size="medium"
          fullWidth
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          sx={{ mb: 2, background: "#fff", borderRadius: 2 }}
          InputProps={{
            readOnly: !!productoProp,
          }}
        />
        {tallas.length > 0 && (
          <FormControl fullWidth sx={{ mb: 2, background: "#fff", borderRadius: 2 }}>
            <InputLabel id="talla-label">Talla</InputLabel>
            <Select
              labelId="talla-label"
              value={tallaSeleccionada}
              label="Talla"
              onChange={(e) => setTallaSeleccionada(e.target.value)}
              required
            >
              {tallas.map((talla) => (
                <MenuItem key={talla} value={talla}>{talla}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {colores.length > 0 && (
          <FormControl fullWidth sx={{ mb: 2, background: "#fff", borderRadius: 2 }}>
            <InputLabel id="color-label">Color</InputLabel>
            <Select
              labelId="color-label"
              value={colorSeleccionado}
              label="Color"
              onChange={(e) => setColorSeleccionado(e.target.value)}
              required
            >
              {colores.map((color) => (
                <MenuItem key={color} value={color}>{color}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <TextField
          label="Mensaje"
          variant="outlined"
          size="medium"
          fullWidth
          required
          multiline
          minRows={3}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          sx={{ mb: 3, background: "#fff", borderRadius: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            fontWeight: "bold",
            fontSize: 18,
            py: 1.2,
            borderRadius: 2,
            boxShadow: "0 2px 8px 0 rgba(25,118,210,0.10)",
            letterSpacing: 1,
          }}
        >
          Enviar solicitud
        </Button>
      </Box>
      <Dialog open={openConfirm} onClose={handleCloseConfirm}>
        <DialogContent>
          <Typography fontWeight="bold" fontSize={18} align="center" sx={{ mb: 2 }}>
            ¡Solicitud enviada!
          </Typography>
          <Typography align="center">
            Te contactaremos a la brevedad.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} variant="contained" color="primary" fullWidth>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormularioContacto;