import { useState } from "react";
import * as API from "../servicios/data";
import { useEffect } from "react";

export function ListarEstudiante() {
  const [LstEstudiantes, setLstEstudiantes] = useState([]);
  let usuario = sessionStorage.getItem("usuario");
  useEffect(() => {
    API.ObtenerLstEstudiantes(usuario).then(setLstEstudiantes);
  }, [usuario]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Asignatura</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {LstEstudiantes?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.dni}</td>
              <td>{item.nombre}</td>
              <td>{item.direccion}</td>
              <td>{item.edad}</td>
              <td>{item.email}</td>
              <td>{item.asignatura}</td>
              {/* <td>
                <Link to={"/student/" + item.id}>
                  <FaEdit />
                </Link>
              </td>
              <td>
                <Link to={"/student/califications/" + item.matricula}>
                  <FaStickyNote />
                </Link>
              </td> 
               <td><FaTrash onClick={() => deleteStudent(item.id)} cursor='pointer' /></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
