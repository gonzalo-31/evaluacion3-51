import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";

// URL de la API para obtener productos y servicios
const API_PRODUCTOS = "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/";

// Card para productos
function ProductoCard({ nombre, descripcion, precio, imgs, tallas, colores }) {
    // Hook para navegación entre páginas
    const navigate = useNavigate();
    // Función para redirigir a la página de contacto con el nombre del producto
    const handleContact = () => {
        navigate("/contacto", { state: { producto: nombre } });
    };

    return (
        <Card sx={{ maxWidth: 345, m:6 }} >
            {/* Muestra la imagen principal del producto si existe */}
            {imgs && imgs[0] && (
                <CardMedia
                    component="img"
                    height="400"
                    image={imgs[0]}
                    alt={nombre}
                    sx={{ objectFit: "cover" }}
                />
            )}
            <CardContent>
                {/* Nombre del producto */}
                <Typography gutterBottom variant="h6">{nombre}</Typography>
                {/* Descripción del producto */}
                <Typography variant="body2" color="text.secondary">{descripcion}</Typography>
                {/* Precio del producto */}
                <Typography variant="subtitle1" color="primary" mt={1}>${precio}</Typography>
                {/* Tallas disponibles, si existen */}
                {tallas && tallas.length > 0 && (
                    <Typography variant="body2">Tallas: {tallas.join(", ")}</Typography>
                )}
                {/* Colores disponibles, si existen */}
                {colores && colores.length > 0 && (
                    <Typography variant="body2">Colores: {colores.join(", ")}</Typography>
                )}
                {/* Botón para contactar */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleContact}
                >
                    Contáctanos
                </Button>
            </CardContent>
        </Card>
    );
}

// Card para servicios
function ServicioCard({ nombre, ubicacion, fecha, cupos, imgs }) {
    // Hook para navegación entre páginas
    const navigate = useNavigate();
    // Función para redirigir a la página de contacto con el nombre del servicio
    const handleContact = () => {
        navigate("/contacto", { state: { producto: nombre } });
    };

    return (
        <Card sx={{ maxWidth: 345, m: 6 }}>
            {/* Muestra la imagen principal del servicio si existe */}
            {imgs && imgs[0] && (
                <CardMedia
                    component="img"
                    height="400"
                    image={imgs[0]}
                    alt={nombre}
                    sx={{ objectFit: "cover" }}
                />
            )}
            <CardContent>
                {/* Nombre del servicio */}
                <Typography gutterBottom variant="h6">{nombre}</Typography>
                {/* Ubicación del servicio */}
                <Typography variant="body2" color="text.secondary">
                    Ubicación: {ubicacion}
                </Typography>
                {/* Fecha del servicio */}
                <Typography variant="body2" color="text.secondary">
                    Fecha: {fecha}
                </Typography>
                {/* Cupos disponibles */}
                <Typography variant="body2" color="text.secondary">
                    Cupos: {cupos}
                </Typography>
                {/* Botón para contactar */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleContact}
                >
                    Contáctanos
                </Button>
            </CardContent>
        </Card>
    );
}

function Productos() {
    // Estados para almacenar productos, servicios, estado de carga y errores
    const [dataProductos, setDataProductos] = useState([]);
    const [dataServicios, setDataServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para cargar los datos al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Encabezados para la petición
                const headers = { authorization: 'Bearer ipss.get' };
                // Solicitud a la API
                const response = await fetch(API_PRODUCTOS, { headers });
                if (!response.ok) {
                    throw new Error('Error al cargar los productos y servicios');
                }
                // Parsear respuesta y actualizar estados
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

    // Muestra un indicador de carga mientras se obtienen los datos
    if (loading) return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <CircularProgress />
            <Typography ml={2}>Cargando productos...</Typography>
        </Box>
    );

    // Muestra un mensaje de error si ocurre algún problema
    if (error) return (
        <Box>
            <Typography>{error}</Typography>
        </Box>
    );

    // Renderiza la página de productos y servicios
    return (
        <>
            {/* Encabezado */}
            <Header />
            <Box
                p={2}
                minHeight="150vh"
                sx={{ backgroundColor: "#91AA9D" }}
            >
                {/* Sección de productos */}
                <Typography variant="h5" gutterBottom>Productos</Typography>
                <Grid container spacing={2}>
                    {dataProductos.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <ProductoCard {...item} />
                        </Grid>
                    ))}
                </Grid>

                {/* Sección de servicios */}
                <Typography variant="h5" gutterBottom mt={4}>Servicios</Typography>
                <Grid container spacing={2}>
                    {dataServicios.map((serv) => (
                        <Grid item xs={12} sm={6} md={4} key={serv.id}>
                            <ServicioCard {...serv} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* Pie de página */}
            <Footer />
        </>
    );
}

export default Productos;