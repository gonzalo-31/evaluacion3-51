// EnviosBanner.jsx
import { Box } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function EnviosBanner() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #e0e7ef 0%, #91AA9D 100%)",
        color: "#374151",
        borderRadius: 2,
        p: { xs: 1, sm: 2 },
        my: 3,
        boxShadow: 2,
        fontWeight: 600,
        fontSize: { xs: "1rem", sm: "1.2rem" }
      }}
    >
      <LocalShippingIcon sx={{ mr: 1, fontSize: { xs: 24, sm: 32 }, color: "#388e3c" }} />
      Despachos a Santiago y regiones de Chile a través de{" "}
      <b style={{ margin: "0 6px" }}>Starken</b>
      <span style={{ fontWeight: 400, margin: "0 6px" }}>y</span>
      <b style={{ margin: "0 6px" }}>Chilexpress</b>.
    </Box>
  );
}

export default EnviosBanner;