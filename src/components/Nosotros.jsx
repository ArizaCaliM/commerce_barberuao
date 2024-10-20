import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../components/images/logo-color.svg";
import yogaPlaya from "../components/images/yoga-en-la-playa.jpg";
import yogaRio from "../components/images/yoga-en-el-rio.jpg";

const Nosotros = ({ darkMode }) => {
  return (
    <Box
      m={3}
      style={{
        backgroundColor: darkMode ? "#EDF67D" : "#301E67",
        height: "1800px",
      }}
    >
      <Box
        m={5}
        style={{
          backgroundColor: "#564592",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        <h1 style={{ fontFamily: "Roboto", fontWeight: "300", color: "white" }}>
          Barber UAO, Tienda online
        </h1>
      </Box>
      <Box
        m={3}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid>
          <img src={logo} alt="logo" />
        </Grid>
        <Box
          m={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Grid m={3}>
            <h1
              style={{
                marginLeft: "40%",
                color: darkMode ? "black" : "white",
                fontFamily: "Montserrat",
              }}
            >
              Misión y Visión
            </h1>
            <p
              style={{
                marginTop: "5%",
                color: darkMode ? "black" : "white",
                letterSpacing: "1px",
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "16px",
                fontWeight: "300",
                fontFamily: "'Montserrat', sans-serif",
                width: "80%",
                marginLeft: "10%",
              }}
            >
              'Barber UAO Tienda Online' es una tienda de productos de
              barbería, estetica del cabello y todo para su mejor estilo, manejo integrado con personalizadas, 
              nuestros productos son de una calidad única
              trabajadas con materiales sin contaminación ambiental.Nuestro
              misión es Lograr una transformación en la venta e insumos de la Barberia.
              Expandir el servicio a más personas.
            </p>
          </Grid>
        </Box>
      </Box>
      <Box
        m={3}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          height: "400px",
          //backgroundColor: "red",
        }}
      >
        <Grid
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Montserrat",
              color: darkMode ? "black" : "white",
            }}
          >
            Valores
          </h1>
          <Box
            m={1}
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "300",
              color: darkMode ? "black" : "white",
            }}
          >
            <ul>Responsabilidad.</ul>
            <ul>Conectarse con el cliente cien por ciento.</ul>
            <ul>Pasión en el Servicio.</ul>
            <ul>Empatía.</ul>
          </Box>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={yogaPlaya}
            alt="Yoga en la playa"
            style={{ width: "90%" }}
          />
        </Grid>
      </Box>

      <Box
        m={3}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          height: "500px",
          //backgroundColor: "red",
        }}
      >
        <Grid
          m={3}
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: darkMode ? "#564592" : "black",
          }}
        >
          <img src={yogaRio} alt="Yoga en la laguna" />
        </Grid>
        <Box
          m={3}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid m={3} style={{ height: "600px" }}>
            <h1
              style={{
                color: darkMode ? "black" : "white",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              ¿Que viene a resolver en la sociedad este emprendimiento?
            </h1>
            <p
              style={{
                color: darkMode ? "black" : "white",
                marginTop: "5%",
                letterSpacing: "1px",
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "16px",
                fontWeight: "300",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              “ Barber UAO ” nace de la necesidad de un aporte a la
              comunidad para que las personas tomen conciencia de los productos que les ofrecen,
               la falta de conocimiento que se tiene con los
              productos de barberia que se usan habitualmente y la falta de proveedores de confianza.
            </p>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Nosotros;
