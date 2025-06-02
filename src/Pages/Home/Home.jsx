import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";
import Banner from "../../Componentes/banner/banner";
import EnviosBanner from "../../Componentes/EnviosBanner/EnviosBanner"; // Ajusta la ruta según tu estructura
const Home = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <Banner />
   <EnviosBanner />
   
    <Footer />
  </div>
);

export default Home;