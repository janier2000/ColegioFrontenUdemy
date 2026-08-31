import { useState, useEffect } from 'react';
import {FormControl,FormLabel, Input, Center,Box,Heading,Select} from '@chakra-ui/react';
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
              <FormControl mt="3">
                <FormLabel>DNI</FormLabel>
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
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Nombre</FormLabel>
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
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Dirección</FormLabel>
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
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Edad</FormLabel>
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
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Email</FormLabel>
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
              </FormControl>
              <FormControl mt="3">
                <FormLabel>Asignatura</FormLabel>
                {/*<Input type='text' id='asignatura' required onChange={event => setStudent({...student, asignatura:event.target.value})} />*/}
                <Select
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
                </Select>
              </FormControl>
              <FormControl mt="3">
                <Input
                  type="submit"
                  mt="3"
                  id="editar"
                  borderColor="teal"
                  value="Nuevo"
                />
              </FormControl>
            </form>
          </Box>
        </Box>
      </Center>
    </>
  );
}
