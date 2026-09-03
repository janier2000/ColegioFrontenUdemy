import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../servicios/data";
import {
  FieldRoot,
  FieldLabel,
  Input,
  Center,
  Box,
  Heading,
  NativeSelectRoot,
  NativeSelectField,
  Button,
} from "@chakra-ui/react";
import { Header } from "./Header";

export function EditarEstudiante() {
    let params = useParams();
  const { IdEstudiante } = useParams();
  const [Estudiante, setEstudiante] = useState({});


    useEffect(() => {
        API.ObtenerDetalleEstudiante(params.IdEstudiante).then(setEstudiante);
    },[]);

  function handleSubmit(e) {
    e.preventDefault();
    API.EditarEstudiante(Estudiante).then((result) => {
      if (result == "true") {
        // Swal.fire(
        //     'Alumno modificado',
        //     'Se han modificado los datos del alumno de forma satisfactoria',
        //     'success'
        //   )
        alert("Alumno modificado con éxito");
      }
    });
  }

  return (
    <>
      <Header />
      <Center>
        <Box m="40px" boxShadow="xl" borderRadius="md" width="40%" id="caja">
          <Box textAlign="center">
            <Heading>Editar alumno {Estudiante.dni}</Heading>
          </Box>
          <Box p="20px">
            <form id="formulario" onSubmit={handleSubmit}>
              <Button type="submit" colorScheme="teal" mt="3">
                Editar
              </Button>
              <FieldRoot mt="3">
                <FieldLabel>DNI</FieldLabel>
                <Input
                  type="text"
                  id="dni"
                  required
                  disabled
                  value={Estudiante.dni}
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Nombre</FieldLabel>
                <Input
                  type="text"
                  id="nombre"
                  required
                  value={Estudiante.nombre}
                  onChange={(event) =>
                    setEstudiante({ ...Estudiante, nombre: event.target.value })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Dirección</FieldLabel>
                <Input
                  type="text"
                  id="direccion"
                  required
                  value={Estudiante.direccion}
                  onChange={(event) =>
                    setEstudiante({
                      ...Estudiante,
                      direccion: event.target.value,
                    })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Edad</FieldLabel>
                <Input
                  type="number"
                  id="edad"
                  required
                  value={Estudiante.edad}
                  onChange={(event) =>
                    setEstudiante({ ...Estudiante, edad: event.target.value })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="text"
                  id="email"
                  required
                  value={Estudiante.email}
                  onChange={(event) =>
                    setEstudiante({ ...Estudiante, email: event.target.value })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <Input
                  type="submit"
                  mt="3"
                  required
                  id="editar"
                  borderColor="teal"
                  value="Editar"
                />
              </FieldRoot>
            </form>
          </Box>
        </Box>
      </Center>
    </>
  );
}
