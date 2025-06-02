import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ServicioCard({ imagen, titulo, descripcion }) {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate("/contacto", { state: { producto: titulo } });
    };

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
                component="img"
                height="200"
                image={imagen}
                alt={titulo}
                sx={{ objectFit: "cover" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6">{titulo}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {descripcion}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleContact}>
                    Contáctanos
                </Button>
            </CardContent>
        </Card>
    );
}

export default ServicioCard;