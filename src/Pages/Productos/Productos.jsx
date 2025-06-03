import { useEffect, useState } from "react";
import { Container, Box, Typography, CircularProgress, Grid, Card, CardContent, CardMedia, Button, Dialog } from "@mui/material";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";
import FormularioContacto from "../../Componentes/Formulario/Formulario";

// URL de la API para obtener productos y servicios
const API_PRODUCTOS = "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/";

// Card para productos
function ProductoCard({ nombre, descripcion, precio, imgs, tallas, colores, onContact }) {
    const [open, setOpen] = useState(false);

    const handleImageClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card
          sx={{
            maxWidth: 345,
            mx: "20px",
            my: 2,
            borderRadius: 4,
            boxShadow: "0 6px 32px 0 rgba(60,72,88,0.12)",
            transition: "transform 0.2s, box-shadow 0.2s",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)"
          }}
        >
            {imgs && imgs[0] && (
                <>
                    <CardMedia
                        component="img"
                        height="250"
                        image={imgs[0]}
                        alt={nombre}
                        sx={{
                            objectFit: "cover",
                            width: "100%",
                            minHeight: 250,
                            maxHeight: 250,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            cursor: "pointer"
                        }}
                        onClick={handleImageClick}
                    />
                    <Dialog open={open} onClose={handleClose} maxWidth="md">
                        <img
                            src={imgs[0]}
                            alt={nombre}
                            style={{ width: "100%", height: "auto", display: "block" }}
                            onClick={handleClose}
                        />
                    </Dialog>
                </>
            )}
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <div>
                    <Typography gutterBottom variant="h6" align="center">{nombre}</Typography>
                    <Typography variant="body2" color="text.secondary" align="center">{descripcion}</Typography>
                    <Typography variant="subtitle1" color="primary" mt={1} align="center">${precio}</Typography>
                    {tallas && tallas.length > 0 && (
                        <Typography variant="body2" align="center">Tallas: {tallas.join(", ")}</Typography>
                    )}
                    {colores && colores.length > 0 && (
                        <Typography variant="body2" align="center">Colores: {colores.join(", ")}</Typography>
                    )}
                </div>
                <Box textAlign="center" mt={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => onContact({ nombre, tallas, colores, tipo: "producto" })}
                    >
                        CONTÁCTANOS
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

// Card para servicios
function ServicioCard({ nombre, ubicacion, fecha, cupos, imgs, onContact }) {
    return (
        <Card
          sx={{
            maxWidth: 345,
            mx: "20px",
            my: 2,
            borderRadius: 4,
            boxShadow: "0 6px 32px 0 rgba(60,72,88,0.12)",
            transition: "transform 0.2s, box-shadow 0.2s",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)"
          }}
        >
            {imgs && imgs[0] && (
                <CardMedia
                    component="img"
                    height="250"
                    image={imgs && imgs[0]}
                    alt={nombre}
                    sx={{
                        objectFit: "cover",
                        width: "100%",
                        minHeight: 250,
                        maxHeight: 250,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16
                    }}
                />
            )}
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <div>
                    <Typography gutterBottom variant="h6" align="center">{nombre}</Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Ubicación: {ubicacion}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Fecha: {fecha}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Cupos: {cupos}
                    </Typography>
                </div>
                <Box textAlign="center" mt={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => onContact({ nombre, tipo: "servicio" })}
                    >
                        CONTÁCTANOS
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

function Productos() {
  
    const [dataProductos, setDataProductos] = useState([]);
    const [dataServicios, setDataServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const [openModal, setOpenModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState("");

    
    useEffect(() => {
        const fetchData = async () => {
            try {
              
                const headers = { authorization: 'Bearer ipss.get' };
               
                const response = await fetch(API_PRODUCTOS, { headers });
                if (!response.ok) {
                    throw new Error('Error al cargar los productos y servicios');
                }
               
                const data = await response.json();
                setDataProductos(data.data?.productos || []);
                setDataServicios(data.data?.servicios || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleContact = (objeto) => {
        setProductoSeleccionado(objeto);
        setOpenModal(true);
    };

    
    if (loading) return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <CircularProgress />
            <Typography ml={2}>Cargando productos...</Typography>
        </Box>
    );

    
    if (error) return (
        <Box>
            <Typography>{error}</Typography>
        </Box>
    );

  
    return (
        <>
            <Header />
            <Box
                sx={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
                    py: { xs: 2, md: 4 }
                }}
            >
                <Container maxWidth="xl">
                
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#3b4a54",
                            mb: 4,
                            textAlign: "center",
                            textShadow: "1px 1px 8px #b0bec5"
                        }}
                    >
                        Productos
                    </Typography>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {dataProductos.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ display: "flex" }}>
                                <ProductoCard {...item} onContact={handleContact} />
                            </Grid>
                        ))}
                    </Grid>

                    <Box mt={{ xs: 6, md: 10 }} />

               
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#3b4a54",
                            mb: 4,
                            textAlign: "center",
                            textShadow: "1px 1px 8px #b0bec5"
                        }}
                    >
                        Servicios
                    </Typography>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {dataServicios.map((serv) => (
                            <Grid item xs={12} sm={6} md={4} key={serv.id} sx={{ display: "flex" }}>
                                <ServicioCard {...serv} onContact={handleContact} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
           
            <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="sm" fullWidth>
                {productoSeleccionado && (
                    <FormularioContacto
                        onClose={() => setOpenModal(false)}
                        productoProp={productoSeleccionado}
                    />
                )}
            </Dialog>
            <Footer />
        </>
    );
}

export default Productos;