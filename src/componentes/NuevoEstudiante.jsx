import { useState } from "react";
import {
  FieldRoot,
  FieldLabel,
  Input,
  Center,
  Box,
  Heading,
  NativeSelectRoot,
  NativeSelectField,
} from "@chakra-ui/react";
import { Header } from "./Header";

export function NuevoEstudiante() {
  const [EstudianteENT, setEstudianteENT] = useState({
    dni: "",
    nombre: "",
    direccion: "",
    edad: "",
    email: "",
    asignatura: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Nuevo estudiante:", EstudianteENT);
    // aquí iría la lógica para enviar los datos al servidor
  }

  return (
    <>
      <Header />
      <Center>
        <Box m="40px" boxShadow="xl" borderRadius="md" width="40%" id="caja">
          <Box textAlign="center">
            <Heading>Nuevo alumno</Heading>
          </Box>
          <Box p="20px">
            <form id="formulario" onSubmit={handleSubmit}>
              <FieldRoot mt="3">
                <FieldLabel>DNI</FieldLabel>
                <Input
                  type="text"
                  id="dni"
                  required
                  onChange={(event) =>
                    setEstudianteENT({
                      ...EstudianteENT,
                      dni: event.target.value,
                    })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Nombre</FieldLabel>
                <Input
                  type="text"
                  id="nombre"
                  required
                  onChange={(event) =>
                    setEstudianteENT({
                      ...EstudianteENT,
                      nombre: event.target.value,
                    })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Dirección</FieldLabel>
                <Input
                  type="text"
                  id="direccion"
                  required
                  onChange={(event) =>
                    setEstudianteENT({
                      ...EstudianteENT,
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
                  onChange={(event) =>
                    setEstudianteENT({
                      ...EstudianteENT,
                      edad: event.target.value,
                    })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="text"
                  id="email"
                  required
                  onChange={(event) =>
                    setEstudianteENT({
                      ...EstudianteENT,
                      email: event.target.value,
                    })
                  }
                />
              </FieldRoot>
              <FieldRoot mt="3">
                <FieldLabel>Asignatura</FieldLabel>
                {/*<Input type='text' id='asignatura' required onChange={event => setStudent({...student, asignatura:event.target.value})} />*/}
                <NativeSelectRoot>
                  <NativeSelectField
                    id="asignatura"
                    onChange={(event) =>
                      setEstudianteENT({
                        ...EstudianteENT,
                        asignatura: event.target.value,
                      })
                    }
                  >
                    <option value="1">Matemáticas</option>
                    <option value="2">Informática</option>
                    <option value="3">Inglés</option>
                    <option value="4">Literatura</option>
                  </NativeSelectField>
                </NativeSelectRoot>
              </FieldRoot>
              <FieldRoot mt="3">
                <Input
                  type="submit"
                  mt="3"
                  id="editar"
                  borderColor="teal"
                  value="Nuevo"
                />
              </FieldRoot>
            </form>
          </Box>
        </Box>
      </Center>
    </>
  );
}
