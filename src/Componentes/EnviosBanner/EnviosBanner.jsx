// EnviosBanner.jsx
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function EnviosBanner() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#A5D6A7",
        color: "#222",
        borderRadius: 2,
        p: 2,
        my: 3,
        boxShadow: 2,
        fontWeight: 600,
        fontSize: "1.2rem"
      }}
    >
      <LocalShippingIcon sx={{ mr: 1, fontSize: 32, color: "#388e3c" }} />
      Despachos a Santiago y regiones de Chile a través de <b>Starken</b> y <b>Chilexpress</b>.
    </Box>
  );
}

export default EnviosBanner;