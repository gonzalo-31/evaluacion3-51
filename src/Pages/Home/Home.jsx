import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";
import Banner from "../../Componentes/banner/banner";
import EnviosBanner from "../../Componentes/EnviosBanner/EnviosBanner";
import FormularioSuscripcion from "../../Componentes/Suscripcion/Formulario";
import { Box } from "@mui/material";

const Home = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <Box
      sx={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        flex: 1,
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Banner />
      <EnviosBanner />
      <FormularioSuscripcion /> 
    </Box>
    <Footer />
  </div>
);

export default Home;