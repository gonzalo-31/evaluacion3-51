import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Card, CardContent } from "@mui/material";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";

// URL de la API para FAQ
const API_FAQ = "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/";

function PreguntaCard({ faq, open, onClick }) {
  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: 700,
        mb: 3,
        cursor: "pointer",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        borderRadius: 3,
        boxShadow: "0 2px 12px 0 rgba(60,72,88,0.10)",
        transition: "box-shadow 0.2s",
        "&:hover": { boxShadow: "0 6px 24px 0 rgba(60,72,88,0.18)" }
      }}
      onClick={onClick}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: open ? "#1976d2" : "#3b4a54",
            userSelect: "none"
          }}
        >
          {faq.titulo}
        </Typography>
        {open && (
          <Typography variant="body1" sx={{ mt: 2, color: "#374151" }}>
            {faq.respuesta}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

function Faqs() {
  const [data_Faqs, setData_Faqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { authorization: 'Bearer ipss.get' };
        const response = await fetch(API_FAQ, { headers });
        if (!response.ok) {
          throw new Error('Error al cargar la información de Preguntas Frecuentes');
        }
        const data = await response.json();
        setData_Faqs(data.data || []);
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
          Preguntas Frecuentes
        </Typography>
        <Box width="100%" maxWidth={700}>
          {data_Faqs.length > 0 ? (
            data_Faqs.map((faq, idx) => (
              <PreguntaCard
                key={faq.id}
                faq={faq}
                open={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))
          ) : (
            <Typography variant="body1">No hay preguntas frecuentes disponibles.</Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Faqs;