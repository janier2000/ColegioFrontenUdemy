import { useState, useEffect } from "react";
import * as API from "../servicios/data";
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
import { FaTrash } from "react-icons/fa";

export function ListarEstudiante() {
  const [LstEstudiantes, setLstEstudiantes] = useState([]);
  let usuario = sessionStorage.getItem("usuario");
  useEffect(() => {
    API.ObtenerLstEstudiantes(usuario).then(setLstEstudiantes);
  }, [usuario]);

  function EliminarEstudiante(id) {
    debugger
    API.EliminarEstudiante(id).then((result) => {
      if (result == "true") {
          // Swal.fire(
          //   "Estudiante eliminado",
          //   "Has eliminado el alumno de forma satisfactoria",
          //   "success",
          // );
        alert("Estudiante eliminado correctamente");  
      } else {
        // Swal.fire("Error", "No se ha podido eliminar el alumno", "error");
        alert("No se ha podido eliminar el alumno");
      }
    });
  }

  return (
    <>
      <Box m="50px">
        <TableScrollArea>
          <TableRoot size="md" variant="striped" colorScheme="gray">
            <TableHeader>
              <TableRow>
                <TableColumnHeader>ID</TableColumnHeader>
                <TableColumnHeader>DNI</TableColumnHeader>
                <TableColumnHeader>Nombre</TableColumnHeader>
                <TableColumnHeader>Dirección</TableColumnHeader>
                <TableColumnHeader>Edad</TableColumnHeader>
                <TableColumnHeader>Email</TableColumnHeader>
                <TableColumnHeader>Asignatura</TableColumnHeader>
                <TableColumnHeader></TableColumnHeader>
                <TableColumnHeader></TableColumnHeader>
                <TableColumnHeader></TableColumnHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {LstEstudiantes?.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.dni}</TableCell>
                  <TableCell>{student.nombre}</TableCell>
                  <TableCell>{student.direccion}</TableCell>
                  <TableCell>{student.edad}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.asignatura}</TableCell>
                  {/* <TableCell><Link to={'/student/'+student.id}><FaEdit /></Link></TableCell>
                                    <TableCell><Link to={'/student/califications/'+student.matricula}><FaStickyNote /></Link></TableCell> */}
                  <TableCell>
                    <FaTrash
                      onClick={() => EliminarEstudiante(student.id)}
                      cursor="pointer"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableRoot>
        </TableScrollArea>
      </Box>
    </>
  );
}
