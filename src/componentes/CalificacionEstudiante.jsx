import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  TableScrollArea,
  TableRoot,
  TableHeader,
  TableRow,
  TableColumnHeader,
  TableBody,
  TableCell,
} from "@chakra-ui/react";
import {
  Input,
  Badge,
  Center,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { Header } from "../componentes/Header";
import * as API from "../servicios/data";

export function CalificacionEstudiante(id) {
  //let token= sessionStorage.getItem("token");
  let params = useParams();
  const [calificaciones, setCalificaciones] = useState([]);
  const [calificacion, setCalificacion] = useState([]);

  useEffect(() => {
    API.ObtenerCalificaciones(params.matriculaId).then(setCalificaciones);
  }, [params.matriculaId]);

  let total = 0;

  calificaciones?.map(
    (calificacion) =>
      (total = total + calificacion.nota * (calificacion.porcentaje / 100)),
  );

  function CrearCalificacion() {
    debugger;
    let descrField = document.getElementById("descripcion");
    let notaField = document.getElementById("nota");
    let porcentField = document.getElementById("porcentaje");

    let valid =
      descrField.value.trim() !== "" &&
      notaField.value.trim() !== "" &&
      porcentField.value.trim() != "";

    if (valid) {
      API.CrearCalificacion(calificacion, params.matriculaId).then(
        (result) => {
          if (result == "true") {
            // Swal.fire(
            //   "Calificación añadida",
            //   "Has añadido una calificación de forma satisfactoria",
            //   "success",
            // );
            alert("Calificación añadida correctamente");
            document.getElementById("descripcion").value = "";
            document.getElementById("nota").value = "";
            document.getElementById("porcentaje").value = "";
          }
        },
      );
    } else {
      Swal.fire("Error", "Introduce valores para todos los campos", "error");
    }
  }

  function deleteCalificacion(id) {
    API.EliminarCalificacion(id).then((result) => {
      if (result == "true") {
        // Swal.fire(
        //   "Calificación eliminada",
        //   "Se ha eliminado la calificación de forma satisfactoria",
        //   "success",
        // );
        alert("Calificación eliminada de forma satisfactoria");
      } else {
        alert("Error al eliminar la calificación");
        // Swal.fire("Error", "Error al eliminar la calificacion", "error");
      }
    });
  }
  return (
    <>
      <Header />
      <Box m="100px">
        <TableScrollArea>
          <TableRoot size="md" variant="striped" colorScheme="gray">
            <TableHeader>
              <TableRow>
                <TableColumnHeader>Descripción</TableColumnHeader>
                <TableColumnHeader>Nota</TableColumnHeader>
                <TableColumnHeader>Ponderación</TableColumnHeader>
                <TableColumnHeader></TableColumnHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calificaciones?.map((calificacion) => (
                <TableRow key={calificacion.id}>
                  <TableCell>{calificacion.descripcion}</TableCell>
                  <TableCell>{calificacion.nota}</TableCell>
                  <TableCell>{calificacion.porcentaje}%</TableCell>
                  <TableCell>
                    <FaTrash
                      cursor="pointer"
                      onClick={() => deleteCalificacion(calificacion.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <Input
                    type="text"
                    id="descripcion"
                    placeholder="Descripción"
                    onChange={(event) =>
                      setCalificacion({
                        ...calificacion,
                        descripcion: event.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    id="nota"
                    placeholder="Nota"
                    onChange={(event) =>
                      setCalificacion({
                        ...calificacion,
                        nota: event.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    id="porcentaje"
                    placeholder="Ponderación"
                    onChange={(event) =>
                      setCalificacion({
                        ...calificacion,
                        porcentaje: event.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <FaCheck
                    cursor="pointer"
                    onClick={() => CrearCalificacion()}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </TableRoot>
        </TableScrollArea>

        {
          <Center>
            <Box mt="10px" fontSize="lg">
              Nota total:{" "}
              <Badge fontSize="lg" variant="outline" colorScheme="green">
                {total}
              </Badge>
            </Box>
          </Center>
        }
      </Box>
    </>
  );
  //}
}
