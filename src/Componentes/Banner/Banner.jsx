import React from "react";

const Banner = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "450px",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30px"
    }}
  >
    <img
      src="/imagenes/descargar.jpg"
      alt="Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: 2
      }}
    />
    <div
      style={{
        position: "relative",
        zIndex: 3,
        color: "#fff",
        textAlign: "center"
      }}
    >
      <h1>¡Bienvenido a la Tienda!</h1>
      <br />
      <h4>
        Insumos para tejido, lanas naturales y vellón de alta calidad.<br />
        Encuentra los mejores productos aquí para tus proyectos de tejido.
      </h4>
      <button
        style={{
          marginTop: "50px",
          padding: "14px 40px",
          fontSize: "1.2rem",
          background: "linear-gradient(90deg, #91AA9D 0%, #ffffff 100%)",
          color: "#333",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 4px 16px rgba(25,118,210,0.15), 0 2px 8px rgba(0,0,0,0.10)",
          letterSpacing: "1px",
          transition: "transform 0.2s, box-shadow 0.2s"
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = "scale(1.07)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(25,118,210,0.25), 0 4px 16px rgba(0,0,0,0.15)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(25,118,210,0.15), 0 2px 8px rgba(0,0,0,0.10)";
        }}
        onClick={() => window.location.href = "/productos"} 
      >
        Descubre más
      </button>
    </div>
  </div>
);

export default Banner;
