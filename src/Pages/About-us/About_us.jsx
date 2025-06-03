import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Paper } from "@mui/material";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";


const API_ABOUT_US = "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/";

function QuienesSomos() {
  const [data_about_us, setdata_about_us] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { authorization: 'Bearer ipss.get' };
        const response = await fetch(API_ABOUT_US, { headers });
        if (!response.ok) {
          throw new Error('Error al cargar la información de Quiénes Somos');
        }
        const data = await response.json();
        console.log("Respuesta de la API About Us:", data); 
        setdata_about_us(data.data || ""); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
      <CircularProgress />
      <Typography ml={2}>Cargando información...</Typography>
    </Box>
  );

  if (error) return (
    <Box>
      <Typography color="error">{error}</Typography>
    </Box>
  );

  return (
    <>
      <Header />
      <Box
        p={{ xs: 2, sm: 4 }}
        sx={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#3b4a54",
            mb: 4,
            textShadow: "1px 1px 8px #b0bec5"
          }}
        >
          ¿Quiénes Somos?
        </Typography>
        <Paper
          elevation={4}
          sx={{
            maxWidth: 700,
            padding: 4,
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
            borderRadius: 4,
            boxShadow: "0 4px 24px 0 rgba(60,72,88,0.12)",
            fontSize: "1.2rem",
            color: "#374151",
            lineHeight: 1.7,
            textAlign: "justify"
          }}
        >
          <Typography variant="body1">{data_about_us}</Typography>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}

export default QuienesSomos;